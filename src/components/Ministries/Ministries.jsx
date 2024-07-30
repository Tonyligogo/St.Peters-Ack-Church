import { Link } from "react-router-dom";
import "./Ministries.css";
import { FaArrowRightLong } from "react-icons/fa6";

import worshipTeam from "../../assets/worshipTeam.jpg";
import Youth from "../../assets/youthMin.jpg";
import KAMA from "../../assets/KAMA.jpg";
import Mothers from "../../assets/MU.jpg";
import Choir from "../../assets/englishService.jpg";

function Ministries() {
  return (
    <div className="ministriesSection">
      <div className="servicesTop">
        <p className="text">
          <span className="greyLine"></span>
          <span className="textPrimary" style={{ color: "grey" }}>
            Ministries
          </span>
          <span className="greyLine"></span>
        </p>
        <h1 style={{ fontSize: "40px" }}>Our ministries</h1>
        <p style={{ color: "grey" }}></p>
      </div>
      <div className="ministriesTypes">
        <div className="ministryWrapper">
          <img src={KAMA} alt="bgImage" />
          <div>
            <h1>KAMA Ministry.</h1>
            {/* <p>
              <b>Building Strong Men of Faith</b>
              <br />
              KAMA aims to support and encourage men in their spiritual journey,
              helping them to grow as disciples of Christ, leaders in their
              homes, and servants in their communities. If you are looking for a
              place to grow in your faith and connect with other men, join us in
              the KAMA as we strive to be men of God.
            </p> */}
            <Link to="/ministries/youth-ministry">
              Learn more <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="ministryWrapper">
          <img src={Mothers} alt="bgImage" />
          <div>
            <h1>Mother's Union.</h1>
            {/* <p>
              <b>Connecting Women in Faith and Fellowship</b>
              <br />
              The M.U is a vibrant and supportive community where women of all
              ages can grow in their faith, build meaningful relationships, and
              serve together. Whether you are looking for fellowship, support,
              or opportunities to serve, the M.U welcomes you to join us in our
              journey of faith.
            </p> */}
            <Link to="/ministries/children-ministry">
              Learn more <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="ministryWrapper">
          <img src={Youth} alt="bgImage" />
          <div>
            <h1>Youth Ministry.</h1>
            {/* <p>
              <b>Empowering the Next Generation of Believers</b>
              <br />
              Our mission is to empower young people to grow in their faith,
              build lasting friendships, and make a positive impact in their
              world. Join us and be part of a movement that is passionate about
              Jesus and making a difference.
            </p> */}
            <Link to="/ministries/womens-ministry">
              Learn more <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="ministryWrapper">
          <img
            src="https://images.pexels.com/photos/7520371/pexels-photo-7520371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="bgImage"
          />
          <div>
            <h1>Sunday School.</h1>
            {/* <p>
              <b>Engaging and Nurturing Children in Faith</b>
              <br />
              We offer age-appropriate classes for children from toddlers to
              pre-teens, with interactive lessons, crafts, and activities that
              bring Bible stories to life. Bring your children to Sunday School
              and watch them flourish in their walk with Christ.
            </p> */}
            <Link to="/ministries/mens-ministry">
              Learn more <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="ministryWrapper">
          <img src={worshipTeam} alt="bgImage" />
          <div>
            <h1>Praise & Worship.</h1>

            {/* <p>
              <b>Join Our Vibrant Praise and Worship Team</b>
              <br />
              The Praise and Worship Team is dedicated to leading the
              congregation in heartfelt worship and praises through music. Join
              us as we lift our voices and instruments in praise and worship to
              our Lord.
            </p> */}
            <Link to="/ministries/mens-ministry">
              Learn more <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="ministryWrapper">
          <img src={Choir} alt="bgImage" />
          <div>
            <h1>Choir Ministry.</h1>
            {/* <p>
              <b>Your Voice in the A.C.K St. Peters Choir</b>
              <br />
              Our choir performs a variety of musical styles, from traditional
              hymns, and plays a vital role in leading worship during our Sunday
              services. Open to all who love to sing, the choir is a community
              of fellowship and musical growth.
            </p> */}
            <Link to="/ministries/mens-ministry">
              Learn more <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ministries;
