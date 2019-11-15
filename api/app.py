# -- coding: utf-8 --
from flask import Flask, render_template, jsonify, request, Response
from flask_restful import Resource, Api, reqparse, abort
from area_list import map_query_to_venue
from area_list import validate_area_name
from bson.json_util import dumps
import json
from collections import OrderedDict
from functools import wraps



app = Flask(__name__)
api = Api(app)

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['scc-hotplace']

from venues.manage_venue import get_venue_detail
from area_list import area_list


@app.route('/')
def home():
    return {"message": "Hi this is home!"}


#error_handling
def abort_if_area_doesnt_exist(area_name):
    # FIXIT find the right area name for the given query
    area = map_query_to_venue(area_name)
    if area == None:
        abort(404, message = "Cannot find area with the given query {}.".format(area_name))
    else:
        return area


class AreaList(Resource):
    parser = reqparse.RequestParser()
    def get(self):
        # self.area_list = json.loads(self.area_list)
        return {"area_list": area_list}


class Area(Resource):
    
    def get(self, area_name):
        #parser
        parser = reqparse.RequestParser()
        parser.add_argument(
            "venue_name_only", 
            type=bool,
            default=False
        )
        venue_name_only = parser.parse_args()["venue_name_only"]

        area = abort_if_area_doesnt_exist(area_name)
        if not venue_name_only:
            cursor = db.areas.find({"area_name": area},{"_id":0, "area_name":0})
            data = dumps(cursor, ensure_ascii=False)[1:-1].replace("$oid","_id")
            data = json.loads(data)["venues"]
        # else return list of venue_names
        else: 
            cursor = db.areas.find({"area_name": area},{"_id":0, "area_name":0})
            data = dumps(cursor, ensure_ascii=False)[1:-1].replace("$oid","_id")
            data = json.loads(data)["venues"]
            data = list(x["name"] for x in data)
        return jsonify({'result':'success', 'venues': data})


class Venue(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        "venue_name", 
        required=True,
        help="Please give a venue_name."
    )

    def get(self, area_name, venue_name):
        area = abort_if_area_doesnt_exist(area_name)
        data = get_venue_detail(area_name, venue_name)
        venue = dumps(data, ensure_ascii=False)
        venue = json.loads(venue)
        return venue, 200


api.add_resource(AreaList, '/areas')
api.add_resource(Area, '/areas/<string:area_name>')
api.add_resource(Venue, '/venues/<string:area_name>/<string:venue_name>')


if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)