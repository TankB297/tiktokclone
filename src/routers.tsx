import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForYouPage from "./pages/forYouPage/index.tsx";
import Layouts from "./layouts/index.tsx";
import { Following } from "./pages/following/index.tsx";
import { Explore } from "./pages/explore/index.tsx";

const Routers: React.FC = () => (
  <BrowserRouter>
    <Layouts>
      <Routes>
        {/* <Route path="/" element={<ForYouPage />} /> */}
        {/* <Route path="/" element={<Following />} /> */}
        <Route path="/" element={<Explore />} />
      </Routes>
    </Layouts>
  </BrowserRouter>
);

export default Routers;
