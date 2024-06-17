import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchEvents,
  setCategory,
  setKeyword,
  setTalent,
} from "../../redux/events/actions";
import {
  fetchListCategories,
  fetchListTalents,
} from "../../redux/list/actions";
import Swal from "sweetalert2";
import { deleteData, putData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Button from "../../components/Elements/Button";
import SearchInput from "../../components/Elements/SearchInput";
import SelectBox from "../../components/Elements/SelectBox";
import TableFragments from "../../components/Fragments/TableFragments";
import Alert from "../../components/Elements/Alert";
import { accessEvents } from "../../constants/access";
import { IoMdAddCircle } from "react-icons/io";

function PagesEvents() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const events = useSelector((state) => state.events);
  const lists = useSelector((state) => state.lists);

  const [access, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    const access = { tambah: false, hapus: false, edit: false };

    Object.keys(accessEvents).forEach(function (key) {
      if (accessEvents[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });

    setAccess(access);
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch, events.keyword, events.category, events.talent]);

  useEffect(() => {
    dispatch(fetchListTalents());
    dispatch(fetchListCategories());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/cms/events/${id}`);

        dispatch(
          setNotif(
            true,
            "success",
            `berhasil hapus speaker ${res.data.data.title}`
          )
        );

        dispatch(fetchEvents());
      }
    });
  };

  const handleChangeStatus = (id, status) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Ubah Status",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const payload = {
          statusEvent: status === "Published" ? "Draft" : "Published",
        };
        const res = await putData(`/cms/events/${id}/status`, payload);

        dispatch(
          setNotif(
            true,
            "success",
            `berhasil ubah status event ${res.data.data.title}`
          )
        );

        dispatch(fetchEvents());
      }
    });
  };

  return (
    <>
      <CmsLayouts>
        <Breadcrumbs textSecound={"Events"} />
        <div className="mb-3">
          {access.tambah && (
            <Button
              className={
                "px-4 py-2 from-[#4f5de2] to-[#0025f5] hover:shadow-[#6025F5]/50"
              }
              onClick={() => navigate("/events/create")}
            >
              <IoMdAddCircle className="w-6 h-6 fill-current inline-block" />
              <span> Tambah</span>
            </Button>
          )}
        </div>

        {/* Select Box */}
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3 md:w-1/3">
            <SearchInput
              name="keyword"
              query={events.keyword}
              handleChange={(e) => dispatch(setKeyword(e.target.value))}
            />
          </div>
          <div className="w-full px-3 md:w-1/3">
            <SelectBox
              placeholder={"Masukan pencarian kategori"}
              name="category"
              value={events.category}
              options={lists.categories}
              isClearable={true}
              handleChange={(e) => dispatch(setCategory(e))}
            />
          </div>
          <div className="w-full px-3 md:w-1/3">
            <SelectBox
              placeholder={"Masukan pencarian pembicara"}
              name="talents"
              value={events.talent}
              options={lists.talents}
              isClearable={true}
              handleChange={(e) => dispatch(setTalent(e))}
            />
          </div>
        </div>
        {/* Select Box */}

        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            {notif.status && (
              <Alert
                title={notif.typeNotif}
                description={notif.message}
                className={"bg-green-400 text-black"}
              />
            )}
            <TableFragments
              status={events.status}
              thead={[
                "Judul",
                "Tanggal",
                "Lokasi",
                "Status Event",
                "Kategori",
                "Talent",
                "Aksi",
              ]}
              data={events.data}
              tbody={[
                "title",
                "date",
                "venueName",
                "statusEvent",
                "categoryName",
                "talentName",
              ]}
              editUrl={access.edit ? `/events/edit` : null}
              deleteAction={access.hapus ? (id) => handleDelete(id) : null}
              customAction={(id, status = "") => {
                return (
                  <Button
                    className="px-4 py-2 from-[#4f5de2] to-[#0025f5] hover:shadow-[#6025F5]/50"
                    onClick={() => handleChangeStatus(id, status)}
                  >
                    Change Status
                  </Button>
                );
              }}
              withoutPagination
            />
          </div>
        </div>
      </CmsLayouts>
    </>
  );
}

export default PagesEvents;
