import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillHandbagFill } from "react-icons/bs";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import starLogo from "../../assets/logo-star.png";

const Header = () => {
  return (
    <>
      <div className="container mx-auto md:hidden flex gap-5 pt-3">
        <img src={starLogo} alt="star-logo" className="" />
        <span className="logo-text">Discount Shop</span>
      </div>
      <div className="header">
        <nav className="nav-bar">
          <div className="logo">
            <img src={starLogo} alt="star-logo" className="" />
            <span className="logo-text">Discount Shop</span>
          </div>
          <ul className="menu">
            <li className="menu-item">
              <NavLink to={"/"} className="menu-item-link">
                <AiFillShop className=" text-[20px] md:text-[23px]" />
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to={"/find-us"} className="menu-item-link">
                <FaMapMarkerAlt className=" text-[18px] md:text-[20px]" />
              </NavLink>
            </li>
            <li className="menu-item">
              {" "}
              <NavLink to={"/faq"} className="menu-item-link">
                <MdOutlineQuestionAnswer className=" text-[20px] md:text-[23px]" />
              </NavLink>
            </li>
            <li className="menu-item relative">
              <NavLink to={"/add-to-card"} className="menu-item-link">
                <BsFillHandbagFill className=" text-[18px] md:text-[20px]" />
              </NavLink>
              <span className="animate-ping md:hidden bg-red-500 text-center px-1 min-w-[19px] min-h-[19px] md:px-2 rounded-full text-[9px] md:text-[11px] absolute top-2 right-[-5px] md:right-2"></span>
              <span className=" bg-red-500 text-center text-white px-1 min-w-[19px] md:px-2 rounded-full text-[9px] md:text-[11px] absolute top-2 right-[-5px] md:right-2">
                20
              </span>
            </li>
            <li className="menu-item md:hidden">
              <NavLink to={"/profile"} className="menu-item-link">
                <FaUserCircle className=" text-[20px] md:text-[23px]" />
              </NavLink>
            </li>
          </ul>
          <button className="black-btn hidden md:block">Account</button>
        </nav>
      </div>
    </>
  );
};

export default Header;
