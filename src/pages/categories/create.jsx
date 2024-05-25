import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Navbar from "../../components/Fragments/Navbar";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import FormCategories from "./form";
import Alert from "../../components/Elements/Alert";
import axios from "axios";
import { config } from "../../configs";
import Sidebar from "../../components/Fragments/Sidebar";

function CategoriesCreate() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    title: "",
    description: "",
    className: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${config.VITE_API_HOST_DEV}/cms/auth/signin`,
        form
      );
      console.log(response.data.data.token);
      localStorage.setItem("token", response.data.data.token); // Save token to local storage
      navigate("/categories");
      setIsLoading(false);
    } catch (error) {
      // console.log(error.response.data.msg);
      setIsLoading(false);
      setAlert({
        status: true,
        title: "Error",
        description: error?.response?.data?.msg ?? "Internal Server Error",
        className: "bg-red-100 text-red-700",
      });
    }
  };

  return (
    <>
      <CmsLayouts>
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <Navbar>
            <Breadcrumbs
              textSecound={"Categories"}
              urlSecound={"/categories"}
              textThird="Create"
            />
          </Navbar>
          {alert.status && (
            <Alert
              title={alert.title}
              description={alert.description}
              className={alert.className}
            />
          )}
          <div className="py-4 flex justify-center">
            <FormCategories
              form={form}
              isLoading={isLoading}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </CmsLayouts>
    </>
  );
}

export default CategoriesCreate;
