import React from "react";
import trek_video from "./data/vid-20190623-065838_L7nqjgDi.compressed.mp4";
import { Player, ControlBar, PlayToggle } from "video-react";
import "../node_modules/video-react/dist/video-react.css"; // import css

function Video() {
  return (
    <section className="video">
      <Player autoPlay src={trek_video}>
        <ControlBar autoHide={false} disableDefaultControls={true}>
          <PlayToggle />
        </ControlBar>
      </Player>
    </section>
  );
}
export default Video;
