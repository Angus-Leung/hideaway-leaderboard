import src.constants as constants
import src.helpers as helpers
import requests
import logging
import json
import redis
from datetime import datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


r = redis.Redis(host="localhost", port=6379, db=0)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger()
app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/players")
async def getAllPlayerData():
    raw_players_data = []
    for gamer in constants.gamers:
        logger.info(gamer["name"])
        if r.get(gamer["name"]):
            logger.info("\tLoaded from cache")
            raw_players_data.append(json.loads(r.get(gamer["name"])))
        else:
            response = requests.get(
                f"https://api.henrikdev.xyz/valorant/v1/mmr/na/{gamer['name']}/{gamer['tag']}"
            )
            response_json = response.json()
            response_json["last_retrieved"] = str(datetime.now())
            if response.status_code != 200:
                logger.info(f"\tFailed to load {gamer['name']} from henrikdev API")
            else:
                logger.info("\tLoaded from henrikdev API")
                r.set(gamer["name"], json.dumps(response_json))
                raw_players_data.append(response_json)

    formatted_players_data = helpers.formatRawPlayerData(raw_players_data)

    return formatted_players_data
