import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagesSignin from "./pages/signin";
import PagesDashboard from "./pages/dashboard";
import PagesCategories from "./pages/categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<PagesSignin />} />
        <Route path="/" element={<PagesDashboard />} />
        <Route path="categories" element={<PagesCategories />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
