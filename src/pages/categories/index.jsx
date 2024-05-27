import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/categories/actions";
import Swal from "sweetalert2";
import { deleteData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";
import { accessCategories } from "../../constants/access";
import CmsLayouts from "../../components/Layouts/CmsLayouts";
import Breadcrumbs from "../../components/Elements/Breadcrumbs/Breadcrumbs";
import Button from "../../components/Elements/Button";
import Alert from "../../components/Elements/Alert";
import TableFragments from "../../components/Fragments/TableFragments";
import { useEffect, useState } from "react";

function PagesCategories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const categories = useSelector((state) => state.categories);
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
    Object.keys(accessCategories).forEach(function (key) {
      if (accessCategories[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
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
        const res = await deleteData(`/cms/categories/${id}`);
        dispatch(
          setNotif(
            true,
            "success",
            `berhasil hapus kategori dengan nama : "${res.data.data.name}"`
          )
        );
        dispatch(fetchCategories());
      }
    });
  };

  return (
    <>
      <Breadcrumbs textSecound={"Categories"} />
      <CmsLayouts>
        <section className="container mx-auto p-6">
          <div className="mb-3">
            {access.tambah && (
              <Button
                className={
                  "px-4 py-2 from-[#4f5de2] to-[#0025f5] hover:shadow-[#6025F5]/50"
                }
                onClick={() => navigate("/categories/create")}
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
                status={categories?.status} // Optional chaining
                thead={["Nama", "Aksi"]}
                data={categories?.data || []} // Default value if data is undefined
                tbody={["name"]}
                editUrl={access.edit ? `/categories/edit` : null}
                deleteAction={access.hapus ? (id) => handleDelete(id) : null}
                withoutPagination
              />
            </div>
          </div>
        </section>
      </CmsLayouts>
    </>
  );
}

export default PagesCategories;
