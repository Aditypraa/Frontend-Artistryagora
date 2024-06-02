import { useState } from "react";
import { postData } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNotif } from "../../redux/notif/actions";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import FormCategories from "./form";
import Alert from "../../components/Elements/Alert";

function CategoriesCreate() {
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
    const res = await postData("/cms/categories", form);
    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil Menambah kategori : "${res.data.data.name}"`
        )
      );
      navigate("/categories");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        title: "Error",
        description: res.response.data.msg,
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
      <CmsLayouts>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            {alert.status && (
              <Alert
                title={alert.title}
                description={alert.description}
                className={alert.className}
              />
            )}
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
