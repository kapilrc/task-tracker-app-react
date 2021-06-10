import Button from "./common/Button"

const Header = () => {
  const onClick = console.log("click");

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button text="Add" bgColor="green" onClick={onClick} />
    </header>
  )
}

export default Header
