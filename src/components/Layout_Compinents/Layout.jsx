import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react'
import TopNav from "./header/TopNav";
import SideNav from "./header/SideNav";

const Layout = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <>
        <TopNav toggleSidebar={toggleSidebar} />
      <SideNav isOpen={isSidebarOpen} />
      
      <Outlet />
    </>
  )
};

export default Layout;