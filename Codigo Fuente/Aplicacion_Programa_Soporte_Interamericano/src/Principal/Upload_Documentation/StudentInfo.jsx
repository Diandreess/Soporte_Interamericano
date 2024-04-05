import React from 'react'
import '../Add_Student/Style/Add_Student.css'

const StudentInfo = (props) => {
    return (
    <div id='validateStudent' className='container card'>
            <div className='d-flex justify-content-center gap-5'>
                <div className=' align-self-center mt-3 mb-3'>
                    <p className='lead'>
                    <small className='fw-bold'>Name of student:</small>
                    <br/>
                    {props.element.name} </p>
                </div>
                <div className='mt-3 mb-3'>
                    <img src={props.element.image} alt={props.element.name} width="100" height="100"/>
                </div>
            </div>
    </div>
  )
}

export default StudentInfo