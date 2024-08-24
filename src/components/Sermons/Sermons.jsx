import React from "react";
import { FaYoutube } from "react-icons/fa";
import "./Sermons.css";
export default function Sermons() {
  return (
    <div className="sermons">
      <div className="servicesTop">
        <p className="text">
          <span className="greyLine"></span>
          <span className="textPrimary" style={{ color: "grey" }}>
            Sermons
          </span>
          <span className="greyLine"></span>
        </p>
        <h1 style={{ fontSize: "40px" }}>Recent Sermons</h1>
        <p style={{ color: "grey" }}></p>
      </div>

      <div className="sermonsWrapper">
        {/* <div className="liveVideo">
          {/* width="1000" height="562.50" }
          <h1>NEXT SERVICE</h1>
          <p>
            <b>Friday, June 28, 6.00 PM</b>
          </p>
          <p>
            We invite you to join us in worship and fellowship from wherever you
            are. Though we may be physically apart, we are united in spirit as
            we gather to praise and glorify our Lord.
          </p>
        </div> */}
        <div className="recentVideo1">
          {/* width="500" height="281.25" */}
          <iframe
            src="https://www.youtube.com/embed/Fqxl48C920U?si=8T3cyES4FlZil59l"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="recentVideo2">
          <iframe
            src="https://www.youtube.com/embed/GDVuMuLGxmk?si=F1GGrtEp1EuE6Oz0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="recentVideo3">
          <iframe
            src="https://www.youtube.com/embed/FrD6D8ZsZ9g?si=y68SepPuzAishkWt"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <a
          href="https://www.youtube.com/channel/UC5CFyFU9qik5jUPFRiVgS7Q"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="sermonsBtn">
            <FaYoutube /> Watch More
          </button>
        </a>
      </div>
    </div>
  );
}
