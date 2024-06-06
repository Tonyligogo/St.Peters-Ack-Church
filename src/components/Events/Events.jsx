import "./Events.css";
import { FaRegCalendarAlt } from "react-icons/fa";

import Motivate from "../../assets/motivate.jpg";
import { MdLocationCity } from "react-icons/md";
import Inspire from "../../assets/inspire.jpg";
import { Link } from "react-router-dom";

const Events = () => {
  const events = [
    {
      id: 1,
      imgSrc: Inspire,
      title: "Know Jesus Christ Better Through Bible Study",
      date: "Friday, 6:00 Pm",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 2,
      imgSrc: Motivate,
      title: "Join Us For Community Evangelism",
      date: "Sunday, 2:00 Pm - 8:00 Pm",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 3,
      imgSrc: Inspire,
      title: "Know Jesus Christ Better Through Bible Study",
      date: "Friday, 6:00 Pm",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 4,
      imgSrc: Inspire,
      title: "Know Jesus Christ Better Through Bible Study",
      date: "Friday, 6:00 Pm",
      location: "ACK St.Peter's Embakasi",
    },
  ];
  const displayedEvents = events.slice(0, 3);
  return (
    <div className="container">
      <div className="events">
        <div className="servicesTop">
          <p className="text">
            <span className="greyLine"></span>
            <span className="textPrimary">Events</span>
            <span className="greyLine"></span>
          </p>
          <h1>Upcoming Events</h1>
        </div>
      </div>
      <div className="eventsWrapper">
        {displayedEvents.map((event) => (
          <Link key={event.id} to="/events" className="eventLink">
            <div className="eventWrapperOverlay"></div>
            <div>
              <img src={event.imgSrc} alt="event" className="eventPic" />
              <div className="eventContent">
                <h2>{event.title}</h2>
                <span><FaRegCalendarAlt />{event.date}</span>
                <span> <MdLocationCity />{event.location}</span>
              </div>
            </div>
            </Link> 
        ))}
      </div>
    </div>
  );
};

export default Events;
