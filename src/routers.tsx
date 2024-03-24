import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForYouPage from "./pages/forYouPage/index.tsx";
import Layouts from "./layouts/index.tsx";

const Routers: React.FC = () => (
  <BrowserRouter>
    <Layouts>
      <Routes>
        <Route path="/" element={<ForYouPage />} />
      </Routes>
    </Layouts>
  </BrowserRouter>
);

export default Routers;
