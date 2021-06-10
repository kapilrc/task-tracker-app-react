import PropTypes from 'prop-types'

import Button from "./common/Button"

const Header = ({ title, onAdd, showAdd }) => {
  const onClick = () => console.log("click");

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={showAdd ? "Close" : "Add"} bgColor="green" onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker"
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
