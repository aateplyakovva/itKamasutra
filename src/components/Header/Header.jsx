import { React } from "react";
import c from './Header.module.css';

const Header = () => {
    return (
      <header className={c.header}>
        <img src="./logo192.png" alt="" />
      </header>
    );
}

export default Header