import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import logo from '../public/logo.png'

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "MegaMenu", href: "/megamenu" },
  { text: "Shop", href: "/shop" },
  { text: "Blog", href: "/blog" },
  { text: "Pages", href: "/pages" },
  { text: "Contact Us", href: "/contact" },
  { text: "About Us", href: "/about" },

];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
          <div className="logo"><Image 
      src={logo}
      alt="Picture of the author"
      width={150}
      height={50}/></div>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
