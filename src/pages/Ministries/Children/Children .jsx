import "./Children.css";
import { FaChevronRight } from "react-icons/fa";

function Children() {
  return (
    <div>
      <div className="background">
        <div className="childrenMinistryOverlay"></div>
        <video
          className="video bgImage"
          src="https://videos.pexels.com/video-files/3191109/3191109-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <video
          className="video bgImage"
          src="https://videos.pexels.com/video-files/7568735/7568735-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <video
          className="video bgImage"
          src="https://videos.pexels.com/video-files/7569462/7569462-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="eventsBreadCrumbsWrapper">
          <p className="eventsBreadCrumbs">
            <span>
              <a href="/">Home</a> <FaChevronRight />
            </span>
            <span>
              Ministries <FaChevronRight />
            </span>
            <span>
              Children Ministry <FaChevronRight />
            </span>
          </p>
          <h1>Children Ministry</h1>
        </div>
      </div>
    </div>
  );
}

export default Children;
