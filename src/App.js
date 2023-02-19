import "@picocss/pico";
import './App.css';
import './utils/typewriter';
import React from "react";
import Nav from "./components/Nav/Nav";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainPage from './components/MainPage/MainPage';
import Projects from "./components/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/projects",
    element: <Projects/>
  }
]);

function App() {
  return (
    <div className="App">
      <Nav/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
