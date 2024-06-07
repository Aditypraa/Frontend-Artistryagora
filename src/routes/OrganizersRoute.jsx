import { Route, Routes } from "react-router-dom";
import PagesOrganizers from "../pages/organizers";
import OrganizersCreate from "../pages/organizers/create";
import OrganizersEdit from "../pages/organizers/edit";

export function OrganizersRoute() {
  return (
    <Routes>
      <Route path="/" element={<PagesOrganizers />} />
      <Route path="/create" element={<OrganizersCreate />} />
      <Route path="/edit/:organizerId" element={<OrganizersEdit />} />
    </Routes>
  );
}
