import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
const CarWidget = () => {
  return (
    <div style={{display: "flex", width:"40px", justifyContent: "space-between", alignItems: "center", color:"#f1c5e8"}}>
        <FontAwesomeIcon icon={faCartArrowDown} size="xl" />
        <span><strong>5</strong></span>
    </div>
  )
}

export default CarWidget
