import { useState } from "react";
import { getData, putData } from "../../utils/fetch";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNotif } from "../../redux/notif/actions";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import Alert from "../../components/Elements/Alert";
import FormOrganizers from "./form";

function OrganizersEdit() {
  const { organizerId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "organizer",
    organizer: "",
  });

  // Handler Alert
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

  const fetchOneUserOrganizer = async () => {
    const result = await getData(`/cms/organizers/${organizerId}`);
    setForm({
      ...form,
      name: result.data.data.name,
      email: result.data.data.email,
      password: result.data.data.password,
      confirmPassword: result.data.data.password,
      organizer: result.data.data.organizer.organizer,
    });
  };

  // STATE
  useState(() => {
    fetchOneUserOrganizer();
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);

    const res = await putData(`/cms/organizers/${organizerId}`, form);
    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil Mengedit Organizer : "${res.data.data.name}"`
        )
      );
      setIsLoading(false);
      navigate("/organizers");
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
      <CmsLayouts>
        <Breadcrumbs
          textSecound={"Organizers"}
          urlSecound={"/organizers"}
          textThird="Edit"
        />
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            {alert.status && (
              <Alert
                title={alert.title}
                description={alert.description}
                className={alert.className}
              />
            )}
            <FormOrganizers
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

export default OrganizersEdit;
