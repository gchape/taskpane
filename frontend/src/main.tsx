import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import NavBar from "./components/navbar/NavBar.tsx";
import "./index.css";
import { UserProvider } from "./features/context/UserContext.tsx";
import { NotificationsProvider } from "./features/context/NotificationContext.tsx";
import Hero from "./components/hero/Hero.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: NavBar,
    children: [
      {
        index: true,
        Component: Hero,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <NotificationsProvider>
      <RouterProvider router={router} />
    </NotificationsProvider>
  </UserProvider>,
);
