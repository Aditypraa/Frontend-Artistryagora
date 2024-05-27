import { useState } from "react";
// import { Container } from "react-bootstrap";
import { postData } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNotif } from "../../redux/notif/actions";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import FormCategories from "./form";
import Alert from "../../components/Elements/Alert";

function CategoryCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData("/cms/categories", form);
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil Menambah kategori : "${res.data.data.name}"`
        )
      );
      navigate("/categories");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        title: "Error",
        description: err.response.data.msg,
        className: "bg-red-100 text-red-700",
      });
    }
  };

  return (
    <>
      <Breadcrumbs
        textSecound={"Categories"}
        urlSecound={"/categories"}
        textThird="Create"
      />
      {alert.status && (
        <Alert
          title={alert.title}
          description={alert.description}
          className={alert.className}
        />
      )}
      <CmsLayouts>
        <FormCategories
          form={form}
          isLoading={isLoading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </CmsLayouts>
    </>
  );
}

export default CategoryCreate;
