import "./App.css";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="service" element={<Service />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
