import pymongo
import json
from pymongo import MongoClient

client = MongoClient('mongodb+srv://Joachim:bpsoireewillruletheworld@clusterbischpeuchet-chy7p.gcp.mongodb.net/test?retryWrites=true&w=majority')
db = client.bpdatabase
bpdata = db.bpdata

#Recap: in JavaScript, you serialize to JSON with JSON.stringify() and parse with JSON.parse(). 
# This works in the browser as well as Node.js. 
# In Python, first import the json module then serialize with json.dumps() and parse with json.loads().

request = json.load(sys.stdin)
response = handle_request(request)
print("Content-Type: application/json", end="\n\n")
json.dump(response, sys.stdout, indent=2)
json.loads(request)


bpdata.insert_one(request)