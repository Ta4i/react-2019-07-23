import React from "react";

import Logo from "../logo";
import CartBadge from '../cart-badge';
import "./header.css";

const Header = () => (
  <header className='header'>
    <Logo />
    <CartBadge amount={0} />
  </header>
);

export default Header;
