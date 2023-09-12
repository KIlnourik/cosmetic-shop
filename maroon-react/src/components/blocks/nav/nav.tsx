import NavList from "../nav-list/nav-list";
import NavSocialList from "../nav-social-list/nav-social-list";

type Props = {
  isFooter?: boolean;
}

function Nav({ isFooter }: Props): JSX.Element {
  return (
    <nav className="nav">
      <NavList isFooter={isFooter}/>
      <NavSocialList />
    </nav>
  );
}

export default Nav;
