const IFrame = ({ name, tag }) => {
  return (
    <div id="container">
      <iframe

        title="playercard"
        id="embed"
        src={`https://tracker.gg/valorant/profile/riot/${name}%23${tag}/overview`}
      ></iframe>
    </div>
  );
};

export default IFrame;
