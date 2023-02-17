import "./App.css";

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
  return (
    <>
      {MockData.map((player, index) => (
        <div className="LeaderContent">
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

const MockData = [
  { elo: 1874, name: "Li Yung", rank: "Ascendant 1" },
  { elo: 1776, name: "Awais", rank: "Diamond 3" },
  { elo: 1724, name: "H4zed", rank: "Diamond 3" },
  { elo: 1720, name: "flashkt5", rank: "Diamond 3" },
  { elo: 1628, name: "Hydro", rank: "Diamond 2" },
  { elo: 1521, name: "Jam", rank: "Diamond 1" },
];

export default App;
