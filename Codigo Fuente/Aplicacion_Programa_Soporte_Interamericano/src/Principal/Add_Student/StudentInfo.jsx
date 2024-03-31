import React from 'react'
import './Style/Add_Student.css'

const StudentInfo = (props) => {
    return (
    <div id='validateStudent' className='container card'>
            <div className='d-flex justify-content-center gap-5'>
                <div className=' align-self-center mt-3 mb-3'>
                    <p className='lead'>
                    <small className='fw-bold'>Name of student:</small>
                    <br/>
                    {props.actualStudent.name} </p>
                </div>
                <div className='mt-3 mb-3'>
                    <img src={props.actualStudent.image} alt={props.actualStudent.name} width="200" height="200"/>
                </div>
            </div>
    </div>
  )
}

export default StudentInfo