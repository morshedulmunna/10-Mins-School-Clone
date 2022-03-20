import "./Navbar.scss";
import { BiArrowFromLeft, BiCaretDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container nav">
          <div className="nav_item">
            <img
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              alt=""
            />
            <ul>
              <span>Class 1-12</span>
              <span>Admission</span>
              <span>Get Job-Ready</span>
              <span>Courses</span>
              <span>Book Store</span>
            </ul>
          </div>
          <div className="login_area">
            <div className="langus">
              <span id="langu">English</span>
              <BiCaretDown />
              <div className="options">
                <span>বাংলা</span>
                <span>English</span>
              </div>
            </div>

            <div className="login-Btn">
              <BiArrowFromLeft />
              <span>Log in</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
