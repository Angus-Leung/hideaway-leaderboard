import requests
from fastapi import FastAPI
import redis
r = redis.Redis(host='localhost', port=6379, db=0)
r.set('foo', 'bar')

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/mmr")
async def getMMR():
  # response = requests.get("https://api.henrikdev.xyz/valorant/v1/mmr-history/na/awais/613")
  # return response.json()
  return r.get('foo')
