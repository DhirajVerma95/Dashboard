import React from 'react'
import {  FaRegSun,FaHome,FaImages,FaComment,FaClipboardList } from "react-icons/fa";
const SidebarComponent = () => {
    return (
        <div class="col-md-2 col-lg-2 sidebar-offcanvas pl-0 SideBar" id="sidebar" role="navigation" style={{ backgroundColor: "#181C20" , color : "White" , height : "100%", width : "80px" }}>
            <div className='listItem'>
            <ul class=" flex-column pl-0  p-3 ">
              <li><FaHome /> </li>
              <li><FaClipboardList /> </li>
              <li><FaImages /> </li>
              <li><FaComment /> </li>
              <li><FaRegSun/> </li>    
            </ul>
            </div>
        </div>
    );
};

export default SidebarComponent