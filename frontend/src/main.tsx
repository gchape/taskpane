import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import NavBar from "./components/navbar/NavBar.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: NavBar,
    index: true,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
