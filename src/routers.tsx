import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ForYouPage from './pages/forYouPage/index.tsx';
import Layouts from './layouts/index.tsx';
// Import other pages or components here

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layouts><ForYouPage /></Layouts>}>
        {/* <Route path='about' element={<AboutPage />} /> */}
        {/* Define more routes here */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routers;