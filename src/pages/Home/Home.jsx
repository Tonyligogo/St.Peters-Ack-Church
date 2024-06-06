import "./Home.css";
import BgImage from "../../assets/church1.jpg";
import Bg2 from "../../assets/pexels-pixabay-372326.jpg";
import Bg3 from "../../assets/church3.jpg";
import vicarImage from "../../assets/priest.jpg";
import Reveal from "../../utils/Reveal";
import Events from "../../components/Events/Events";
import Announcements from "../../components/Announcements/Announcements";
import Sermons from "../../components/Sermons/Sermons";

function Home() {

  return (
    <main>
      <div className="background">
        <div className="overlay"></div>
            <img src={BgImage} alt="background" className="bgImage" />
            <img src={Bg2} alt="background" className="bgImage" />
            <img src={Bg3} alt="background" className="bgImage" />
        <div className="content">
          <p className="text">
            <span className="whiteLine"></span>
            <span className="textPrimary">
              Theme of the Year 2024
            </span>
            <span className="whiteLine"></span>
          </p>
          <p className="themeText">
            The year of open doors and divine speed
          </p>
          <p className="bannerText"> ❝ He who is holy, He who is true, He who has the key, He who opens & no one shuts, shuts and no one opens, I have set before you an open door & no one can shut it. ❞ </p>
          {/* <button className="btn">Be part of us</button> */}
        </div>
      </div>
      <Reveal>
        <div className="midSection">
          <div className="weekQuote">
            {<img src={vicarImage} alt="Bible" className="bgBible" />}
            <div className="quoteText">
            <p className="text">
            <span className="darkLine"></span>
            <span className="heading">
            Quote of the week
            </span>
            <span className="darkLine"></span>
          </p>
              {/* <h3>Quote of the week</h3> */}
              <p>
                ❝ Do the right thing, at the right place, at the right time, and
                your future will be free from regrets ❞
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
          <Events />
      </Reveal>
      <Reveal>
          <Announcements />
      </Reveal>
      <Reveal>
          <Sermons />
      </Reveal>
      <Reveal>
        <div className="contact">
          <h1>Do you need Counselling, Prayer...</h1>
          <p>
            Reach out to us now for assistance on your journey to emotional and
            spiritual well-being.
          </p>
          <p style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
            <span>
              Call or message us at:{" "}
              <small style={{ color: "blue", fontSize: "16px" }}>
                0110008603
              </small>{" "}
            </span>
            <span>
              Get us on Facebook at:{" "}
              <a href="https://web.facebook.com/stpetersembakasi/" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
              <small
                style={{ color: "blue", fontSize: "16px", cursor: "pointer" }}
              >
                web.facebook.com/stpetersembakasi
              </small>
              </a>
            </span>
          </p>
        </div>
      </Reveal>
    </main>
  );
}

export default Home;