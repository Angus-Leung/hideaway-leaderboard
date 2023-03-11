import ReactPlayer from "react-player";
import "./VideoFrame.css"

const clip = {
  hydro: "TjGDU_3Gj3g",
  plonk: "0DlrNK-xWjo",
  xmanj: "6vpK3SZjr0g",
  feniak: "P6InasIqCxg",
  "li yung": "4qxqEKlLTEk",
  flashkt5: "iNqSZYsnIbI",
  awais: "qkv36Mnd6NA",
  crowkakawww: "XaRUG75D3b4",
  bakedassh0le: "Vvq-LSt8YG8",
  h4zed: "WElw2UrUSLs",
  jam: "7OSON07MXHY",
  thatswhatshezed: "-DEJKwTUQuY",
  cros92: "sgdA-j6D8wo",
  gambit: "8IGvhK7Hylg",
  "1milk5sugar": "tVf_wEePfZg",
  default: "leo",
};

const ClipFrame = ({ name }) => {
  return (
    <div className="react-frame">
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
        border-style="solid"
        border-size="1.5px"
        boder-color="black"
      />
    </div>
  );
};

export default ClipFrame;