import { Route, Routes } from "react-router-dom";
import PagesEvents from "../pages/events";
import EventsCreate from "../pages/events/create";
import EventsEdit from "../pages/events/edit";

export function EventsRoute() {
  return (
    <Routes>
      <Route path="/" element={<PagesEvents />} />
      <Route path="/create" element={<EventsCreate />} />
      <Route path="/edit/:eventId" element={<EventsEdit />} />
    </Routes>
  );
}
