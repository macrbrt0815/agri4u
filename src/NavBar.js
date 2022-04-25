import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { customerCart } from "./AddToCart";
import logo from "./resources/images/logo.png";
import cart from "./resources/icons/cart.png";

const Navbar = () => {
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    setCartTotal(customerCart.length);
  }, [customerCart]);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img class="icon" src={logo} />
        </Link>
        <Link class="navbar-brand" to="/cart">
          <img class="icon" src={cart} />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
