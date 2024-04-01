import React from 'react'

const ValidMessage = (props) => {
  return (
    <div className='mt-4'>
        {props.valid ? <h2 className='text-center text-success fw-bold'>Valid Email</h2> : <h2 className='text-center text-danger'>Invalid Email</h2>}
    </div>
  )
}

export default ValidMessage