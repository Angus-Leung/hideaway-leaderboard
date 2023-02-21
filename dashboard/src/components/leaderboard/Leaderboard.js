import { useState, useEffect } from "react";
import IFrame from "./IFrame";
import React from "react";

const Leaderboard = () => {
    return (
      <div className="leaderboardheader">
        <h2>Leaderboard</h2>
        <LeaderboardColumnHeader />
        <LeaderboardContent />
      </div>
    );
  };
  
  const LeaderboardColumnHeader = () => {
    return (
      <div className="LeadColumnHeader">
        <div className="col-xs-1">
          <h4>#</h4>
        </div>
        <div className="col-xs-2">
          <h4>Elo</h4>
        </div>
        <div className="col-xs-5">
          <h4>Player</h4>
        </div>
        <div className="col-xs-3">
          <h4>Rank</h4>
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
        const playerObject = {name: player.name, tag: player.tag};
        setSelectedPlayer(playerObject);
        setHasRender(true);
    };
    useEffect(() => {
      fetch("http://127.0.0.1:8000/players") // http://18.191.238.238/players  http://127.0.0.1:8000/players
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
          <div className="LeaderContent" key={index} onClick={(e) => onShow(e, player)}>
            <div className="col-xs-1">
              <p className="player-row-rank">
                {getRanking(index + 1, posts.length)}
              </p>
            </div>
            <div className="col-xs-2">
              <p className="player-row-text">{player.elo}</p>
            </div>
            <div className="col-xs-5">
              <p className="player-row-text">{player.name}</p>
            </div>
            <div className="col-xs-3">
              <img
                className="pics"
                src={`resources/valorantRanks/${player.rankUri}`}
                alt="valRank"
              ></img>
            </div>
          </div>
        ))}
        {hasRender && <IFrame name={selectedPlayer.name} tag={selectedPlayer.tag}></IFrame>}
      </>
    );
  };

  
  export default Leaderboard;