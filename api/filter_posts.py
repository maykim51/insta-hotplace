import json
# from invalid_tags import invalid_tags
from invalid_tags import get_all_invalid_tags
from venues.manage_venue import search_venue
from area_list import map_tag_to_area
from vision_api.vision_api import validate_image

def set_area_name(tag):
    area_name = map_tag_to_area(tag)
    if area_name is None: 
        return None
    return area_name
        
def set_venue_name(area, hashtags):
    invalid_tags = get_all_invalid_tags()
    for hashtag in hashtags:
        if hashtag not in invalid_tags:
            if search_venue(area, hashtag):
                return hashtag
    return None    


def start_filter(data, tag):
    data_list = []
    data_list = json.loads(data)
    idx_to_del = []

    for i in range(len(data_list)):
        post = data_list[i]
        post["area_name"] = set_area_name(tag)
        venue = set_venue_name(post["area_name"], post["hashtags"])

        if venue == None:
            idx_to_del.append(i)
            continue
        else:
            #[start image filtering]
            filtered_img_urls = []
            for img_url in post["img_urls"]:
                if validate_image(img_url):
                    filtered_img_urls.append(img_url)
            #[end image filtering]

            if len(filtered_img_urls) < 1 :
                idx_to_del.append(i)
                continue
        
        post["venue_name"] = venue 
        post["img_urls"] = filtered_img_urls
            

    shift = 0
    for idx in idx_to_del:
        del data_list[idx-shift]
        shift += 1

    return json.dumps(data_list)
