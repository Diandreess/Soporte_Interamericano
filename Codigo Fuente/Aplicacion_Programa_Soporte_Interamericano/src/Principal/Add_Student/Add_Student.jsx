import React, { Component } from 'react'
import ValidStudent from './ValidStudent'
import ValidMessage from './ValidMessage'
import Images from '../assets/images/ImageIndex.js'

export class AddStudentPage extends Component {

    constructor(props) {
        super(props)

        const studentList = [
            {
                studentID: 1,
                name: 'DIEGO ANDRES BAUTISTA CRUZ',
                email: 'dabautistac',
                image: Images.student1
            },
            {
                studentID: 2,
                name: 'VICTOR MANUEL BAUTISTA CRUZ',
                email: 'vmbautistac',
                image: Images.student2
            },
            {
                studentID: 3,
                name: 'CRISTIAN FERNANDO GONZALEZ CUYÚN',
                email: 'cfgonzalezc',
                image: Images.student3
            },
            {
                studentID: 4,
                name: 'JOSE MARIO MARROQUIN ROLDAN',
                email: 'jmmarroquinr',
                image: Images.student4
            },
            {
                studentID: 5,
                name: 'PABLO CÉSAR PISQUIY PACAJÁ',
                email: 'pcpisquiyp',
                image: Images.student5
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

    handleValidateStudent = (event) => {
        this.setState({
            validateMessage: true
        })

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
            alert(`Se creó alumno ${this.state.actualStudent.name}`)
        } else {
            this.setState({
                loadStudentInformation: false
            })
            alert("Este estudiante no existe")
        }
    }

    handleCreateStudent = (event) => {
        this.setState({
            disableModal: false
        })
    }

    render() {
        const { studentemail, actualStudent, validateMessage: messageValidate, disableValidButton: validButtonState, disableCreateButton: createButtonState, loadStudentInformation: loadComponent } = this.state

        return (
            <div className='AddStudentContainer container-md row-gap-3'>
                <h1 className='display-5'>Add Student</h1>
                <div id='validate' className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-4'>
                            <p className='lead'>Estudent email</p>
                            <input id='studentEmailID' type='text' placeholder='Enter an email' value={studentemail} onChange={this.handleStudentEmail} />
                        </div>
                        <div className='col-4'>
                            <button id='validateButtonID' onClick={this.handleValidateStudent} disabled={validButtonState}>Validate</button>
                        </div>
                    </div>
                </div>
                <div id='information' className='container'>
                    {messageValidate && <ValidMessage valid={loadComponent} />}
                    {loadComponent && <ValidStudent actualStudent={actualStudent} />}
                </div>
                <div id='create' className='container'>
                    <button id='createButtonID' className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.handleCreateStudent} disabled={createButtonState}>Create</button>
                    {/* Modal */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" hidden={this.state.disableModal}>
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Continuar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddStudentPage