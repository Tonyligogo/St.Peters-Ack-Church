import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import EventsPage from "./pages/AllEvents/AllEvents";
import YouthPage from "./pages/Ministries/Youth/Youth";
import GetInvolved from "./pages/GetInvolved/GetInvolved";

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
          },
          {
            path: "/ministries",
            children: [
              {
                path: "/ministries/youth-ministry",
                element: <YouthPage />,
              },
            ]
          },
          {
            path: "/get-involved",
            element: <GetInvolved/>,
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