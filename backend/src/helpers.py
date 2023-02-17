import logging
from operator import itemgetter

logger = logging.getLogger()
def formatRawPlayerData (raw_player_data):
    formatted_player_data = []
    for raw_data in raw_player_data:
        logger.info(raw_data)
        player_data = {
            "elo": raw_data["data"][0]["elo"],
            "name": raw_data["name"],
            "rank": raw_data["data"][0]["currenttierpatched"]
            }
        formatted_player_data.append(player_data)

    formatted_player_data = sorted(formatted_player_data, key=itemgetter('elo'), reverse=True)

    return formatted_player_data


