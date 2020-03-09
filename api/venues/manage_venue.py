import json
import pymongo
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['scc-hotplace']
collection = db['venuelist']

from selenium import webdriver
import time
import os

from .address_map import get_area_from_address
from bson.json_util import dumps

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
    print("updating file:"+file)
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
            # right_area = get_area_from_address(venue[1])
            # if right_area is None:
            #     right_area = area
            # collection.insert_one({"area_name": right_area, "venue_name": venue[0], "address": venue[1]})

            right_areas = get_area_from_address(venue[1])
            if right_areas is None:
                right_area = area
                # print("updating file "+file+ " for area "+ right_area + "...")
                collection.insert_one({"area_name": right_area, "venue_name": venue[0], "address": venue[1]})
            else:
                # print("updating file "+file+ " for area "+ str(right_areas) + "...")
                for right_area in right_areas:                    
                    collection.insert_one({"area_name": right_area, "venue_name": venue[0], "address": venue[1]})


def search_venue(area_name, venue_name):
    data = {}
    data = collection.find({"area_name": area_name, "venue_name": venue_name}).limit(1)
    num_of_data = collection.count_documents({"area_name": area_name, "venue_name": venue_name})
    if num_of_data == 0:
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

    def get_naver_info(data):
        
        options = webdriver.ChromeOptions()
        options.add_argument('headless')

        dir_path = os.path.dirname(os.path.realpath(__file__))
        driver = webdriver.Chrome(
            # executable_path="%s/bin/chromedriver/chromedriver" % dir_path,
            executable_path="%s/chromedriver.exe" % dir_path, chrome_options = options)

        driver.get("https://m.map.naver.com/search2/search.nhn?query="+data["area_name"]+" "+data["venue_name"]+"&sm=hty&style=v5#/list")


        div_elems = driver.find_elements_by_xpath("//*[@id=\"ct\"]/div[2]/ul/li/div[1]/a[2]")
        if len(div_elems) < 1:
            return -1
        else: 
            div_elems[0].click()

        time.sleep(3)
        naver_url = driver.current_url
        naver_map_url = naver_url.replace("home", "location?subtab=location")
        # print(driver.current_url)
        naver_description=""

        try:
            naver_description = driver.find_element_by_class_name("wbjO0CnRyw").text
            # print(naver_description.text)
        except:
            try:
                naver_description = driver.find_element_by_class_name("WoYOwsMl8Q").text
                # print(naver_description.text)
            except:
                naver_description = ""

        # return naver_url, naver_description, naver_map_url

        data["description"] = naver_description
        data["url_naver_map"] = naver_url
        data["url_naver_map_direction"] = naver_map_url

        return data
        

    # print("searching venue name {}".format(venue_name))
    data = db["venues"].find({"area_name": area_name, "venue_name": venue_name},{"_id":0}).limit(1)
    num_of_data = db["venues"].count_documents({"area_name": area_name, "venue_name": venue_name})
    if num_of_data == 0:
        data = {
            "venue_name": venue_name,
            "area_name": area_name,
            "description": "식당에 대한 설명을 입력해주세요.",
            "url_naver_map": ""
            }
        get_naver_info(data)
        db["venues"].insert_one(data)
        return get_venue_detail(area_name, venue_name)
    else: 
        for doc in data:
            return doc


def update_venue_detail_all():
    for area in area_list:
        
        data = db["areas"].find({"area_name":area},{"venues":1, "_id":0})
        num_of_data = int(db["areas"].count_documents({"area_name":area}))
        if  num_of_data is not 0:
        # if data.count() != 0:
            data = dumps(data, ensure_ascii=False)
            data = json.loads(data)
            venue_list = []
            for item in data:
                for venue in item["venues"]:
                    venue_list.append(venue["name"])
            
            for venue in venue_list:
                get_venue_detail(area, venue)
        print("Update finished for area: "+area)
           
    

if __name__ == "__main__":
    ## updated lists
    # update_venue_list("gangnamgu.json", "강남역")
    # update_venue_list("jongrogu.json", "광화문")
    # update_venue_list("mapogu.json", "홍대")
    # update_venue_list("sechogu.json", "강남역")
    # update_venue_list("seongdonggu.json", "성수")
    # update_venue_list("seochogu.json", "강남역")
    # update_venue_list("yongsangu.json", "경리단길")
    # update_venue_list("gwangjingu.json", "건대")
    # update_venue_list("junggu.json", "을지로")
    # update_venue_list("yeongdeungpogu.json", "여의도")
    # update_venue_list("gwanakgu.json", "샤로수길")
    # update_venue_list("songpagu.json", "잠실")



    

    # search_venue("강남역", "티엔티엔티엔")
    # get_venue_detail("성수", "도치피자")
    
    update_venue_detail_all()