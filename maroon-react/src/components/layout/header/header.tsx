import HeaderIcons from "../../blocks/header-icons/header-icons";
import Nav from "../../blocks/nav/nav";
import Logo from "../../ui/logo/logo";

function Header(): JSX.Element {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <HeaderIcons />
    </header>
  );
}

export default Header;
