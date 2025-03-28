import ImagesContainer from "@/pages/main/components/common/image/ImagesContainer";
import MainPage from "@/pages/main/MainPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
    children: [
      { index: true, Component: ImagesContainer },
      { path: ":search", Component: ImagesContainer },
    ],
  },
]);
