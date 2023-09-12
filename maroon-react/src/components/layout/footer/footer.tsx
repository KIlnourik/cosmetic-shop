import Nav from "../../blocks/nav/nav";
import Logo from "../../ui/logo/logo";

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Logo />
      <Nav isFooter />
    </footer>
  );
}

export default Footer;
