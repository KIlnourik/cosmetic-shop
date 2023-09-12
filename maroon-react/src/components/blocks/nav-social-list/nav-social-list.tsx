import { SOCIAL_ITEMS } from '../../../const';
import NavSocialItem from '../../ui/nav-social-item/nav-socail-item';


function NavSocialList(): JSX.Element {
  return (
    <ul className="nav__social-list social">
      {(SOCIAL_ITEMS.map((item) => <NavSocialItem social={item} />))}
    </ul>
  );
}

export default NavSocialList;
