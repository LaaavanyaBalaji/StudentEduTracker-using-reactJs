import React from "react";
import { MdPeople } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { BiExit } from "react-icons/bi";
import logo from "./assets/logo.png";
import "./navbar.css";

function Navbar({ visible }) {
  return (
    <div className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <img src={logo} alt="Logo" className="navlogo" />
      <ul className="navlist">
        <li className="navitem">
          <MdPeople className="navicon" />
          <span className="navtext">Student Management</span>
        </li>
        <li className="navitem">
          <GiMoneyStack className="navicon" />
          <span className="navtext">Financial Management</span>
        </li>
        <li className="navitem">
          <RiDiscountPercentFill className="navicon" />
          <span className="navtext">Quality Control</span>
        </li>
        <li className="navitem">
          <CiDeliveryTruck className="navicon" />
          <span className="navtext">Report Delivery</span>
        </li>
        <li className="navitem">
          <BsFillFileBarGraphFill className="navicon" />
          <span className="navtext">Attendance</span>
        </li>
      </ul>
      <div className="footerSymbol">
        <FaQuestionCircle />
        <IoSettings />
        <BiExit />
      </div>
    </div>
  );
}

export default Navbar;
