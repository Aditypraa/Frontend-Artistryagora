import { useEffect, useState } from "react";
import { getData, postData, putData } from "../../utils/fetch";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNotif } from "../../redux/notif/actions";
import {
  fetchListCategories,
  fetchListTalents,
} from "../../redux/list/actions";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import EventsForm from "./form";
import Alert from "../../components/Elements/Alert";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import moment from "moment";

function EventsEdit() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const [form, setForm] = useState({
    title: "",
    price: "",
    date: "",
    file: "",
    avatar: "",
    about: "",
    venueName: "",
    tagline: "",
    keyPoint: [""],
    tickets: [
      {
        type: "",
        statusTicketCategories: "",
        stock: "",
        price: "",
      },
    ],
    category: "",
    talent: "",
    stock: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    title: "",
    description: "",
    className: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const fetchOneEvents = async () => {
    const res = await getData(`/cms/events/${eventId}`);

    setForm({
      ...form,
      title: res.data.data.title,
      date: moment(res.data.data.date).format("YYYY-MM-DDTHH:SS"),
      file: res.data.data.image._id,
      avatar: res.data.data.image.name,
      about: res.data.data.about,
      venueName: res.data.data.venueName,
      tagline: res.data.data.tagline,
      keyPoint: res.data.data.keyPoint,
      category: {
        label: res?.data?.data?.category?.name,
        target: { name: "category", value: res?.data?.data?.category?._id },
        value: res?.data?.data?.category?._id,
      },
      talent: {
        label: res?.data?.data?.talent?.name,
        target: { name: "talent", value: res?.data?.data?.talent?._id },
        value: res?.data?.data?.talent?._id,
      },
      tickets: res.data.data.tickets,
    });
  };

  useEffect(() => {
    fetchOneEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchListTalents());
    dispatch(fetchListCategories());
  }, [dispatch]);

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
          title: "danger",
          description: "type image png | jpg | jpeg",
          className: "bg-red-100 text-red-700",
        });
        setForm({
          ...form,
          file: "",
          [e.target.name]: "",
        });
      }
    } else if (e.target.name === "category" || e.target.name === "talent") {
      console.log("e.target.name");
      console.log(e.target.name);
      setForm({ ...form, [e.target.name]: e });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      date: form.date,
      image: form.file,
      title: form.title,
      price: form.price,
      about: form.about,
      venueName: form.venueName,
      tagline: form.tagline,
      keyPoint: form.keyPoint,
      category: form.category.value,
      talent: form.talent.value,
      statusTicketCategories: form.statusTicketCategories,
      tickets: form.tickets,
    };

    const res = await putData(`/cms/events/${eventId}`, payload);

    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil Merubah events ${res.data.data.title}`
        )
      );
      navigate("/events");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        title: "danger",
        description: res.response.data.msg,
        className: "bg-red-100 text-red-700",
      });
    }
  };

  const handleChangeKeyPoint = (e, i) => {
    let _temp = [...form.keyPoint];

    _temp[i] = e.target.value;

    setForm({ ...form, keyPoint: _temp });
  };

  const handlePlusKeyPoint = () => {
    let _temp = [...form.keyPoint];
    // console.log("_temp1");
    // console.log(_temp);
    _temp.push("");
    // console.log("_temp2");
    // console.log(_temp);

    setForm({ ...form, keyPoint: _temp });
  };

  const handleMinusKeyPoint = (index) => {
    let _temp = [...form.keyPoint];
    let removeIndex = _temp
      .map(function (_, i) {
        return i;
      })
      .indexOf(index);

    _temp.splice(removeIndex, 1);
    setForm({ ...form, keyPoint: _temp });
  };

  const handlePlusTicket = () => {
    let _temp = [...form.tickets];
    _temp.push({
      type: "",
      statusTicketCategories: "",
      stock: "",
      price: "",
    });

    setForm({ ...form, tickets: _temp });
  };
  const handleMinusTicket = (index) => {
    let _temp = [...form.tickets];
    let removeIndex = _temp
      .map(function (_, i) {
        return i;
      })
      .indexOf(index);

    _temp.splice(removeIndex, 1);
    setForm({ ...form, tickets: _temp });
  };

  const handleChangeTicket = (e, i) => {
    let _temp = [...form.tickets];

    _temp[i][e.target.name] = e.target.value;

    setForm({ ...form, tickets: _temp });
  };

  return (
    <>
      <CmsLayouts>
        <Breadcrumbs
          textSecound={"Events"}
          urlSecound={"/events"}
          textThird="Edit"
        />
        {alert.status && (
          <Alert
            title={alert.title}
            description={alert.description}
            className={alert.className}
          />
        )}
        <EventsForm
          form={form}
          isLoading={isLoading}
          lists={lists}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleChangeKeyPoint={handleChangeKeyPoint}
          handlePlusKeyPoint={handlePlusKeyPoint}
          handleMinusKeyPoint={handleMinusKeyPoint}
          handlePlusTicket={handlePlusTicket}
          handleMinusTicket={handleMinusTicket}
          handleChangeTicket={handleChangeTicket}
          edit
        />
      </CmsLayouts>
    </>
  );
}

export default EventsEdit;
