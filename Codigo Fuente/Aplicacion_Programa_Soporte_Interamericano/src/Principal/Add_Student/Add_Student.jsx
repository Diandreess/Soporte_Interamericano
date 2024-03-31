import React, { Component } from 'react'
import StudentInfo from './StudentInfo'
import ValidMessage from './ValidMessage'
import student1 from '../../Assets/Images/dabautistac.jpg'
import student2 from '../../Assets/Images/vmbautistac.png'
import student3 from '../../Assets/Images/cfgonzalesc.png'
import student4 from '../../Assets/Images/jmmarroquinr.png'
import student5 from '../../Assets/Images/pcpisquiyp.png'
export class Add_Student extends Component {

    constructor(props) {
        super(props)

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
                <div id='validate' className='container '>
                <div className='d-flex justify-content-center align-items-end '>
               <div className='form-group'>
               <p className='lead'>
               Estudent email 
               <small className='text-danger'>*</small>
               </p>
                            <input id='studentEmailID' type='text' placeholder='Enter an email' value={studentemail} onChange={this.handleStudentEmail} />
               </div>
                           <div>
                           <button className='btn btn-success mx-2' id='validateButtonID' onClick={this.handleValidateStudent} disabled={validButtonState}>Validate</button>
                           </div>
                </div>
                </div>
                <div id='information' className='container'>
                    {messageValidate && <ValidMessage valid={loadComponent} />}
                    {loadComponent && <StudentInfo actualStudent={actualStudent} />}
                </div>
                <div id='create' className='container pt-2'>
                   <div className='mt-3'>
                   <center>
                    <button id='createButtonID' className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.handleCreateStudent} style={{ display: createButtonState ? 'none' : 'block' }} disabled={createButtonState}>Create</button>
                   </center>
                   </div>
                    {/* Modal */}
                    <div class="modal fade modal-centered" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" hidden={this.state.disableModal}>
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add student</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <center>
                                <img src="./src/Assets/Images/check.png" className='w-50'/>
                                <p className='text-success'>Student Created</p>
                                </center>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add_Student