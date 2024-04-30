import Button from "./Button"

import "./buttons.css"

function SecondaryBtn({ type="link", icon="", path="", text="", className="", ...rest }) {
  return (
    <Button type={type} icon={icon} path={path} text={text} className={`btn-secondary ${className}`} {...rest} />
  )
}

export default SecondaryBtn
