import NavList from "../nav-list/nav-list";
import SocialList from "../social-list/social-list";

type Props = {
  isFooter?: boolean;
}

function Nav({ isFooter }: Props): JSX.Element {
  return (
    <nav className="nav">
      <NavList isFooter={isFooter}/>
      <SocialList />
    </nav>
  );
}

export default Nav;
