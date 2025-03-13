import MainPage from "@/pages/main/MainPage";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
  },
]);
