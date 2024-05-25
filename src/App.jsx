import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagesSignin from "./pages/signin";
import PagesDashboard from "./pages/dashboard";
import PagesCategories from "./pages/categories";
import CategoriesCreate from "./pages/categories/create";
import CategoriesEdit from "./pages/categories/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<PagesSignin />} />
        <Route path="/" element={<PagesDashboard />} />
        <Route path="/categories" element={<PagesCategories />} />
        <Route path="/categories/create" element={<CategoriesCreate />} />
        <Route path="/categories/edit/:id" element={<CategoriesEdit />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
