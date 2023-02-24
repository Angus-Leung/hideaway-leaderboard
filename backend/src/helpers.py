import logging
from operator import itemgetter

logger = logging.getLogger()


def formatRawPlayerData(raw_player_data):
    formatted_player_data = []
    for raw_data in raw_player_data:
        logger.info(raw_data)
        player_data = {
            "elo": raw_data["data"]["elo"],
            "name": raw_data["data"]["name"],
            "rankUri": raw_data["data"]["currenttierpatched"].replace(" ", "_")
            + ("_Rank.png"),
            "tag": raw_data["data"]["tag"],
        }
        formatted_player_data.append(player_data)

    formatted_player_data = sorted(
        formatted_player_data, key=itemgetter("elo"), reverse=True
    )

    return formatted_player_data
