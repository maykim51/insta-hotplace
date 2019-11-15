area_list = [
        "가로수길", 
        "강남역",
        "건대",
        "경리단길",
        "광화문",
        # "남양주",
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
        # "양평",
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

query_list = {
        "가로수길":["신사동","신사"], 
        "강남역":["강남","신논현", "신논현역"],
        "건대":["건대입구"],
        "경리단길":["경리단"],
        "광화문":["광화문역"],
        # "남양주":[""],
        "대학로":["혜화"],
        "망원":["망원동"],
        "명동":["명동역"],
        "문래":["문래역"],
        "북촌":["경복궁역"],
        "분당":["서현역"],
        "상수":["상수동"],
        "샤로수길":["서울대입구역"],
        # "서래마을":[""],
        # "서촌":[""],
        "성수":["성수동","성수역","서울숲","서울숲역","뚝섬","뚝섬역"],
        # "송도":[""],
        # "압구정":[""],
        # "양재":[""],
        # "양평":[""],
        # "여의도":[""],
        # "연남":[""],
        # "을지로":[""],
        # "이태원":[""],
        # "익선동":[""],
        # "인사동":[""],
        # "일산":[""],
        # "잠실":[""],
        # "종로":[""],
        # "청담동":[""],
        # "한남동":[""],
        # "합정":[""],
        # "해방촌":[""],
        # "홍대":[""]
    }

tag_list = {
    "가로수길":["신사동","신사","신사동맛집", "가로수길맛집", "신사역", "신사역맛집", "신사맛집"], 
    "강남역":["강남역맛집","신논현맛집", "신논현역맛집", "강남맛집", "역삼동맛집", "서초동맛집", "역삼맛집", "서초맛집"],
    "건대":["건대입구","건대","건대입구역","건대역","건국대학교"],
    "경리단길":["경리단"],
    "광화문":["광화문역", "경복궁", "경복궁역", "안국역", "광화문맛집", "광화문역맛집", "경복궁맛집", "경복궁역맛집" "안국역맛집", "인사동맛집", "인사동"],
    # "남양주":[""],
    "대학로":["혜화"],
    "망원":["망원동"],
    "명동":["명동역"],
    "문래":["문래역"],
    "북촌":["경복궁역"],
    "분당":["서현역"],
    "상수":["상수동"],
    "샤로수길":["서울대입구역"],
    # "서래마을":[""],
    # "서촌":[""],
    "성수":["서울숲맛집", "성수맛집", "뚝섬맛집", "서울숲역맛집", "성수역맛집", "뚝섬역맛집", "성수동맛집"],
    # "송도":[""],
    "압구정":["압구정역","압구정로데오","압구정맛집","압구정역맛집","압구정로데오맛집"],
    # "양재":[""],
    # "양평":[""],
    # "여의도":[""],
    # "연남":[""],
    # "을지로":[""],
    # "이태원":[""],
    # "익선동":[""],
    # "인사동":[""],
    # "일산":[""],
    # "잠실":[""],
    # "종로":[""],
    "청담동":["청담역","청담","청담동맛집","청담역맛집","청담맛집"],
    # "한남동":[""],
    # "합정":[""],
    # "해방촌":[""],
    "홍대":["홍대입구","홍익대학교","홍대입구역","홍대맛집","홍대입구맛집","홍익대학교맛집", "홍대입구역맛집"]
}

def map_query_to_venue(query):
    if query in query_list:
        return query
    for k in query_list.keys():
        if query in query_list[k]:
            return k
    return None

def map_tag_to_area(tag):
    if tag in tag_list:
        return tag
    for k in tag_list.keys():
        if tag in tag_list[k]:
            return k
    return None

def get_tags_per_area(area_name):
    if area_name not in tag_list:
        print("No such area. Check the area name.")
        return None
    return tag_list[area_name]

def validate_area_name(area_name):
    if area_name in area_name:
        return True
    return False


def get_search_list(area_name):
    if area_name in area_list:
        return search_list[area_name]
    return None


if __name__ == "__main__":
    map_query_to_venue("서울숲맛집")