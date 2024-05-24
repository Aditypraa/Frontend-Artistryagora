import Sidebar from "../../components/Fragments/Sidebar";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import Navbar from "../../components/Fragments/Navbar";
import { Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";

function PagesCategories() {
  const token = localStorage.getItem("token"); // Get token from local storage
  //   const [data, setData] = useState([]); // Create a state variable to store data
  //   console.log("data");
  //   console.log(data);

  //   useEffect(() => {
  //     console.log("useEffect");
  //   }, []);

  if (!token) return <Navigate to="/signin" replace={true} />; // Redirect to signin page if token is not available
  return (
    <>
      {console.log("render")}
      <CmsLayouts>
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <Navbar>
            <Breadcrumbs textSecound="Categories" />
            <div className="flex items-center pr-4">
              <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                Button
              </button>
            </div>
          </Navbar>
          <div className="py-3">
            <h1>Categories</h1>
          </div>
        </div>
      </CmsLayouts>
    </>
  );
}

export default PagesCategories;
