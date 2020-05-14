# Emily Zhang and Yifan Wang
# SoftDev pd1
# K09 -- Yummy Mongo Py
# 2020-02-28
from pymongo import MongoClient
import json

# All restaurants in a specified borough.
# All restaurants in a specified zip code.
# All restaurants in a specified zip code and with a specified grade.
# All restaurants in a specified zip code with a score below a specified threshold.
# Something more clever.

file = open("primer-dataset.txt")
client = MongoClient()
client = MongoClient('localhost', 27017)
db = client.primer_db
collection = db.restaurants
rsrts = file.readline()
while rsrts != None: 
    rsrt = json.loads(rsrts)
    db.restaurants.insert_one(rsrt)
for rsrt in db.restaurants.find({"borough": "manhattan"}):
    pprint.pprint(rsrt)
for rsrt in db.restaurants.find({"zipcode": "10462"}):
    pprint.pprint(rsrt)
for rsrt in db.restaurants.find({"zipcode": "10462", "grade": "A"}):
    pprint.pprint(rsrt)
for rsrt in db.restaurants.find({"zipcode": "10462", "score": {"$lt": 20}}):
    pprint.pprint(rsrt)
for rsrt in db.restaurants.find({"borough": "manhattan", "score": {"$lt": 20, "$gt": 5}}):
    pprint.pprint(rsrt)





