import Sidebar from "../../components/Fragments/Sidebar";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import Navbar from "../../components/Fragments/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/Elements/Button";
import axios from "axios";
import { config } from "../../configs";
import Loading from "../../components/Elements/Loading";

function PagesCategories() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Get token from local storage
  const [data, setData] = useState([]); // Create a state variable to store data
  const [isLoading, setIsLoading] = useState(false); // Create a state variable to store loading state

  useEffect(() => {
    const getCategoriesApi = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${config.VITE_API_HOST_DEV}/cms/categories`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setIsLoading(false);
        setData(response.data.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getCategoriesApi();
  }, []);

  if (!token) return <Navigate to="/signin" replace={true} />; // Redirect to signin page if token is not available
  return (
    <>
      <CmsLayouts>
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <Navbar>
            <Breadcrumbs textSecound="Categories" />
            {/* <div className="flex items-center pr-4">
              <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                Button
              </button>
            </div> */}
          </Navbar>
          <div className="py-3">
            {/* <!-- component --> */}
            <section className="container mx-auto p-6">
              <div className="mb-3">
                <Button
                  className="px-4 py-2 from-[#4f5de2] to-[#0025f5] hover:shadow-[#6025F5]/50"
                  onClick={() => navigate("/categories/create")}
                >
                  Tambah
                </Button>
              </div>
              <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th className="px-4 py-3">No</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Action</th>
                        {/* <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Date</th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {isLoading ? (
                        <tr>
                          <td colSpan={data.length + 1}>
                            <Loading className="bg-gray-100" />
                          </td>
                        </tr>
                      ) : (
                        data.map((item, index) => (
                          <tr key={index} className="text-gray-700">
                            <td className="px-4 py-3 text-sm border">
                              {(index += 1)}
                            </td>
                            <td className="px-4 py-3 border">
                              <div className="flex items-center text-sm">
                                {/* <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                  alt=""
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"
                                ></div>
                              </div> */}
                                <div>
                                  <p className="font-semibold text-black">
                                    {item.name}
                                  </p>
                                  {/* <p className="text-xs text-gray-600">
                                  Developer
                                </p> */}
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-ms font-semibold border">
                              <p>Tes</p>
                            </td>
                            {/* <td className="px-4 py-3 text-xs border">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                            {" "}
                            Acceptable{" "}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm border">6/4/2000</td> */}
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </CmsLayouts>
    </>
  );
}

export default PagesCategories;
