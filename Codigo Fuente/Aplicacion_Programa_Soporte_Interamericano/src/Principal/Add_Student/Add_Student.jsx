import React, { Component } from 'react'
import StudentInfo from './StudentInfo'
import ValidMessage from './ValidMessage'
import student1 from '../../Assets/Images/dabautistac.jpg'
import student2 from '../../Assets/Images/vmbautistac.png'
import student3 from '../../Assets/Images/cfgonzalesc.png'
import student4 from '../../Assets/Images/jmmarroquinr.png'
import student5 from '../../Assets/Images/pcpisquiyp.png'
import Add_Student_Modal from './Add_Student_Modal'

export class Add_Student extends Component {

    constructor(props) {
        super(props)

        // Para el diseño de la maqueta se utilzó un modelo de estudiante con la información
        // que necesesita la página, pero en la integración con backend debería extraer la
        // información de una petición a base de datos (datos alumno) y API de Google Drive (foto alumno)
        const studentList = [
            {
                studentID: 1,
                name: 'DIEGO ANDRES BAUTISTA CRUZ',
                email: 'dabautistac',
                image: student1
            },
            {
                studentID: 2,
                name: 'VICTOR MANUEL BAUTISTA CRUZ',
                email: 'vmbautistac',
                image: student2
            },
            {
                studentID: 3,
                name: 'CRISTIAN FERNANDO GONZALEZ CUYÚN',
                email: 'cfgonzalezc',
                image: student3
            },
            {
                studentID: 4,
                name: 'JOSE MARIO MARROQUIN ROLDAN',
                email: 'jmmarroquinr',
                image: student4
            },
            {
                studentID: 5,
                name: 'PABLO CÉSAR PISQUIY PACAJÁ',
                email: 'pcpisquiyp',
                image: student5
            }
        ]

        this.state = {
            studentemail: '',
            students: studentList,
            actualStudent: {
                studentID: undefined,
                name: undefined,
                email: undefined,
                image: undefined
            },
            disableValidButton: true,
            disableCreateButton: true,
            validateMessage: false,
            loadStudentInformation: false,
            disableModal: true
        }
    }

    handleStudentEmail = (event) => {
        if (event.target.value.length > 0) {
            this.setState({
                disableValidButton: false
            })
        } else {
            this.setState({
                disableValidButton: true
            })
        }

        this.setState({
            studentemail: event.target.value
        })
    }

    handleValidateStudent = () => {
        this.setState({
            validateMessage: true
        })

        // Aquí será necesario agregar una validación en caso el estudiante
        // ya esté registrado en el sistema se soporte académico
        var studentInput = this.state.studentemail
        if (this.state.students.find((student) => student.email === studentInput)) {
            var s = this.state.students.find((student) => student.email === studentInput)
            this.setState((prevState) => ({
                actualStudent: {
                    ...prevState.actualStudent,
                    studentID: s.studentID,
                    name: s.name,
                    email: s.email,
                    image: s.image
                },
                loadStudentInformation: true,
                disableCreateButton: false
            }))
        } else {
            this.setState({
                loadStudentInformation: false,
                disableCreateButton: true
            })
        }
    }

    handleCreateStudent = () => {
        this.setState({
            disableModal: false
        })
    }

    render() {
        const { studentemail, actualStudent, validateMessage, disableValidButton, disableCreateButton, loadStudentInformation, disableModal } = this.state

        return (
            <div className='AddStudentContainer container-md row-gap-3 mt-5'>
                <h1 className='display-6'>Add Student</h1>
                <div id='validate' className='container '>
                    <div className='d-flex justify-content-center align-items-end'>
                        <div className='form-group'>
                            <p>
                                Estudent email
                                <small className='text-danger'>*</small>
                            </p>
                            <input id='studentEmailID' type='text' className='form-control' placeholder='Enter an email' value={studentemail} onChange={this.handleStudentEmail} />
                        </div>
                        <div>
                            <button className='btn btn-success mx-3' id='validateButtonID' onClick={this.handleValidateStudent} disabled={disableValidButton}>Validate</button>
                        </div>
                    </div>
                </div>
                <div id='information' className='container'>
                    {validateMessage && <ValidMessage valid={loadStudentInformation} />}
                    {loadStudentInformation && <StudentInfo actualStudent={actualStudent} />}
                </div>
                <div id='create' className='container pt-2'>
                    <div className='d-flex justify-content-center mt-3'>
                        <button
                            id='createButtonID'
                            className='btn btn-primary'
                            data-bs-toggle="modal"
                            data-bs-target="#createModal"
                            onClick={this.handleCreateStudent}
                            style={{ display: disableCreateButton ? 'none' : 'block' }}
                            disabled={disableCreateButton}>
                            Create
                        </button>
                    </div>
                    {/* Modal */}
                    <Add_Student_Modal disableModal={disableModal}/>
                </div>
            </div>
        )
    }
}

export default Add_Student