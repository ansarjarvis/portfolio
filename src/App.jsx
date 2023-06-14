import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

let App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
    },
  ]);
  return (
    <>
      <div className=" relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
};
export default App;
