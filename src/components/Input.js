import React from 'react'

function Input({handleChange, value, title, name, color}) {
  return (
    <label className='sidebar-label-container' >
      <input type='radio' onChange={handleChange} value={value} name={name} />
      <span className='checkmark' 
            style={{backgroundColor: color}}>
      </span>
      {title}
    </label>
  )
}

export default Input