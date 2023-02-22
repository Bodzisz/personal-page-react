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
  console.log(process.env.REACT_APP_PUBLIC_URL);
  console.log(process.env.NODE_ENV);
  return (
    <div className="App" style={{"--bckground":`linear-gradient(rgba(0,0,0), rgba(0,0,0,0.7)), 
    url( ${require(`${process.env.REACT_APP_PUBLIC_URL}/images/background2.jpg`)}) no-repeat center center fixed`}}>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
