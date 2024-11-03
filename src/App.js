import Page404 from "./pages/Page404";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Layout from "./Layout";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./styles/style.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
