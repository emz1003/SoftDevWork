# Emily Zhang and Yifan Wang
# SoftDev pd1
# K10 -- Import/Export Bank
# 2020-03-04

from pymongo import MongoClient

file = open("pokedex.json")
client = MongoClient()
client = MongoClient('localhost', 27017)
db = client.pokedex
collection = db.pokemon
mons = file.read()
db.pokemon.insert_many(mons)
