import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const navMenu = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Academics",
      url: "/academics",
    },
    {
      name: "Admissions",
      url: "/admission",
    },
    {
      name: "Contact Us",
      url: "/contactUs",
    },
    {
      name: "Faculty",
      url: "/faculty/all",
    },
    {
      name: "Students",
      url: "/students",
    },
  ];

  const [activeSidebar, setActiveSidebar] = useState("");

  return (
    <div className="sticky top-0 z-[300]">
      <div className="bg-purple-950 h-fit w-full">
        <div className="flex justify-between h-20  text-white items-center w-3/4 mx-auto">
          <div className="w-[100px] h-[50px] border-solid border-2 border-yellow-400 rounded-lg flex items-center justify-center">
            Logo
          </div>
          <div>
            <ul className="hidden 2xl:flex gap-5 ">
              {navMenu?.map((el) => (
                <NavLink
                  key={el.name}
                  to={el.url}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-400" : "text-white"
                  }
                >
                  <li className="text-lg font-bold">{el.name}</li>
                </NavLink>
              ))}
            </ul>
            <div className="2xl:hidden">
              {activeSidebar != "active" ? (
                <IoMenu
                  className="text-4xl"
                  onClick={() => setActiveSidebar("active")}
                />
              ) : (
                <IoCloseSharp
                  className="text-4xl"
                  onClick={() => setActiveSidebar("")}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {activeSidebar == "active" && (
        <div className=" w-full h-[calc(100vh-90px)] bg-purple-950 py-5">
          <ul className="flex gap-5 flex-col w-full text-center">
            {navMenu?.map((el) => (
              <NavLink
                key={el.name}
                to={el.url}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                <li className="text-lg font-bold">{el.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
