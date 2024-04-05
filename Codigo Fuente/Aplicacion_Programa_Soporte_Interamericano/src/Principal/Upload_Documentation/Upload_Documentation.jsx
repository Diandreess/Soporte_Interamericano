import React, { useState } from "react";
import "./Upload_Documentation.css";
import SelectObjectives from './SelectObjectives'
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

  const [students, setStudents] = useState([
    {
      studentID: 1,
      name: 'DIEGO ANDRES BAUTISTA CRUZ',
      email: 'dabautistac',
      image: studentC1
    },
    {
      studentID: 2,
      name: 'VICTOR MANUEL BAUTISTA CRUZ',
      email: 'vmbautistac',
      image: studentC2
    },
    {
      studentID: 3,
      name: 'CRISTIAN FERNANDO GONZALEZ CUYÚN',
      email: 'cfgonzalezc',
      image: studentC3
    },
    {
      studentID: 4,
      name: 'JOSE MARIO MARROQUIN ROLDAN',
      email: 'jmmarroquinr',
      image: studentC4
    },
    {
      studentID: 5,
      name: 'PABLO CÉSAR PISQUIY PACAJÁ',
      email: 'pcpisquiyp',
      image: studentC5
    }
  ])
  // Variable para simular tabla de objetivos
  const [objectives, setObjectives] = useState([
    {
      id: 1,
      name: 'Key Ideas and Details'
    },
    {
      id: 2,
      name: 'Craft and Structure'
    },
    {
      id: 3,
      name: 'Integration of Knowledge and Ideas'
    },
    {
      id: 4,
      name: 'Range of Reading of Knowledge and Ideas'
    },
    {
      id: 5,
      name: 'Text Types and Purposes'
    },
    {
      id: 6,
      name: 'Production and Distribution of Writing'
    },
    {
      id: 7,
      name: 'Research to Build and Present Knowledge'
    },
    {
      id: 8,
      name: 'Range of Writing'
    },
    {
      id: 9,
      name: 'Comprehendion and Collaboration'
    },
    {
      id: 10,
      name: 'Presentation of Knowledge and Ideas'
    }
  ])



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
  const handleSelectObjective = (event) => {
    setSearchInformation({
      ...searchInformation,
      objective: event.target.value
    })
  }

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
                  className="btn btn-success  mx-4"
                >
                  Validate
                </button>
              </div>
              <div className='mt-4'>
          <p>Objective</p>
            <SelectObjectives changeMethod={handleSelectObjective} objectiveList={objectives} />
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
