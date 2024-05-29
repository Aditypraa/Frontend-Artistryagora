import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import Alert from "../../components/Elements/Alert";
import FormPayments from "./form";

function PaymentsCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    type: "",
    role: "",
    file: "",
    avatar: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    title: "",
    description: "",
    className: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = async (file) => {
    let formData = new FormData();
    formData.append("avatar", file);
    try {
      const res = await postData("/cms/images", formData, true);
      return res;
    } catch (error) {
      setAlert({
        status: true,
        title: "Upload Error",
        description: "Failed to upload image.",
        className: "bg-red-100 text-red-700",
      });
      throw error;
    }
  };

  const handleChange = async (e) => {
    if (e.target.name === "avatar") {
      if (
        e?.target?.files[0]?.type === "image/jpg" ||
        e?.target?.files[0]?.type === "image/png" ||
        e?.target?.files[0]?.type === "image/jpeg"
      ) {
        const size = parseFloat(e.target.files[0].size / 1024 / 1024).toFixed(
          2
        ); // size in MB

        if (size > 3) {
          setAlert({
            status: true,
            title: "Error",
            description: "Please select image size less than 3 MB",
            className: "bg-red-100 text-red-700",
          });
          setForm((prevForm) => ({
            ...prevForm,
            file: "",
            [e.target.name]: "",
          }));
        } else {
          try {
            const res = await uploadImage(e.target.files[0]);
            setForm((prevForm) => ({
              ...prevForm,
              file: res.data.data._id,
              [e.target.name]: res.data.data.name,
            }));
          } catch (error) {
            console.error("Image upload failed:", error);
          }
        }
      } else {
        setAlert({
          status: true,
          title: "Error",
          description: "type image png | jpg | jpeg",
          className: "bg-red-100 text-red-700",
        });
        setForm((prevForm) => ({
          ...prevForm,
          file: "",
          [e.target.name]: "",
        }));
      }
    } else {
      setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const payload = {
        image: form.file,
        type: form.type,
      };

      const res = await postData("/cms/payments", payload);

      dispatch(
        setNotif(
          true,
          "success",
          `berhasil Menambah payments ${res.data.data.type}`
        )
      );
      navigate("/payments");
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
        textSecound={"Payments"}
        urlSecound={"/payments"}
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
            <FormPayments
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

export default PaymentsCreate;
