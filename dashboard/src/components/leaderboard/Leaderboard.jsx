import { useState, useEffect } from "react";
import IFrame from "./IFrame";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import ClipFrame from "./VideoFrame";
library.add(faExpand);

const Leaderboard = () => {
  return (
    <div className="leaderboardheader">
      <h2>Leaderboard</h2>
      <LeaderboardColumnHeader />

    <div className="leaderboard-row-content">

      <LeaderboardContent />
    </div>
    </div>
  );
};

const LeaderboardColumnHeader = () => {
  return (
    <div className="LeadColumnHeader">
      <div className="rank-header">
        <h4>#</h4>
      </div>
      <div className="elo-header">
        <h4>Elo</h4>
      </div>
      <div className="player-header">
        <h4>Player</h4>
      </div>
      <div className="rank-pic-header">
        <h4>Rank</h4>
      </div>
      <div className="expand-header">
        <img className="valo-pic" src="resources/valo.png" alt="valo"></img>
      </div>
    </div>
  );
};

const ranks = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
  4: "💩",
};

const getRanking = (number, length) => {
  if (number <= 3) return ranks[number];
  else if (number === length) return ranks[4];
  else return number;
};

const LeaderboardContent = () => {
  const [posts, setPosts] = useState([]);
  const [hasRender, setHasRender] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState({});
  const onShow = (e, player) => {
    const playerObject = { name: player.name, tag: player.tag };
    setSelectedPlayer(playerObject);
    setHasRender(!hasRender);
  };
  useEffect(() => {
    fetch("http://18.191.238.238/players") // http://18.191.238.238/players  http://127.0.0.1:8000/players
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      {posts.map((player, index) => (
        <div
          className="LeaderContent"
          key={index}
          onClick={(e) => onShow(e, player)}
          tabIndex="0"
        >
          <div className="leaderboard-rows">
            <div className="rank-col">
              <p className="player-row-rank">
                {getRanking(index + 1, posts.length)}
              </p>
            </div>
            <div className="elo-col">
              <p className="player-row-text">{player.elo}</p>
            </div>
            <div className="player-name-col">

              <p className="player-row-text">{player.name}</p>
            </div>
            <div className="rank-pic-col">
              <img
                className="rank-pic"
                src={`resources/valorantRanks/${player.rankUri}`}
                alt="valRank"
              ></img>
            </div>
            <div className="expand-col">
              <FontAwesomeIcon icon="fa-expand" />
            </div>
          </div>
          {hasRender && player.name === selectedPlayer.name && (
            <div style={{padding:'6px'}}>
              {hasRender && <ClipFrame name={selectedPlayer.name}/>}
              {hasRender && <IFrame name={selectedPlayer.name} tag={selectedPlayer.tag}/>}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Leaderboard;
