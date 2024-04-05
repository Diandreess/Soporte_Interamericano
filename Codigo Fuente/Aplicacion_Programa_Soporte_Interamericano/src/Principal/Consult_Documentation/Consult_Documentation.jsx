import React, { useState } from 'react'
import SelectObjectives from './SelectObjectives'
import InitialTable from './InitialTable'
import FilesTable from './FilesTable'
import studentC1 from '../../Assets/Images/dabautistac.jpg'
import studentC2 from '../../Assets/Images/vmbautistac.png'
import studentC3 from '../../Assets/Images/cfgonzalesc.png'
import studentC4 from '../../Assets/Images/jmmarroquinr.png'
import studentC5 from '../../Assets/Images/pcpisquiyp.png'
import StudentDisplay from './StudentDisplay'
import ValidMessage from './ValidMessage'
import './Style/Style.css'


const Consult_Documentation = () => {
  const [student, setStudent] = useState(
    {
      studentID: 0,
      name: '',
      email: '',
      image: ''
    }
  )
  const [disableSearchButton, setDisableSearchButton] = useState(true)
  const [renderFiles, setRenderFiles] = useState(false)
  const [validStudent, setValidStudent] = useState(false)
  const [searchInformation, setSearchInformation] = useState({
    studentEmail: '',
    objective: undefined
  })
  // Para el diseño de las páginas se utiliza datos en las páginas para recrear el comportamiento
  // de la página; sin embargo, los objetivos, concretaemente, son consultados a la base de datos
  // diseñada, como una petición.

  // Variable que simula tabla de estudiantes
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
  // Variable para simular una tabla de documentos cargados para todos los alumnos
  const [documents, setDocuments] = useState([
    {
      fileID: 1,
      studentID: 1,
      fileName: 'Evaluation of analysis and reading comprehension objectives.xlsx',
      objectiveID: 1,
      URL: 'https://docs.google.com/spreadsheets/d/1TFvXsMEKQmyNQ8gc6_9m2XAnCqz6nZpNBadeqmUiNtM/edit?usp=sharing',
      uploadDate: '03/03/2024'
    },
    {
      fileID: 2,
      studentID: 1,
      fileName: 'Psychometric evaluation year 2022.pdf',
      objectiveID: 1,
      URL: 'https://drive.google.com/file/d/1ofyaXFzX4jjtsRP0BfxDbjxuY7rRl8Dr/view?usp=sharing',
      uploadDate: '01/10/2022'
    },
    {
      fileID: 3,
      studentID: 1,
      fileName: 'Math exam.pdf',
      objectiveID: 5,
      URL: 'https://drive.google.com/file/d/1ofyaXFzX4jjtsRP0BfxDbjxuY7rRl8Dr/view?usp=sharing',
      uploadDate: '01/10/2022'
    },
    {
      fileID: 4,
      studentID: 5,
      fileName: 'Build skills.pdf',
      objectiveID: 1,
      URL: 'https://drive.google.com/file/d/1ofyaXFzX4jjtsRP0BfxDbjxuY7rRl8Dr/view?usp=sharing',
      uploadDate: '01/10/2022'
    },
    {
      fileID: 5,
      studentID: 5,
      fileName: 'Reading evaluation.pdf',
      objectiveID: 5,
      URL: 'https://drive.google.com/file/d/1ofyaXFzX4jjtsRP0BfxDbjxuY7rRl8Dr/view?usp=sharing',
      uploadDate: '01/10/2022'
    }
  ])
  // Variable para simular la respuesta de una petitición con los documentos de un alumno en específico
  const [studentDocuments, setStudentDocuments] = useState([])

  const handleStudentEmailInput = (event) => {
    let objective = event.target.value
    if (objective.length > 0) {
      setDisableSearchButton(false)
    } else {
      setDisableSearchButton(true)
    }

    setSearchInformation({
      ...searchInformation,
      studentEmail: event.target.value
    })
  }

  const handleSelectObjective = (event) => {
    setSearchInformation({
      ...searchInformation,
      objective: event.target.value
    })
  }

  const handleSearchClick = (event) => {
    setValidStudent(true)
    let email = searchInformation.studentEmail
    if (students.find((student) => student.email === email)) {
      let s = students.find((student) => student.email === email)
      setStudent({
        ...student,
        studentID: s.studentID,
        name: s.name,
        email: s.email,
        image: s.image
      })

      var auxDocuments = [];
      documents.map(document => {
        var condition = false
        var o = objectives.find(objective => objective.id === document.objectiveID)
        
        if (searchInformation.objective !== undefined && searchInformation.objective !== '-Unselected-') {
          condition = document.studentID === s.studentID && o.name === searchInformation.objective
        } else {
          condition = document.studentID === s.studentID
        }

        if (condition) {
          auxDocuments.push({
            fileID: document.fileID,
            fileName: document.fileName,
            objectiveID: o.name,
            uploadDate: document.uploadDate,
            URL: document.URL
          })
        }
      })
      setStudentDocuments(auxDocuments)

      setRenderFiles(true)
    } else {
      setRenderFiles(false)
    }
  }

  return (
    <div id='ConsultDocumentationPage' className='ConsultDocumentation md-container mt-5' data-bs-spy="scroll" data-bs-smooth-scroll="true">
      <h1 className='display-6'>Consult Documentation</h1>
      <div id='data' className='container'>
        <div className='row'>
          <div className='col'>
          <p>Student email <small className='text-danger'>*</small></p>
        <input id='studentEmailID' type='text' value={searchInformation.studentEmail} className='form-control' onChange={handleStudentEmailInput}/>
          </div>
          <div className='col'>
          <p>Objective</p>
        <SelectObjectives changeMethod={handleSelectObjective} objectiveList={objectives} />
          </div>
          <div className='col ContenedorBtn'>
          <button id='searchButtonID' type='button' className='btn btn-success' disabled={disableSearchButton} onClick={handleSearchClick}>Search</button>
          </div>
        </div>
      </div>
      <div id='studentInfo' className='container'>
        {validStudent && <ValidMessage valid={renderFiles} />}
        {renderFiles && <StudentDisplay student={student} />}
      </div>
      <div id='files' className='container'>
      {renderFiles? <FilesTable documentList={studentDocuments} />: <InitialTable/>}
     
      </div>
    </div>
  )
}

export default Consult_Documentation