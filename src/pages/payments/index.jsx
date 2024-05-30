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
      <Breadcrumbs textSecound={"Payments"} />
      <CmsLayouts>
        <div className="mb-3">
          {access.tambah && (
            <Button
              className={
                "px-4 py-2 from-[#4f5de2] to-[#0025f5] hover:shadow-[#6025F5]/50"
              }
              onClick={() => navigate("/payments/create")}
            >
              Tambah
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
