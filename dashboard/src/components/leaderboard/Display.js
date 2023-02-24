const Display = ({ name }) => {
  return (
    <img
      className="dis"
      alt="picsss"
      src={`resources/playerPics/${
        playerMap[name.toLowerCase()] || playerMap["default"]
      }`}
    />
  );
};

const playerMap = {
  hydro: "Hydro.png",
  plonk: "seena.gif",
  xmanj: "xman.png",
  feniak: "rkt.png",
  "li yung": "angus_ass.png",
  flashkt5: "flash.png",
  awais: "awais.png",
  crowkakawww: "crow.png",
  bakedassh0le: "bobling.png",
  h4zed: "hazed.png",
  jam: "jam.png",
  thatswhatshezed: "fotus.png",
  default: "leo_smash.png",
};

export default Display;
