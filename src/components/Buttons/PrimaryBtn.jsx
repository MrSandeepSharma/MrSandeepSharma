import Button from "./Button"

import "./buttons.css"

function PrimaryBtn({ type="link", icon="", path="", text="", className="", ...rest }) {
  return (
    <Button type={type} icon={icon} path={path} text={text} className={`btn-primary ${className}`} {...rest} />
  )
}

export default PrimaryBtn
