import "./Navbar.scss";

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
              <span>Admission</span>
              <span>Admission</span>
              <span>Admission</span>
            </ul>
          </div>
          <div>
            <span>English</span>
            <div>
              <span>Log in</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
