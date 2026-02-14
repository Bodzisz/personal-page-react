import "./App.css";
import React from "react";
import Nav from "./components/Nav/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Books from "./components/Books/Books";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { AppShell } from "@mantine/core";
import BookReview from "./components/Books/Reviews/BookReview";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/books",
    children: [
      {
        index: true,
        element: <Books />
      },
      {
        path: ":title",
        element: <BookReview />
      }
    ]
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

function App() {
  return (
    <AppShell>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </AppShell>
  );
}

export default App;
