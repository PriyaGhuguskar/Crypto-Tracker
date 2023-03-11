import React from 'react'

const SelectButton = ({children  ,onClick}) => {
  return (
    <span onClick={onClick} className="selectbutton"
    >
      {children}
    </span>
  )
}

export default SelectButton