import { Navigate, Route, Routes } from "react-router-dom";
import GuestOnlyRoute from "../components/Elements/GuestOnlyRoute";
import GuardRoute from "../components/Elements/GuardRoute";
import PagesSignin from "../pages/signin";
import { Navbar } from "../components/Fragments/Navbar";
import { DashboardRoute } from "./DashboardRoute";
import { CategoriesRoute } from "./CategoriesRoute";
import { TalentsRoute } from "./TalentsRoute";
import { PaymentsRoute } from "./PaymentsRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="signin"
        element={
          <GuestOnlyRoute>
            <PagesSignin />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <GuardRoute />
          </>
        }
      >
        <Route path="dashboard/*" element={<DashboardRoute />} />
        <Route path="categories/*" element={<CategoriesRoute />} />
        <Route path="talents/*" element={<TalentsRoute />} />
        <Route path="payments/*" element={<PaymentsRoute />} />
        {/* <Route path="events/*" element={<EventsRoute />} /> */}
        {/* <Route path="orders/*" element={<OrdersRoute />} /> */}
        <Route path="" element={<Navigate to="/dashboard" replace={true} />} />
      </Route>
    </Routes>
  );
}
