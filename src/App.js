import "@picocss/pico";
import "./App.css";
import "./utils/typewriter";
import React from "react";
import Nav from "./components/Nav/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div className="App">
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
