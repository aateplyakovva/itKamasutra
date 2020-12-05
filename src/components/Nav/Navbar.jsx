import { React } from "react";
import { NavLink } from "react-router-dom";
import c from "./Navbar.module.css";

const NavbarItem = (props) => {
  return (
    <div>
      <NavLink to={props.path} activeClassName={c.active}>
        {props.name}
      </NavLink>
    </div>
  );
};



const Navbar = () => {

  return (
    <nav className={c.nav}>
      <NavbarItem name="Profile" path="/profile" />
      <NavbarItem name="Users" path="/users" />
      <NavbarItem name="Messages" path="/dialogues" />
      <NavbarItem name="News" path="/news" />
      <NavbarItem name="Music" path="/music" />
      <NavbarItem name="Settings" path="/settings" />
      
    </nav>
  );
};

export default Navbar;
