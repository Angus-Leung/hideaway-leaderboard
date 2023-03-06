import ReactPlayer from "react-player";

const clip = {
  hydro: "TjGDU_3Gj3g",
  plonk: "0DlrNK-xWjo",
  xmanj: "6vpK3SZjr0g",
  feniak: "rkt",
  "li yung": "4qxqEKlLTEk",
  flashkt5: "flash",
  awais: "qkv36Mnd6NA",
  crowkakawww: "XaRUG75D3b4",
  bakedassh0le: "Vvq-LSt8YG8",
  h4zed: "hazed",
  jam: "XLH1OM3F6kM",
  thatswhatshezed: "-DEJKwTUQuY",
  cros92: "sgdA-j6D8wo",
  gambit: "TMnQQutXIBs",
  default: "leo",
};

const ClipFrame = ({ name }) => {
  return (
      <ReactPlayer
        url={`https://youtu.be/${clip[name.toLowerCase()]}`}
        config={{
          youtube: {
            playerVars: { modestbranding: 1 },
          },
        }}
        playing={true}
        width="100%"
        height="350px"
        volume=".2"
        controls="false"
      />
  );
};

export default ClipFrame;
