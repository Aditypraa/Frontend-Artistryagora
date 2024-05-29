import { Route, Routes } from "react-router-dom";
import PagesPayments from "../pages/payments";
import PaymentsCreate from "../pages/payments/create";
import PaymentsEdit from "../pages/payments/edit";

export function PaymentsRoute() {
  return (
    <Routes>
      <Route path="/" element={<PagesPayments />} />
      <Route path="/create" element={<PaymentsCreate />} />
      <Route path="/edit/:paymentsId" element={<PaymentsEdit />} />
    </Routes>
  );
}
