import React from 'react'

const ValidMessage = (props) => {
  return (
    <div className='mt-4'>
        {!props.valid && <h2 className='text-center text-danger'>The student is not registered</h2>}
    </div>
  )
}

export default ValidMessage