import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopingCartContext } from "../../context";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const {
    count,
    openCheckoutSideMenu,
    setIsProductDetailOpen,
    setSearchByCategory,
  } = useContext(ShopingCartContext);

  const activeStyle = "underline underline-offset-4";

  const OpenCheckoutSideMenu = () => {
    openCheckoutSideMenu();
    setIsProductDetailOpen(false);
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("clothes")}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("electronics")}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("furnitures")}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("toys")}>
            Toys
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("others")}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/65">Usuario</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            My account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Sign in
          </NavLink>
        </li>
        <li
          className="flex items-center"
          onClick={() => OpenCheckoutSideMenu()}>
          <FaCartShopping className="me-2" /> {count}
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
