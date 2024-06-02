import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData, postData, putData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import Alert from "../../components/Elements/Alert";
import FormTalents from "./form";

function TalentsEdit() {
  const { talentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
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

  const fetchOneTalents = async () => {
    const res = await getData(`/cms/talents/${talentId}`);

    setForm({
      ...form,
      name: res.data.data.name,
      role: res.data.data.role,
      avatar: res.data.data.image.name,
      file: res.data.data.image._id,
    });
  };

  useEffect(() => {
    fetchOneTalents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uploadImage = async (file) => {
    let formData = new FormData();
    formData.append("avatar", file);
    const res = await postData("/cms/images", formData, true);
    return res;
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
        );

        if (size > 3) {
          setAlert({
            ...alert,
            status: true,
            title: "Error",
            description: "Please select image size less than 3 MB",
            className: "bg-red-100 text-red-700",
          });
          setForm({
            ...form,
            file: "",
            [e.target.name]: "",
          });
        } else {
          const res = await uploadImage(e.target.files[0]);

          setForm({
            ...form,
            file: res.data.data._id,
            [e.target.name]: res.data.data.name,
          });
        }
      } else {
        setAlert({
          ...alert,
          status: true,
          title: "Error",
          description: "type image png | jpg | jpeg",
          className: "bg-red-100 text-red-700",
        });
        setForm({
          ...form,
          file: "",
          [e.target.name]: "",
        });
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      image: form.file,
      role: form.role,
      name: form.name,
    };

    const res = await putData(`/cms/talents/${talentId}`, payload);
    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil Merubah talents ${res.data.data.name}`
        )
      );
      navigate("/talents");
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
        textSecound={"Talents"}
        urlSecound={"/talents"}
        textThird="Edit"
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
            <FormTalents
              form={form}
              isLoading={isLoading}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              edit
            />
          </div>
        </div>
      </CmsLayouts>
    </>
  );
}

export default TalentsEdit;
