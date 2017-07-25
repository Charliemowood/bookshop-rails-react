import React from 'react'

export const Dropdown = (props) => {


  if(!props) return null
  return (
    <div>
      <select>
        <option value="hello">Hello</option>
      </select>
    </div>
  )
}
