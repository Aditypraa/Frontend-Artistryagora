import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHome, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavAccess from "./NavAccess";
import {
  accessCategories,
  accessEvents,
  accessOrders,
  accessParticipant,
  accessPayments,
  accessTalents,
  accessOrganizers,
  accessAdmin,
} from "../../constants/access";

function SidebarDone() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [role, setRole] = useState(null);

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
      let { role } = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      setRole(role);
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
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="font-poppins antialiased">
            <div className="space-y-6 md:space-y-10 mt-10">
              <h1 className="font-bold text-4xl text-center md:hidden">
                D<span className="text-teal-600">.</span>
              </h1>
              <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                Dashwind<span className="text-teal-600">.</span>
              </h1>
              <div id="profile" className="space-y-3">
                <img
                  src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="Avatar user"
                  className="w-10 md:w-16 rounded-full mx-auto"
                />
                <div>
                  <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                    Eduard Pantazi
                  </h2>
                  <p className="text-xs text-gray-500 text-center">
                    Administrator
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
                  <FaHome className="w-6 h-6 fill-current inline-block" />
                  <span> Categories</span>
                </NavAccess>
                <NavAccess
                  to={"/talents"}
                  title="Talents"
                  role={role}
                  roles={accessTalents.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <FaHome className="w-6 h-6 fill-current inline-block" />
                  <span> Talents</span>
                </NavAccess>
                <NavAccess
                  to={"/payments"}
                  title="Payments"
                  role={role}
                  roles={accessPayments.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <FaHome className="w-6 h-6 fill-current inline-block" />
                  <span> Payments</span>
                </NavAccess>
                <NavAccess
                  to={"/events"}
                  title="Events"
                  role={role}
                  roles={accessEvents.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <FaHome className="w-6 h-6 fill-current inline-block" />
                  <span> Events</span>
                </NavAccess>
                <NavAccess
                  to={"/participants"}
                  title="Participant"
                  role={role}
                  roles={accessParticipant.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <FaHome className="w-6 h-6 fill-current inline-block" />
                  <span> Participant</span>
                </NavAccess>
                <NavAccess
                  to={"/admins"}
                  title="Admin"
                  role={role}
                  roles={accessAdmin.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <FaHome className="w-6 h-6 fill-current inline-block" />
                  <span> Admin</span>
                </NavAccess>
                <NavAccess
                  to={"/organizers"}
                  title="Organizers"
                  role={role}
                  roles={accessOrganizers.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <FaHome className="w-6 h-6 fill-current inline-block" />
                  <span> Organizers</span>
                </NavAccess>
                <NavAccess
                  to={"/orders"}
                  title="Orders"
                  role={role}
                  roles={accessOrders.lihat}
                  className="text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <FaHome className="w-6 h-6 fill-current inline-block" />
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

export default SidebarDone;
