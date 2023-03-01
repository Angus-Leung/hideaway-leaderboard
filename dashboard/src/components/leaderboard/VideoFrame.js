import ReactPlayer from "react-player";

const clip = {
  hydro: "key2A96tcYQ",
  plonk: "seena",
  xmanj: "xman",
  feniak: "rkt",
  "li yung": "4qxqEKlLTEk",
  flashkt5: "flash",
  awais: "awais",
  crowkakawww: "XaRUG75D3b4",
  bakedassh0le: "bob",
  h4zed: "hazed",
  jam: "fbqbVCRUkgs",
  thatswhatshezed: "fotus",
  default: "leo",
};
const ClipFrame = ({ name }) => {
  return (
    <div className="player-clip">
      <ReactPlayer
        url={`https://youtu.be/${clip[name.toLowerCase()]}`}
        config={{
          youtube: {
            playerVars: { modestbranding: 1 },
          },
        }}
        playing={true}
        width="100%"
        height="100%"
        volume=".2"
        controls="false"
      />
    </div>
  );
};

export default ClipFrame;
