import { Route, Routes } from "react-router-dom";
import PagesDashboard from "../pages/dashboard";

export function DashboardRoute() {
  return (
    <Routes>
      <Route path="/" element={<PagesDashboard />} />
    </Routes>
  );
}
