import React from "react";

import Home from "./components/Home";
import About from "./components/About";
import References from "./components/References";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App;
