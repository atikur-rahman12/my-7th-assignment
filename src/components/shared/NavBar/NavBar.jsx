import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuChartLine } from "react-icons/lu";
import { NavLink } from "react-router";
import NavBarLogo from "../../../assets/logo.png";

const NavBar = () => {
  return (
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-2 flex-wrap md:flex-nowrap">
        <div className="navbar-start w-auto">
          <a className="btn btn-ghost p-0">
            <img src={NavBarLogo} alt="Logo" className="h-8 md:h-10 w-auto" />
          </a>
        </div>
        <div className="navbar-center ml-auto">
          <ul className="menu menu-horizontal gap-1 md:gap-2 font-medium text-xs md:text-base justify-end w-full">
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
  );
};

export default NavBar;
