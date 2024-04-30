import logoImg from "../assets/logo.svg"
import logoSmall from "../assets/logo-small.svg"

function Logo() {
  return (
    <picture>
      <source media="(min-width: 450px)" srcSet={logoImg} width="165.56" height="35" />
      <img src={logoSmall} alt="Sandeep" width="34.01" height="30" />
    </picture>
  )
}

export default Logo