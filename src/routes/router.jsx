import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import UpdateImage from "../components/UpdateImage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup/create-account",
      element: <SignUp />,
    },
    {
      path: "/signup/update-img-location",
      element: <UpdateImage />,
    },
    {
      path: "/signup/choose-options",
      element: <div>Choose a option</div>,
    },
    {
      path: "/signup/verify-email",
      element: <div>Verify email</div>,
    },
  ]);