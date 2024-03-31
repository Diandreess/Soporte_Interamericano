import React from 'react'

const ValidMessage = (props) => {
  return (
    <div>
        {props.valid ? <h1>Valid student</h1> : <h1>Invalid student</h1>}
    </div>
  )
}

export default ValidMessage