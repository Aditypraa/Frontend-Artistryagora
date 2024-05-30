import { Route, Routes } from "react-router-dom";
import PagesOrder from "../pages/orders";

export function OrdersRoute() {
  return (
    <Routes>
      <Route path="/" element={<PagesOrder />} />
    </Routes>
  );
}
