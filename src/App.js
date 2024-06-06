import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import EventsPage from "./pages/AllEvents/AllEvents";

function App() {
  const Layout = () => {
    return (
      <div>
        <div> <Navbar /></div>
       
        <div><Outlet /></div>
        
        <div><Footer /></div>
        
      </div>
    );
  };

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/events",
            element: <EventsPage />,
          }
        ],
      },
    ],
    // { basename: "/Ack-Church" }
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;