import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/sidebar-nav.css";
import useWindowDimensions from "../hooks/useWindowDimensions";
import HomeIcon from "../assets/icons/HomeIcon";

const SidebarNav = ({ toggled, setToggled }) => {
  const location = useLocation();
  return (
    <Sidebar
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="sm"
      defaultCollapsed={useWindowDimensions()}
      width="265px"
      collapsedWidth="65px"
      className="main-navigation"
      backgroundColor="#60A5FA"
    >

      <Menu className="mt-4 gap-2">
        <h5 className="fw-bold text-light text-center">Google Reviews</h5>
        <MenuItem
          component={<Link to="/" className="menu-item-link" />}
          active={location.pathname === "/" && true}
        >
          <span className="menu-icon">
            <HomeIcon width="25px" height="25px" />
          </span>
          <span className="menu-text">Home</span>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarNav;
