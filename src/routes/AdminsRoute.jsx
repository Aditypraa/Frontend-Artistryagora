import { Route, Routes } from "react-router-dom";
import PagesAdmins from "../pages/admins";
import AdminsCreate from "../pages/admins/create";
import AdminsEdit from "../pages/admins/edit";

export function AdminsRoute() {
  return (
    <Routes>
      <Route path="/" element={<PagesAdmins />} />
      <Route path="/create" element={<AdminsCreate />} />
      <Route path="/edit/:adminId" element={<AdminsEdit />} />
    </Routes>
  );
}
