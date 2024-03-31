import React from 'react'

const ValidMessage = (props) => {
  return (
    <div className='mt-4'>
        {props.valid ? <h1 className='text-center text-success fw-bold'>Valid Email</h1> : <h1 className='text-center text-danger fw-bold'>Invalid Email</h1>}
    </div>
  )
}

export default ValidMessage