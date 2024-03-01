import React from 'react'

function SecondaryBtn({text, className, ...rest}) {
  return (
    <button className={`secondary-btn ${className}`} {...rest}>{text}</button>
  )
}

export default SecondaryBtn
