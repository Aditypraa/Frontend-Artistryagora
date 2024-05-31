import { useState } from "react";
import Alert from "../../components/Elements/Alert";
import { useNavigate } from "react-router-dom";
import Form from "./form";
import logoArtistryAgora from "../../assets/artistryagora.png";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

const PagesSignin = () => {
  const dispatch = useDispatch();
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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await postData("/cms/auth/signin", form);

      dispatch(
        userLogin(
          response.data.data.token,
          response.data.data.role,
          response.data.data.email,
          response.data.data.refreshToken
        )
      );

      setIsLoading(false);
      navigate("/");
    } catch (error) {
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
    <main className="w-full h-screen flex items-center justify-center px-4 bg-gray-200 relative overflow-hidden">
      {/* Decorative shapes */}

      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-2xl space-y-6 relative z-10">
        <div className="text-center">
          <img
            src={logoArtistryAgora}
            width={150}
            className="mx-auto animate-bounce"
          />
          <h3 className="mt-6 text-gray-800 text-2xl font-bold sm:text-3xl">
            Log in to your account
          </h3>
        </div>
        {alert.status && (
          <Alert
            title={alert.title}
            description={alert.description}
            className={alert.className}
          />
        )}
        <Form
          form={form}
          handleChange={handleChange}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
};

export default PagesSignin;
