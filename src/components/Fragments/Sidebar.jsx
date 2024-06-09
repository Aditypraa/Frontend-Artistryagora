import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHome, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavAccess from "../Elements/NavAccess";
import imageProfile2 from "../../assets/profile2.png";

import {
  accessCategories,
  accessEvents,
  accessOrders,
  // accessParticipant,
  accessPayments,
  accessTalents,
  accessOrganizers,
  accessAdmin,
} from "../../constants/access";
import {
  MdOutlineCategory,
  MdOutlineEmojiEvents,
  MdOutlinePayments,
} from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { IoPeopleCircleOutline } from "react-icons/io5";
// import { IoIosPeople } from "react-icons/io";
import { GiOrganigram } from "react-icons/gi";

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const fetchData = () => {
      let { role, email } = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      setRole(role);
      setEmail(email);
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };

  return (
    <>
      {/* Toogle Button */}
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <AiOutlineMenu className="w-6 h-6" />
      </button>
      {/*End Toogle Button */}

      <aside
        id="default-sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-b from-black to-purple-900 ">
          <div className="font-poppins antialiased">
            <div className="space-y-6 md:space-y-10 mt-10">
              <h1 className="text-white font-bold text-4xl text-center md:hidden">
                Ag<span className="text-teal-600">.</span>
              </h1>
              <h1 className="text-white hidden md:block font-bold text-sm md:text-xl text-center">
                Artistry Agora<span className="text-teal-600">.</span>
              </h1>
              <div id="profile" className="space-y-3">
                <img
                  src={imageProfile2}
                  alt="Avatar user"
                  className="w-10 md:w-16 rounded-full mx-auto"
                />
                <div>
                  <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                    {email}
                  </h2>
                  <p className="text-xs font-bold uppercase text-gray-400 text-center">
                    {role}
                  </p>
                </div>
              </div>

              {/* Search */}
              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <input
                  type="text"
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                  placeholder="Search"
                />
                <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block bg-white">
                  <FaSearch className="w-4 h-4" />
                </button>
              </div>
              {/* End Search */}

              {/* Acces Sidebar */}
              <div className="flex flex-col space-y-2">
                <Link
                  to={"/"}
                  title="Artistry Agora"
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <FaHome className="w-6 h-6 fill-current inline-block" />
                  <span className=""> Home</span>
                </Link>
                <NavAccess
                  // onClick={() => navigate("/categories")}
                  to={"/categories"}
                  title="Categories"
                  role={role}
                  roles={accessCategories.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <MdOutlineCategory className="w-6 h-6 fill-current inline-block" />
                  <span> Categories</span>
                </NavAccess>
                <NavAccess
                  to={"/talents"}
                  title="Talents"
                  role={role}
                  roles={accessTalents.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <IoPeopleCircleOutline className="w-6 h-6 fill-current inline-block" />
                  <span> Talents</span>
                </NavAccess>
                <NavAccess
                  to={"/payments"}
                  title="Payments"
                  role={role}
                  roles={accessPayments.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <MdOutlinePayments className="w-6 h-6 fill-current inline-block" />
                  <span> Payments</span>
                </NavAccess>
                <NavAccess
                  to={"/events"}
                  title="Events"
                  role={role}
                  roles={accessEvents.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <MdOutlineEmojiEvents className="w-6 h-6 fill-current inline-block" />
                  <span> Events</span>
                </NavAccess>
                {/* <NavAccess
                  to={"/participants"}
                  title="Participant"
                  role={role}
                  roles={accessParticipant.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <IoIosPeople className="w-6 h-6 fill-current inline-block" />
                  <span> Participant</span>
                </NavAccess> */}
                <NavAccess
                  to={"/admins"}
                  title="Admin"
                  role={role}
                  roles={accessAdmin.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <RiAdminLine className="w-6 h-6 fill-current inline-block" />
                  <span> Admin</span>
                </NavAccess>
                <NavAccess
                  to={"/organizers"}
                  title="Organizers"
                  role={role}
                  roles={accessOrganizers.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <GiOrganigram className="w-6 h-6 fill-current inline-block" />
                  <span> Organizers</span>
                </NavAccess>
                <NavAccess
                  to={"/orders"}
                  title="Orders"
                  role={role}
                  roles={accessOrders.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <GrTransaction className="w-6 h-6 fill-current inline-block" />
                  <span> Orders</span>
                </NavAccess>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                  title="Logout"
                >
                  Logout
                </button>
              </div>
              {/* End Acces Sidebar */}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
