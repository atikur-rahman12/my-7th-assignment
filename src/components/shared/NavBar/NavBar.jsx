import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuChartLine } from "react-icons/lu";
import { NavLink } from "react-router";
import NavBarLogo from "../../../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost flex gap-0">
            <img src={NavBarLogo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-end w-full ">
          <ul className="menu menu-horizontal flex gap-2 overflow-x-auto whitespace-nowrap font-medium text-sm lg:text-xl px-1">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "bg-[#244D3F] text-white font-semibold" : ""
                }
              >
                <RiHome2Line /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/timeline"}
                className={({ isActive }) =>
                  isActive ? "bg-[#244D3F] text-white font-semibold" : ""
                }
              >
                <MdOutlineWatchLater /> Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/states"}
                className={({ isActive }) =>
                  isActive ? "bg-[#244D3F] text-white font-semibold" : ""
                }
              >
                <LuChartLine /> States
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
