import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "../components/Add";
import Devices from "../components/Devices";

const deviceRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Devices />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default deviceRoute;
