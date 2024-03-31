import React from 'react'

const StudentInfo = (props) => {
    return (
    <div id='validateStudent' className='container'>
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <p className='lead'>Name of student: {props.actualStudent.name}</p>
                </div>
                <div className='col-4'>
                    <img src={props.actualStudent.image} alt={props.actualStudent.name} width="200" height="200"/>
                </div>
            </div>
    </div>
  )
}

export default StudentInfo