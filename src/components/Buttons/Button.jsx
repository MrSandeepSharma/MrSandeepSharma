import { Link } from "react-router-dom"

function Button({ type="link", icon="", path="", text="", className="", ...rest }) {
  return (
    type === "link" 
        ? <Link className={`flex-container outline ${className}`} to={path} {...rest}>
            {text}
            {icon}
        </Link> 
        : <button className={`flex-container outline ${className}`} {...rest}>
            {text}
            {icon}
        </button>
  )
}

export default Button
