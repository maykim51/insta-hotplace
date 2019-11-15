import json
import pymongo
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['scc-hotplace']
collection = db['venuelist']

import requests
from bs4 import BeautifulSoup

from venues.address_map import get_area_from_address

area_list = [
        "가로수길", 
        "강남역",
        "건대",
        "경리단길",
        "광화문",
        "남양주",
        "대학로",
        "망원",
        "명동",
        "문래",
        "북촌",
        "분당",
        "상수",
        "샤로수길",
        "서래마을",
        "서촌",
        "성수",
        "송도",
        "압구정",
        "양재",
        "양평",
        "여의도",
        "연남",
        "을지로",
        "이태원",
        "익선동",
        "인사동",
        "일산",
        "잠실",
        "종로",
        "청담동",
        "한남동",
        "합정",
        "해방촌",
        "홍대"
]

def update_venue_list(file, area):
    if area not in area_list:
        print(area + ": No such area. Could not insert the file into db.")
        return
        
    with open(file, 'r',  encoding="utf8") as f:
        data = json.loads(f.read())
        data = data["DATA"]
        venue_list = []
        # for item in data:
        #     item = item["upso_nm"].replace(" ", "")
        #     venue_list.append(item)
        # venue_list = list(set(venue_list))
        # for venue in venue_list:
        #     collection.insert_one({"area_name": area, "venue_name": venue})
        for item in data:
            venue_name = item["upso_nm"].replace(" ", "")
            address = item["site_addr"]
            venue_list.append((venue_name, address))
        venue_list = list(set(venue_list))
        for venue in venue_list:
            right_area = get_area_from_address(venue[1])
            if right_area is None:
                right_area = area
            collection.insert_one({"area_name": right_area, "venue_name": venue[0], "address": venue[1]})


def search_venue(area_name, venue_name):
    data = {}
    data = collection.find({"area_name": area_name, "venue_name": venue_name}).limit(1)
    if data.count() == 0:
        return None
    else:
        for doc in data:
            print(doc)
            return doc

def read_venue_list(file, area):   
    with open(file, 'r',  encoding="utf8") as f:
        data = json.loads(f.read())
        if area in data.keys():
            return data[area]
        else:
            print("no such area")
            return -1


def get_venue_detail(area_name, venue_name):

    def crawl_naver(data):
        ###FIXIT
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
        url = "https://m.map.naver.com/search2/search.nhn?query="+area_name+" "+venue_name+"&sm=hty&style=v4#/list"
        bs_data = requests.get(url, headers=headers)

        soup = BeautifulSoup(bs_data.text, 'html.parser')

        # uls = soup.find('ul', {'class' : 'search_list _items'})
        # uls = soup.select("#ct > div.search_listview._content._ctList > ul > li")
        # print(uls)

        ### FIXIT
        data["url_naver_map"] = url

        return data
        

    # print("searching venue name {}".format(venue_name))
    data = db["venues"].find({"area_name": area_name, "venue_name": venue_name},{"_id":0}).limit(1)
    if data.count() == 0:
        data = {
            "venue_name": venue_name,
            "area_name": area_name,
            "description": "식당에 대한 설명",
            "url_naver_map": ""
            }
        crawl_naver(data)
        db["venues"].insert_one(data)
        return get_venue_detail(area_name, venue_name)
    else: 
        for doc in data:
            return doc



# if __name__ == "__main__":
    ### updated lists
    # update_venue_list("gangnamgu.json", "강남역")
    # update_venue_list("jongrogu.json", "광화문")
    # update_venue_list("mapogu.json", "홍대")
    # update_venue_list("sechogu.json", "강남역")
    # update_venue_list("seongdonggu.json", "성수")
    # update_venue_list("seochogu.json", "강남역")
    # update_venue_list("yongsangu.json", "경리단길")

    

    # search_venue("강남역", "티엔티엔티엔")
    # get_venue_detail("성수", "도치피자")
    