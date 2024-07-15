import React from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import History from "./Components/History";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/history/:id" element={<History />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
