import { BrowserRouter, Routes, Route, useRouteError } from "react-router-dom";
import Navbar from "../components/NavBar";
import Home from "../pages/Home";
import EditUsers from "../pages/EditUsers";
import AddUsers from "../pages/AddUsers";
import ViewUsers from "../pages/ViewUsers";

const Routing = () => {
  // const error = useRouteError();
  // console.error("Route Error: ", error);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="edit/:id" element={<EditUsers />} />
        <Route path="add" element={<AddUsers />} />
        <Route path="view/:id" element={<ViewUsers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
