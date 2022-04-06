import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HotelPage from "./views/HotelPage/HotelPage";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path='hotel/:id' element={ <HotelPage />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
