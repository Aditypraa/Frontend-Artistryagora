import { Navigate } from "react-router-dom";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Navbar from "../../components/Fragments/Navbar";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import Sidebar from "../../components/Fragments/Sidebar";
const PagesDashboard = () => {
  const token = localStorage.getItem("token"); // Get token from local storage

  if (!token) return <Navigate to="/signin" replace={true} />; // Redirect to signin page if token is not available
  return (
    <CmsLayouts>
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Navbar>
          <Breadcrumbs />
          <div className="flex items-center pr-4">
            <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
              Button
            </button>
          </div>
        </Navbar>
        <div className="py-3">
          <h1>Home</h1>
        </div>
      </div>
    </CmsLayouts>
  );
};

export default PagesDashboard;
