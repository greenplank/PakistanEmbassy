import React from "react";
import Link from "next/link";

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
          <li>
        <Link href="#">
          <a>Pak Embassy</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>About Pakistan</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>BILATERAL RELATIONS</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>CONSULAR SERVICES</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>BUSINESS</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>TOURISM</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>MEDIA HUB</a>
        </Link>
      </li>
      <li>
        <Link href="#">
          <a>CONTACT US</a>
        </Link>
      </li>
      
    </ul>
  );
};

export default NavLinks;
