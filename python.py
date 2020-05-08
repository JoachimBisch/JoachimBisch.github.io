import pymongo
import json, urllib.request
from pymongo import MongoClient

client = MongoClient('mongodb+srv://Joachim:bpsoireewillruletheworld@clusterbischpeuchet-chy7p.gcp.mongodb.net/test?retryWrites=true&w=majority')
db = client.bpdatabase
bpdata = db.bpdata

#Recap: in JavaScript, you serialize to JSON with JSON.stringify() and parse with JSON.parse(). 
# This works in the browser as well as Node.js. 
# In Python, first import the json module then serialize with json.dumps() and parse with json.loads().

with urllib.request.urlopen("https://joachimbisch.github.io") as url:
    data = json.loads(url.read().decode())
    print(data)

bpdata.insert_one()