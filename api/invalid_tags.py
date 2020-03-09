import pymongo
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['scc-hotplace']
import json

keywords = [
        "좋아요", "커피", "맛집", "cafe", "coffee", "존맛" "인테리어", "푸드스타그램", "먹스타그램", "일상", "먹방", "카페", "cafe", "coffee", "인테리어", "사진맛집", "ㅊa"
]

foods = []

partial_tags = [
        "커피", "맛집", "카페"
]


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

invalid_tags = keywords + area_list + partial_tags

def update_invalid_tags():
        collection = db["invalidtags"]
        collection.drop()

        tag_list = keywords
        tag_list += foods
        tag_list += area_list
        for area in area_list:
                for partial in partial_tags:
                        tag_list.append(area+partial)

        tag_list = list(set(tag_list))
        for tag in tag_list:
                collection.insert_one({"word": tag})

def get_all_invalid_tags():
        res = []
        for doc in db["invalidtags"].find({},{"word": 1}):
                res.append(doc['word'])
        return res

if __name__ == "__main__":
        # update_invalid_tags()
        print(get_all_invalid_tags())