import "./App.css";
import "./assets/css/style.css";
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Routes,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";

//Import Page

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
