import ReactPlayer from "react-player";

const clip = {
    hydro: "Hydro",
    plonk: "seena",
    xmanj: "xman",
    feniak: "rkt",
    "li yung": "angus",
    flashkt5: "flash",
    awais: "awais",
    crowkakawww: "crow",
    bakedassh0le: "bob",
    h4zed: "hazed",
    jam: "jam",
    thatswhatshezed: "fotus",
    default: "leo",
  };
const ClipFrame = ({ name }) => {
  return (
    <div className="player-clip">
      <ReactPlayer
        url={`resources/clips/${clip[name.toLowerCase()]}Clip.mp4`}
        playing={true}
        width='100%'
        height='100%'
        volume='.2'
        controls='true'
      />
    </div>
  );
};

export default ClipFrame;
