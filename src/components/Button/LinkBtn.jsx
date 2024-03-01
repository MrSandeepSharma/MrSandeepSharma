import React from 'react'
import { Link } from 'react-router-dom'

import "./button.css"

function LinkBtn({path="/", icon="", text, className="", ...rest}) {
  return (
    <Link className={`btn-link ${className}`} {...rest} to={path}>
      {icon ? icon : ""}{text}
    </Link>
  )
}

export default LinkBtn
