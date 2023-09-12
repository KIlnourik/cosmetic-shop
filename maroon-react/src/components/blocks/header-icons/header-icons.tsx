import Auth from "../../ui/auth/auth";
import Cart from "../../ui/cart/cart";

function HeaderIcons(): JSX.Element {
  return (
    <div className="header-icons">
      <Auth />
      <Cart />
    </div >
  );
}

export default HeaderIcons;
