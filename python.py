import pymongo
import json
from pymongo import MongoClient

client = MongoClient('mongodb+srv://Joachim:bpsoireewillruletheworld@clusterbischpeuchet-chy7p.gcp.mongodb.net/test?retryWrites=true&w=majority')
db = client.bpdatabase

bpdata = db.bpdata



bpdata.insert_one()