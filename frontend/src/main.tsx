import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import NavBar from "./components/navbar/NavBar.tsx";
import { UserProvider } from "./features/context/UserContext.tsx";
import { NotificationsProvider } from "./features/context/NotificationContext.tsx";
import SignIn from "./components/sign/SignIn.tsx";
import "./index.css";
import Home from "./components/home/Home.tsx";
import RegisterForm from "./components/register/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: NavBar,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: RegisterForm,
      },
      {
        path: "/about",
      },
      {
        path: "/contact",
      },
      {
        path: "/docs",
      },
    ],
  },
  {
    path: "/get-started",
    Component: SignIn,
  },
]);

createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <NotificationsProvider>
      <RouterProvider router={router} />
    </NotificationsProvider>
  </UserProvider>,
);
