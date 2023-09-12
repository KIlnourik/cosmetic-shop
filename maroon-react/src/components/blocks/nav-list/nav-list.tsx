import { HEADER_NAV_ITEMS, FOOTER_NAV_ITEMS } from '../../../const';
import NavItem from '../../ui/nav-item/nav-item';

type Props = {
  isFooter?: boolean;
}

function NavList({ isFooter }: Props): JSX.Element {
  return (
    <ul className="nav__list list">
      {!isFooter ?
        HEADER_NAV_ITEMS.map((item) => <NavItem item={item} />) :
        FOOTER_NAV_ITEMS.map((item) => <NavItem item={item} />)
      }
    </ul>
  );
}

export default NavList;
