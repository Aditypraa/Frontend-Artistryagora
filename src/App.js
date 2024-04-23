import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageSignin from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="login" element={<PageSignin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
