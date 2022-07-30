import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Services from "../Services/Services";

const Layout = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default Layout;
