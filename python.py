import pymongo
import json
from pymongo import MongoClient
from flask import Flask

#understand what this does
#with open('/Users/Jo/Desktop/Business/BP_Soirées/Site/web/InvitationPage/ScriptInvitation.js') as infoJSON:
#  data = json.load(infoJSON)


client = MongoClient('mongodb+srv://Joachim:7151011174151510176@clusterbischpeuchet-chy7p.gcp.mongodb.net/test?retryWrites=true&w=majority')
db = client.bpdatabase

bpdata = db.bpdata

bpdata.insert_one(DATAS HERE)