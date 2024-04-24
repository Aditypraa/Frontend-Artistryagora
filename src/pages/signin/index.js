import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import ComponentAlert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import FormSignin from "./form";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

function PageSignin() {
  // const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData(
        "/cms/auth/signin",
        form // { email: "", password: "" }
      );

      console.log(res.data.data.token);

      // localStorage.setItem("token", res.data.data.token);
      dispatch(userLogin(res.data.data.token, res.data.data.role));
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: error?.response?.data?.msg ?? "Internal Server Error",
        type: "danger",
      });
    }
  };

  // if (token) return <Navigate to="/" replace={true} />;

  return (
    <Container md={12}>
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && (
          <ComponentAlert message={alert.message} type={alert.type} />
        )}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form Signin</Card.Title>
          <FormSignin
            form={form}
            handleChange={handleChange}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
