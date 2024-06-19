import { Link } from 'react-router-dom';
import './Ministries.css';
import { FaArrowRightLong } from "react-icons/fa6";
function Ministries() {
  return (
    <div className='ministriesSection'>
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
        <div className='ministriesTypes'>
            <div>
                <img src="https://images.pexels.com/photos/7520371/pexels-photo-7520371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="bgImage" />
                <div>
                    <h1>E-Life builds inclusion into our community.</h1>
                    <p>E-Sports and E-Life are free programs that specialize in inclusion, partnering kids with typical and special needs alongside each other in various capacities.</p>
                    <Link to='/ministries/youth-ministry'>Learn more <FaArrowRightLong /></Link>
                </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/7520371/pexels-photo-7520371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="bgImage" />
                <div>
                    <h1>E-Life builds inclusion into our community.</h1>
                    <p>E-Sports and E-Life are free programs that specialize in inclusion, partnering kids with typical and special needs alongside each other in various capacities.</p>
                    <Link to='/ministries/children-ministry'>Learn more <FaArrowRightLong /></Link>
                </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/7520371/pexels-photo-7520371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="bgImage" />
                <div>
                    <h1>E-Life builds inclusion into our community.</h1>
                    <p>E-Sports and E-Life are free programs that specialize in inclusion, partnering kids with typical and special needs alongside each other in various capacities.</p>
                    <Link to='/ministries/womens-ministry'>Learn more <FaArrowRightLong /></Link>
                </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/7520371/pexels-photo-7520371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="bgImage" />
                <div>
                    <h1>E-Life builds inclusion into our community.</h1>
                    <p>E-Sports and E-Life are free programs that specialize in inclusion, partnering kids with typical and special needs alongside each other in various capacities.</p>
                    <Link to='/ministries/mens-ministry'>Learn more <FaArrowRightLong /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ministries