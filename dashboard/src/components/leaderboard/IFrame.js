import Display from "./Display";
import { useRef, useState, useEffect } from "react";

const IFrame = ({ name, tag }) => {
  const IFrameRef = useRef(null);
  const [hasRender, setHasRender] = useState(false);
  useEffect(() => {
    IFrameRef.current.addEventListener("load", () => {
      setHasRender(true);
    });
  }, []);
  return (
    <div className="iframe-div">
      <div id="iframeprofile">
        <div className="iframe-profile-picture">
          {hasRender && <Display name={name} />}
          <div>
            <iframe
              ref={IFrameRef}
              title="playercard"
              id="embed"
              src={`https://tracker.gg/valorant/profile/riot/${name}%23${tag}/overview`}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IFrame;
