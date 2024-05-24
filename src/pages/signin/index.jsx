import { useState } from "react";
import axios from "axios";
import Alert from "../../components/Elements/Alert";
import { Navigate, useNavigate } from "react-router-dom";
import { config } from "../../configs";
import Form from "./form";

const PagesSignin = () => {
  const token = localStorage.getItem("token"); // Get token from local storage

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    title: "",
    description: "",
    className: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
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
      //   console.log(response.data.data.token);
      localStorage.setItem("token", response.data.data.token); // Save token to local storage
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.msg);
      setIsLoading(false);
      setAlert({
        status: true,
        title: "Error",
        description: error?.response?.data?.msg ?? "Internal Server Error",
        className: "bg-red-100 text-red-700",
      });
    }
  };

  if (token) return <Navigate to="/" replace={true} />; // Redirect to dashboard page if token is available

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <img
            src="https://floatui.com/logo.svg"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
          </div>
        </div>
        {alert.status && (
          <Alert
            title={alert.title}
            description={alert.description}
            className={alert.className}
          />
        )}

        {/* ======================================= FORM ========================================================== */}
        <Form
          form={form}
          handleChange={handleChange}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
        />
        {/* ======================================= END FORM ====================================================== */}
      </div>
    </main>
  );
};

export default PagesSignin;
