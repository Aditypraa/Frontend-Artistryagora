import { useEffect, useState } from "react";
import logoArtistryAgora from "../../assets/artistryagora.png";
import NavAccess from "../Elements/NavAccess";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import {
  accessCategories,
  accessEvents,
  accessOrders,
  accessPayments,
  accessTalents,
} from "../../constants/access";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [role, setRole] = useState(null);

  // console.log("role");
  // console.log(role);

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
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to={"/"}
            title="Artistry Agora"
            className="inline-flex items-center"
          >
            <img
              src={logoArtistryAgora}
              alt="Logo Artistry Agora"
              className="w-20 text-teal-accent-400"
            />
            <span className="ml-2 text-xs font-bold tracking-wide text-gray-100 uppercase">
              Artistry Agora
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to={"/"}
                title="Home"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <NavAccess
                // onClick={() => navigate("/categories")}
                to={"/categories"}
                title="Categories"
                role={role}
                roles={accessCategories.lihat}
              >
                Categories
              </NavAccess>
            </li>
            <li>
              <NavAccess
                to={"/talents"}
                title="Talents"
                role={role}
                roles={accessTalents.lihat}
              >
                Talents
              </NavAccess>
            </li>
            <li>
              <NavAccess
                to={"/events"}
                title="Events"
                role={role}
                roles={accessEvents.lihat}
              >
                Events
              </NavAccess>
            </li>
            <li>
              <NavAccess
                to={"/payments"}
                title="Payments"
                role={role}
                roles={accessPayments.lihat}
              >
                Payments
              </NavAccess>
            </li>
            <li>
              <NavAccess
                to={"/orders"}
                title="Orders"
                role={role}
                roles={accessOrders.lihat}
              >
                Orders
              </NavAccess>
            </li>
          </ul>
          {/* Logout */}
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <button
                onClick={() => handleLogout()}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                title="Logout"
              >
                Logout
              </button>
            </li>
          </ul>
          {/* End Logout */}

          <div className="lg:hidden">
            {/* Button Menu */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              {/* Icons Menu */}
              <AiOutlineMenu className="w-10 text-green-400" />
              {/* Icons Menu */}
            </button>
            {/* Button Menu */}

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to={"/"}
                        title="Artistry Agora"
                        className="inline-flex items-center"
                      >
                        <img
                          src={logoArtistryAgora}
                          alt="Logo Artistry Agora"
                          className="w-20 text-teal-accent-400"
                        />

                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Artistry Agora
                        </span>
                      </Link>
                    </div>
                    {/* Close Menu */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <AiOutlineCloseCircle className="w-10 text-red-600" />
                      </button>
                    </div>
                    {/* Close Menu */}
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to={"/"}
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <NavAccess
                          to={"/categories"}
                          title="Categories"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          role={role}
                          roles={accessCategories.lihat}
                        >
                          Categories
                        </NavAccess>
                      </li>
                      <li>
                        <NavAccess
                          to={"/talents"}
                          title="Talents"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          role={role}
                          roles={accessTalents.lihat}
                        >
                          Talents
                        </NavAccess>
                      </li>
                      <li>
                        <NavAccess
                          to={"/events"}
                          title="Events"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          role={role}
                          roles={accessEvents.lihat}
                        >
                          Events
                        </NavAccess>
                      </li>
                      <li>
                        <NavAccess
                          to={"/payments"}
                          title="Payments"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          role={role}
                          roles={accessPayments.lihat}
                        >
                          Payments
                        </NavAccess>
                      </li>
                      <li>
                        <NavAccess
                          to={"/orders"}
                          title="Orders"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          role={role}
                          roles={accessOrders.lihat}
                        >
                          Orders
                        </NavAccess>
                      </li>

                      {/* Logout */}
                      <li>
                        <button
                          onClick={() => handleLogout()}
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          title="Logout"
                        >
                          Logout
                        </button>
                      </li>
                      {/* Logout */}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
