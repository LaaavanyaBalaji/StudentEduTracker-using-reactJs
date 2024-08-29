import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import { FaClinicMedical } from "react-icons/fa";





import './maincontent.css'; // Import the CSS file for styling
import { BiMailSend } from "react-icons/bi";

function MainContent() {
  const [regularCount, setRegularCount] = useState(0);
  const [remedialCount, setRemedialCount] = useState(0);
  const [workshopCount, setWorkshopCount] = useState(0);

  return (
    <div className="main-content">
      <div className="menu">
        <div className="block"  style={{backgroundColor:'red', color:"white"}} onClick={() => setRegularCount(regularCount + 1)}>
          <IoPersonSharp className="icon" />
          {regularCount}
          <span>Regular Students</span>
        </div>
        <div className="block" style={{backgroundColor:'blue',color:"white"}} onClick={() => setRemedialCount(remedialCount + 1)}>
          <FaUserGraduate className="icon" />
          {remedialCount}
          <span>Remedial Students</span>
        </div>
        <div className="block" style={{backgroundColor:'purple',color:"white"}} onClick={() => setWorkshopCount(workshopCount + 1)}>
          <GrWorkshop className="icon" />
          {workshopCount}
          <span>Workshop Students</span>
        </div>
      </div>
      <hr />
      <h4>MENU</h4>

      <div className="menu1">
        <div className="menu1items"><IoPerson/><span>Regular Enrollment</span></div>
        <div className="menu1items"><FaBook/><span>Remedial Enrollment</span></div>
        <div className="menu1items"><FaPersonCircleCheck/><span>Club Management</span></div>
        <div className="menu1items"><FaBookReader/><span>Classroom Management</span></div>
        <div className="menu1items"><IoIosMail/><span>SMS/EMAIL</span></div>
        <div className="menu1items"><FaClinicMedical/><span>Clinic</span></div>
        <div className="menu1items"><IoBarChart/><span>Attendance</span></div>

      </div>
    </div>
  );
}

export default MainContent;
