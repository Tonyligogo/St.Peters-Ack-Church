import "./Youth.css";
import { FaChevronRight } from "react-icons/fa";
import fridayService from "../../../assets/YouthMinistry3.jpg";
import youthService from "../../../assets/youthService.jpg";
import englishService from "../../../assets/YouthMinistry2.jpg";
import kiswahiliService from "../../../assets/swahiliService.jpg";

function Youth() {
  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);

  const services = [
    {
      id: 1,
      imgSrc: fridayService,
      title: "Brothers Konnect",
      desc: "Youth gather every week to study the Bible, discuss its teachings, and apply them to their daily lives through interactive and engaging discussions.",
    },
    {
      id: 2,
      imgSrc: youthService,
      title: "Sister's Keepers",
      desc: "",
    },
    {
      id: 3,
      imgSrc: englishService,
      title: "Retreat",
      desc: "Organized sports teams and recreational activities promote physical health, teamwork, and a healthy competitive spirit among the youth.",
    },
    {
      id: 4,
      imgSrc: kiswahiliService,
      title: "Luncheon",
      desc: "",
    },
  ];

  const displayedServices = services.slice(0, 4);

  return (
    <div>
      <div className="youthBg">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio" id="radio1" />
            <input type="radio" name="radio" id="radio2" />
            <input type="radio" name="radio" id="radio3" />
            <input type="radio" name="radio" id="radio4" />
            <div className="slide first">
              <div className="videoOverlay"></div>
              <video
                className="video"
                src="https://videos.pexels.com/video-files/5365060/5365060-hd_1366_720_25fps.mp4"
                autoPlay
                muted
                loop
              ></video>
            </div>
            <div className="slide ">
              <div className="videoOverlay"></div>
              <video
                className="video"
                src="https://videos.pexels.com/video-files/7520507/7520507-hd_1366_720_25fps.mp4"
                autoPlay
                muted
                loop
              ></video>
            </div>
            <div className="slide ">
              <div className="videoOverlay"></div>
              <video
                className="video"
                src="https://videos.pexels.com/video-files/6860452/6860452-hd_1280_720_25fps.mp4"
                autoPlay
                muted
                loop
              ></video>
            </div>
            <div className="slide ">
              <div className="videoOverlay"></div>
              <video
                className="video"
                src="https://videos.pexels.com/video-files/6860419/6860419-hd_1280_720_25fps.mp4"
                autoPlay
                muted
                loop
              ></video>
            </div>
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
          </div>
          <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div>
          <div className="eventsBreadCrumbsWrapper">
            <p className="eventsBreadCrumbs">
              <span>
                <a href="/">Home</a> <FaChevronRight />
              </span>
              <span>
                Ministries <FaChevronRight />
              </span>
              <span>
                Youth Ministry <FaChevronRight />
              </span>
            </p>
            <h1>Youth Ministry</h1>
          </div>
        </div>
      </div>
      <div className="youthInfo">
        <h2>Empowering the Next Generation of Believers</h2>
        <br />
        The Youth Ministry at A.C.K St. Peters Embakasi Church is a dynamic and
        inclusive community for teenagers and young adults. Our mission is to
        empower young people to grow in their faith, build lasting friendships,
        and make a positive impact in their world. Through weekly youth
        meetings, Bible studies, social events, and service projects, we provide
        opportunities for spiritual growth, leadership development, and fun. Our
        youth leaders are dedicated to mentoring and supporting each individual
        as they navigate the challenges of adolescence and young adulthood.
        <br /> Join us and be part of a movement that is passionate about Jesus
        and making a difference.
      </div>
      <div className="youthPic"></div>
      <div className="youthActivities">
        <h3>Activities</h3>

        <div className="servicesWrapper">
          {displayedServices.map((service) => (
            <div className="card">
              <img src={service.imgSrc} alt="service" className="servicePic" />
              <div className="serviceContent">
                <h2>{service.title}</h2>
                <p>
                  <medium>{service.desc}</medium>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Youth Leaders</h2>
      </div>
    </div>
  );
}

export default Youth;
