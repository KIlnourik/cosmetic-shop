type Props = {
  item: string;
}

function NavItem({item}: Props): JSX.Element {
  return (
    <li className="nav__item">
      <a className="nav__link" href="">{item}</a>
    </li>
  );
}

export default NavItem;
