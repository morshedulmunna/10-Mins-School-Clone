import "./Header.scss";

const Header = () => {
  return (
    <div className=" Header">
      <div className="wrapper container">
        <div className="text-area">
          <h1>Experience Better Learning.</h1>
          <p>
            Be a part of our huge community and start your personalized learning
            journey!
          </p>
          <div className="learningItem">
            <select>
              <option value="class1-12">class 1-12</option>
              <option value="UniversityAdmission">University Admission</option>
              <option value="jobExam">Job Recruitment Exam</option>
              <option value="skillDev">Skill Development Course</option>
            </select>
            <button>Start Learning</button>
          </div>
        </div>
        <div className="img-area">
          <img src="https://cdn.10minuteschool.com/home/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
