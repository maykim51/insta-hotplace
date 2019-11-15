# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import argparse
import json

from inscrawler import InsCrawler
from inscrawler.settings import override_settings
from inscrawler.settings import prepare_override_settings
import filter_posts

import pymongo
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['scc-hotplace']
collection = db['posts']

from collections import OrderedDict
from bson.objectid import ObjectId
from area_list import get_tags_per_area


def get_posts_by_hashtag(tag, number, debug):
    ins_crawler = InsCrawler(has_screen=debug)
    return ins_crawler.get_latest_posts_by_tag(tag, number)


def output(data, tag=""):
    out = json.dumps(data, ensure_ascii=False)

    out = filter_posts.start_filter(out, tag)
    
    # collection.drop()
    try:
        collection.insert_many(json.loads(out))
    except:
        print("could not find post with tag {}".format(tag))

        

def sort_posts_per_area(area_name):
    def find_posts(data):
        for venue in data:
            for i in range(len(data[venue])):
                _id = ObjectId(data[venue][i])
                post = db.posts.find_one({"_id": _id})
                data[venue][i] = post
            data[venue] = {"num_of_posts": len(data[venue]), "posts": data[venue]}
        return(data)

    db["areas"].delete_many({"area_name": area_name})

    temp_dict = {}
    posts = db["posts"].find({"area_name": area_name})
    print(posts.count())
    for doc in posts:
        venue_name = doc["venue_name"]
        if venue_name not in temp_dict:
            temp_dict[venue_name] = [doc["_id"]]
        else:
            temp_dict[venue_name].append(doc["_id"])

    sorted_data = OrderedDict(sorted(temp_dict.items(), reverse=True, key=lambda x: len(x[1])))
    sorted_data = find_posts(sorted_data)

    db["areas"].insert_one({"area_name":area_name, "venues": sorted_data})


def update_posts_per_area(area_name):
    #drop the collection before running it.
    tag_list = get_tags_per_area(area_name)
    if tag_list is None:
        print("Could not update posts for area {}".format(area_name))
        return
    
    for tag in tag_list:
        print("start crawling for tag {}".format(tag))
        output(get_posts_by_hashtag(tag, 15, False), tag)
    
    sort_posts_per_area(area_name)
    print("Update completed for area {}!".format(area_name))
    return


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Instagram Crawler")
    prepare_override_settings(parser)
    args = parser.parse_args()
    override_settings(args)

    
    #### IMPORTANT!!!!!!
    # drop the collection before running BELOW ONLY WHEN NEEDED.
    # collection.drop()


    # # update_posts_per_area("강남역")
    # update_posts_per_area("성수")
    # update_posts_per_area("광화문")
    update_posts_per_area("홍대")


    # sort_posts_per_area("강남역")
    # sort_posts_per_area("성수")

    # output(get_posts_by_hashtag("서울숲맛집", 5, False), "서울숲맛집")


