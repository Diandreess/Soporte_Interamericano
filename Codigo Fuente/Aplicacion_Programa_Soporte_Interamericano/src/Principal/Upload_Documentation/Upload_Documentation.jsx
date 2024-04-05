import React, { useState } from "react";
import "./Upload_Documentation.css";
import studentC1 from "../../Assets/Images/dabautistac.jpg";
import studentC2 from "../../Assets/Images/vmbautistac.png";
import studentC3 from "../../Assets/Images/cfgonzalesc.png";
import studentC4 from "../../Assets/Images/jmmarroquinr.png";
import studentC5 from "../../Assets/Images/pcpisquiyp.png";
import ValidMessage from "../Add_Student/ValidMessage";
import StudentInfo from "./StudentInfo";

const Upload_Documentation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [email, setEmail] = useState("");
  const [validStudent, setValidStudent] = useState(false);
  const [loadStudentInformation, setLoadStudentInformation] = useState(false);
  const actualStudent = {
    studentID: undefined,
    name: undefined,
    email: undefined,
    image: undefined,
  };
  const [student, setStudent] = useState(actualStudent);

  const studentList = [
    {
      studentID: 1,
      name: "DIEGO ANDRES BAUTISTA CRUZ",
      email: "dabautistac",
      image: studentC1,
    },
    {
      studentID: 2,
      name: "VICTOR MANUEL BAUTISTA CRUZ",
      email: "vmbautistac",
      image: studentC2,
    },
    {
      studentID: 3,
      name: "CRISTIAN FERNANDO GONZALEZ CUYÚN",
      email: "cfgonzalezc",
      image: studentC3,
    },
    {
      studentID: 4,
      name: "JOSE MARIO MARROQUIN ROLDAN",
      email: "jmmarroquinr",
      image: studentC4,
    },
    {
      studentID: 5,
      name: "PABLO CÉSAR PISQUIY PACAJÁ",
      email: "pcpisquiyp",
      image: studentC5,
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setMenuOpen(false);
  };

  const handleVerify = (email) => {
    const exists = studentList.some((item) => item.email === email);
    if (exists) {
      const element = studentList.find((item) => item.email === email);
      //console.table(element);
      setStudent({
        ...student,
        studentID: element.studentID,
        name: element.name,
        email: element.email,
        image: element.image,
      });

      setValidStudent(true);
      setLoadStudentInformation(true);
    } else {
      setValidStudent(false);
      setLoadStudentInformation(false);
      alert("NEL");
    }
  };

  return (
    <div class="container">
      <br />
      <h1 className="display-6">Upload documentation</h1>
      <br />
          <div class="menu-container d-flex">
            <div>
              <div className="form-group">
                <p>
                  Student email<small className="text-danger">*</small>
                </p>
                <input
                  type="text"
                  className="menu-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={() => handleVerify(email)}
                  className="btn btn-success  "
                >
                  Validate
                </button>
              </div>
              <br />
              <br />
              <input
                type="text"
                className="menu-input"
                value={selectedOption || "Select an option..."}
                onClick={toggleMenu}
                readOnly
              />

              <button onClick={toggleMenu} className="menu-btn">
                <i
                  className={`fas fa-chevron-${menuOpen ? "up" : "down"} fa-lg`}
                ></i>
              </button>
              <div
                className="dropdown-content"
                style={{ display: menuOpen ? "block" : "none" }}
              >
                <a href="#" onClick={() => handleOptionClick("WRITING")}>
                  WRITING
                </a>
                <a href="#" onClick={() => handleOptionClick("READING")}>
                  READING
                </a>
              </div>
            </div>
            <div id="information" className="container">
              {validStudent && <ValidMessage valid={loadStudentInformation} />}
              {loadStudentInformation && <StudentInfo element={student} />}
            </div>
          </div>
          <form method="post" action="#" id="#">
            <div class="form-group files">
              <label>Upload Your File </label>
              <input type="file" class="form-control" multiple="" />
            </div>
          </form>
        </div>
  );
};

export default Upload_Documentation;
