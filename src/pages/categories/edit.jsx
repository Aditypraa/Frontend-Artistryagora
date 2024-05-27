import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData, putData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { setNotif } from "../../redux/notif/actions";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import FormCategories from "./form";
import Alert from "../../components/Elements/Alert";

function CategoryEdit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryId } = useParams();
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

  const fetchOneCategories = async () => {
    const res = await getData(`/cms/categories/${categoryId}`);

    setForm({ ...form, name: res.data.data.name });
  };

  useEffect(() => {
    fetchOneCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await putData(`/cms/categories/${categoryId}`, form);
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil ubah kategori ${res.data.data.name}`
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
        textThird="Edit"
      />
      {alert.status && (
        <Alert
          title={alert.title}
          description={alert.description}
          className={alert.className}
        />
      )}
      <CmsLayouts className="mt-3">
        <FormCategories
          edit
          form={form}
          isLoading={isLoading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </CmsLayouts>
    </>
  );
}

export default CategoryEdit;
