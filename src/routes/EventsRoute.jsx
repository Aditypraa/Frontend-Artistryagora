import { Route, Routes } from "react-router-dom";
import PagesEvents from "../pages/events";
// import EventsCreate from "../pages/events/create";

export function EventsRoute() {
  return (
    <Routes>
      <Route path="/" element={<PagesEvents />} />
      {/* <Route path="/create" element={<EventsCreate />} /> */}
      {/* <Route path="/edit/:categoryId" element={<CategoriesEdit />} /> */}
    </Routes>
  );
}
