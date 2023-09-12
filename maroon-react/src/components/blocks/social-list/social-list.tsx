import { SOCIAL_ITEMS } from '../../../const';
import SocialItem from '../../ui/social-item/socail-item';


function SocialList(): JSX.Element {
  return (
    <ul className="nav__social-list social">
      {(SOCIAL_ITEMS.map((item) => <SocialItem social={item} />))}
    </ul>
  );
}

export default SocialList;
