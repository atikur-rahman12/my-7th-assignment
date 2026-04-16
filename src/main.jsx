import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./pages/HomePage/HomePage";
import TimeLine from "./pages/TimeLine/TimeLine";
import States from "./pages/States/States";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FriendDetails from "./pages/FriendDetails/FriendDetails";
import FrndContext from "./context/FrndContext";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
      {
        path: "/states",
        element: <States />,
      },
      {
        path: "/friendsDetails/:friendsId",
        element: <FriendDetails />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FrndContext>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </FrndContext>
  </StrictMode>,
);
