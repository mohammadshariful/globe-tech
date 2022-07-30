import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Layout;
