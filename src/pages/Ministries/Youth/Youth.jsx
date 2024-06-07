import './Youth.css'
import { FaChevronRight } from "react-icons/fa";

function Youth() {

    var counter =1;
    setInterval(function() {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 5000);

  return (
    <div className='youthBg'>
        <div className="slider">
            <div className="slides">
                <input type="radio" name='radio' id='radio1' />
                <input type="radio" name='radio' id='radio2' />
                <input type="radio" name='radio' id='radio3' />
                <input type="radio" name='radio' id='radio4' />
                <div className="slide first">
                    <div className="videoOverlay"></div>
                    <video className='video' src="https://videos.pexels.com/video-files/5365060/5365060-hd_1366_720_25fps.mp4" autoPlay muted loop></video>
                </div>
                <div className="slide ">
                    <div className="videoOverlay"></div>
                    <video className='video' src="https://videos.pexels.com/video-files/7520507/7520507-hd_1366_720_25fps.mp4" autoPlay muted loop></video>
                </div>
                <div className="slide ">
                    <div className="videoOverlay"></div>
                    <video className='video' src="https://videos.pexels.com/video-files/6860452/6860452-hd_1280_720_25fps.mp4" autoPlay muted loop></video>
                </div>
                <div className="slide ">
                    <div className="videoOverlay"></div>
                    <video className='video' src="https://videos.pexels.com/video-files/6860419/6860419-hd_1280_720_25fps.mp4" autoPlay muted loop></video>
                </div>
                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </div>
            </div>
            <div className="navigation-manual">
                <label htmlFor="radio1" className='manual-btn'></label>
                <label htmlFor="radio2" className='manual-btn'></label>
                <label htmlFor="radio3" className='manual-btn'></label>
                <label htmlFor="radio4" className='manual-btn'></label>
            </div>
            <div className="eventsBreadCrumbsWrapper">
                <p className="eventsBreadCrumbs">
                    <span><a href="/">Home</a> <FaChevronRight /></span>
                    <span>Ministries <FaChevronRight /></span>
                    <span>Youth Ministry <FaChevronRight /></span>
                </p>
                <h1>Youth Ministry</h1>
            </div>
        </div>
    </div>
  )
}

export default Youth