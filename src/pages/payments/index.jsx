import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { deleteData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";
import { accessPayments } from "../../constants/access";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import Button from "../../components/Elements/Button";
import Alert from "../../components/Elements/Alert";
import TableFragments from "../../components/Fragments/TableFragments";
import { useEffect, useState } from "react";
import { fetchPayments } from "../../redux/payments/actions";
import { IoMdAddCircle } from "react-icons/io";

function PagesPayments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const payments = useSelector((state) => state.payments);

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

    Object.keys(accessPayments).forEach(function (key) {
      if (accessPayments[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });

    setAccess(access);
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchPayments());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan Data yang anda hapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/cms/payments/${id}`);
        dispatch(
          setNotif(
            true,
            "success",
            `Metode pembayaran "${res.data.data.type}" Berhasil dihapus`
          )
        );
        dispatch(fetchPayments());
      }
    });
  };

  return (
    <>
      <CmsLayouts>
        <Breadcrumbs textSecound={"Payments"} />
        <div className="mb-3">
          {access.tambah && (
            <Button
              className={
                "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              }
              onClick={() => navigate("/payments/create")}
            >
              <IoMdAddCircle className="w-6 h-6 fill-current inline-block" />
              <span> Tambah</span>
            </Button>
          )}
        </div>

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
              status={payments?.status} // Optional chaining
              thead={["Type", "Avatar", "Aksi"]}
              data={payments?.data || []} // Default value if data is undefined
              tbody={["type", "avatar"]}
              editUrl={access.edit ? `/payments/edit` : null}
              deleteAction={access.hapus ? (id) => handleDelete(id) : null}
              withoutPagination
            />
          </div>
        </div>
      </CmsLayouts>
    </>
  );
}

export default PagesPayments;
