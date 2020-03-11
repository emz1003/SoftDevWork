# Emily Zhang and Yifan Wang
# SoftDev pd1
# K10 -- Import/Export Bank
# 2020-03-04

from pymongo import MongoClient
import json

file = open("pokedex.json")
client = MongoClient()
client = MongoClient('localhost', 27017)
db = client.pokedex
collection = db.pokemon
mons = file.readlines()
for line in mons:
    db.pokemon.insert_many(json.loads(line))
