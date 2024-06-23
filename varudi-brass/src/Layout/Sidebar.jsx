/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { SidebarMenuOptions, SidebarSettingsOptions } from "./SidebarMenu";
import { Link } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";
import Add_Icon from "../assets/add-icon.svg";
import DropDownIcon from "../assets/dropdown-icon.svg";
import AddModal from "../modal/AddModal";

function Sidebar(props) {
  const [activeHeader, setActiveHeader] = useState("");
  const [activeSubHeader, setActiveSubHeader] = useState(
    window.location.pathname.split("/")[2] || ""
  );
  const [showSubmenu, setShowsubmenu] = useState(
    window.location.pathname.split("/")[1] === "master" ? true : false
  );

  useEffect(() => {
    if (window.location.pathname.split("/")[1] === "home") {
      setActiveHeader("Dashboard");
    } else if (window.location.pathname.split("/")[1] === "master") {
      setActiveHeader("Master");
    } else if (window.location.pathname.split("/")[2] === "accounts") {
      setActiveHeader("Accounts");
    } else if (window.location.pathname.split("/")[2] === "items") {
      setActiveHeader("Items");
    } else if (window.location.pathname.split("/")[2] === "sites") {
      setActiveHeader("Sites");
    } else if (window.location.pathname.split("/")[2] === "users") {
      setActiveHeader("Users");
    } else if (window.location.pathname.split("/")[1] === "voucher") {
      setActiveHeader("Voucher");
    } else if (window.location.pathname.split("/")[1] === "books") {
      setActiveHeader("Books");
    } else if (window.location.pathname.split("/")[1] === "reports") {
      setActiveHeader("Reports");
    } else if (window.location.pathname.split("/")[1] === "settings") {
      setActiveHeader("Settings");
    } else if (window.location.pathname.split("/")[1] === "activity-log") {
      setActiveHeader("Activity Log");
    }
  }, []);

  return (
    <>
      <div className="rounded-lg bg-white h-full overflow-hidden text-16-500">
        <div className="flex flex-col gap-[9px] mx-2 py-[17px] pb-[9px] pt-[22px] border-b border-text_primary border-opacity-[0.1]">
          <button
            className={`py-[9px] flex rounded-lg justify-center items-center border border-primary`}
            onClick={() => {
              props.showModal(true);
            }}
          >
            <img
              className="cursor-pointer h-[20px] w-[20px] rounded-md"
              src={Add_Icon}
            />
            <p className="text-16-600 text-primary">Add</p>
          </button>
        </div>
        {window.location.pathname.split("/")[1] === "master" && showSubmenu ? (
          <ul className="flex flex-col gap-[9px] py-[17px] pt-2 pb-[22px] mx-2">
            {SidebarMenuOptions.map((sidebarOptions, i) => {
              return (
                <div key={i}>
                  {sidebarOptions.option === "Master" ? (
                    <div className="relative">
                      <li key={i} className="cursor-pointer">
                        <div
                          className={`flex gap-2 items-center px-[9px] py-[8px] rounded-lg ${
                            activeHeader === sidebarOptions.option
                              ? "bg-primary text-white"
                              : "bg-white"
                          }`}
                          onClick={() => {
                            setShowsubmenu(false);
                          }}
                        >
                          <div
                            className={`rounded-[7px] h-5 w-5 flex justify-center items-center`}
                          >
                            <SidebarIcon
                              iconName={sidebarOptions.option}
                              fill={
                                activeHeader === sidebarOptions.option
                                  ? "#fff"
                                  : "#000"
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <p className="transition-item active">
                              {sidebarOptions.option}
                            </p>
                            <img
                              className="cursor-pointer h-[16px] w-[16px] rounded-md rotate-180"
                              src={DropDownIcon}
                            />
                          </div>
                        </div>
                      </li>
                      <ul className="bg-white my-2 pl-2 ml-[27px] border-l border-text_primary border-opacity-10">
                        {sidebarOptions.subOptions.map((subOption, j) => (
                          <li key={j} className="cursor-pointer">
                            <Link to={subOption.route}>
                              <div
                                className={`px-3 py-2 rounded-lg ${
                                  window.location.pathname === subOption.route
                                    ? "text-black bg-primary bg-opacity-[0.08]"
                                    : "text-opacity_black"
                                }`}
                              >
                                {subOption.option}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <li key={i} className="cursor-pointer">
                      <Link to={sidebarOptions.route}>
                        <div
                          className={`flex gap-2 items-center px-[9px] py-[8px] rounded-lg ${
                            activeHeader === sidebarOptions.option
                              ? "bg-primary text-white"
                              : "bg-white"
                          }`}
                          onClick={() => {
                            if (sidebarOptions.option == "Master") {
                              setShowsubmenu(true);
                            } else {
                              setActiveHeader(sidebarOptions.option);
                            }
                          }}
                        >
                          <div
                            className={`rounded-[7px] h-5 w-5 flex justify-center items-center`}
                          >
                            <SidebarIcon
                              iconName={sidebarOptions.option}
                              fill={
                                activeHeader === sidebarOptions.option
                                  ? "#fff"
                                  : "#000"
                              }
                            />
                          </div>
                          <p className="transition-item active">
                            {sidebarOptions.option}
                          </p>
                        </div>
                      </Link>
                    </li>
                  )}
                </div>
              );
            })}
          </ul>
        ) : (
          <ul className="flex flex-col gap-[9px] py-[17px] mx-2">
            {SidebarMenuOptions.map((sidebarOptions, i) => {
              return (
                <li key={i} className="cursor-pointer">
                  <Link to={sidebarOptions.route}>
                    <div
                      className={`flex gap-2 items-center px-[9px] py-[8px] rounded-lg ${
                        activeHeader === sidebarOptions.option
                          ? "bg-primary text-white"
                          : "bg-white"
                      }`}
                      onClick={() => {
                        if (sidebarOptions.option == "Master") {
                          setShowsubmenu(true);
                          setActiveHeader(sidebarOptions.option);
                        } else {
                          setActiveHeader(sidebarOptions.option);
                        }
                      }}
                    >
                      <div
                        className={`rounded-[7px] h-5 w-5 flex justify-center items-center`}
                      >
                        <SidebarIcon
                          iconName={sidebarOptions.option}
                          fill={
                            activeHeader === sidebarOptions.option
                              ? "#fff"
                              : "#000"
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p className="transition-item active">
                          {sidebarOptions.option}
                        </p>
                        {window.location.pathname.split("/")[1] ===
                          "master" && (
                          <img
                            className="cursor-pointer h-[16px] w-[16px] rounded-md"
                            src={DropDownIcon}
                          />
                        )}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        <ul className="flex flex-col gap-[9px] mx-2 py-[17px] pb-2 pt-[22px] border-t border-text_primary border-opacity-[0.1]">
          {SidebarSettingsOptions.map((sidebarOptions, i) => {
            return (
              <li key={i} className="cursor-pointer">
                <Link to={sidebarOptions.route}>
                  <div
                    className={`flex gap-2 items-center px-[9px] py-[8px] rounded-lg ${
                      activeHeader === sidebarOptions.option
                        ? "bg-primary text-white"
                        : "bg-white"
                    }`}
                    onClick={() => {
                      if (sidebarOptions.option == "Master") {
                        setShowsubmenu(true);
                        setActiveHeader(sidebarOptions.option);
                      } else {
                        setActiveHeader(sidebarOptions.option);
                      }
                    }}
                  >
                    <div
                      className={`rounded-[7px] h-5 w-5 flex justify-center items-center`}
                    >
                      <SidebarIcon
                        iconName={sidebarOptions.option}
                        fill={
                          activeHeader === sidebarOptions.option
                            ? "#fff"
                            : "#000"
                        }
                      />
                    </div>
                    <p className="transition-item active">
                      {sidebarOptions.option}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
