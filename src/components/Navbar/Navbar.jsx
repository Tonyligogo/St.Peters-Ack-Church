import { useEffect, useState } from "react";
import Logo from "../../assets/LogoP.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  const[ministries, setMinistries] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className={active ? "navContainer active" : "navContainer"}>
      <nav>
        <Link to="/" className="link">
          <div className="logoName">
            <img src={Logo} className="logo" alt="church logo"/>
            <h3> ACK St.Peter&apos;s Embakasi</h3>
          </div>
        </Link>
        <div className="links">
          <ul className="navLinks">
            <li> <Link to='/'>Home</Link></li>
            <li>About</li>
            <li className={`ministries ${ministries ? 'selected' : ''}`} onClick={()=>setMinistries(prev=>!prev)}>Ministries
              <ul className="ministriesWrapper">
                <li> <Link to='/ministries/youth-ministry'>Youth Ministry</Link></li>
                <li>Children Ministry</li>
                <li>Men&apos;s Ministry</li>
                <li>Women&apos;s Ministry</li>
              </ul>
            </li>
            <li>Activities</li>
            <li> <Link to='get-involved'> Get Involved</Link></li>
            <li>Welfare</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;