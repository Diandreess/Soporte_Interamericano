import React, { useState } from 'react'

const SelectObjectives = (props) => {
  return (
    <select id='selectObjectivesID' className="form-select form-select-lg mb-3" aria-label="Large select example" defaultValue={'-Unselected-'} onChange={props.changeMethod}>
        <option className='text-secondary' value={'-Unselected-'}>-Unselected-</option>
        {
            props.objectiveList.map(objective => (
                <option id={objective.id} key={objective.id} value={objective.name}>{objective.name}</option>)
            )
        }
    </select>
  )
}

export default SelectObjectives