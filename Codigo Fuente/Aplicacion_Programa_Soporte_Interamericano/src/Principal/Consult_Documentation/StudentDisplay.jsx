import React from 'react'

const StudentDisplay = (props) => {
  return (
    <div id='studentDisplayID' className=''>
            <div className='d-flex justify-content-center gap-5'>
                <div className=' align-self-center mt-3 mb-3'>
                    <p className='lead'>
                    <small className='fw-bold'>Name of student:</small>
                    <br/>
                    {props.student.name} </p>
                </div>
                <div className='mt-3 mb-3'>
                    <img src={props.student.image} alt={props.student.name} width="50" height="50"/>
                </div>
            </div>
    </div>
  )
}

export default StudentDisplay