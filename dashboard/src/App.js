import "./App.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div className="App-Leaderboard">
        <Leaderboard />
      </div>
    </div>
  );
}

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

const LeaderboardContent = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/players")
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
        <div className="LeaderContent" key={index}>
          <div className="col-xs-1">
            <h4>{index + 1}</h4>
          </div>
          <div className="col-xs-2">
            <h4>{player.elo}</h4>
          </div>
          <div className="col-xs-5">
            <h4>{player.name}</h4>
          </div>
          <div className="col-xs-3">
            <h4>{player.rank}</h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default App;