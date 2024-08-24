import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import EventsPage from "./pages/AllEvents/AllEvents";
import KamaPage from "./pages/Ministries/Kama/Kama";
import MuPage from "./pages/Ministries/MU/MothersUnion";
import PraiseTeamPage from "./pages/Ministries/PraiseTeam/PraiseTeam";
import ChoirPage from "./pages/Ministries/Choir/Choir";
import YouthPage from "./pages/Ministries/Youth/Youth";
import ChildrenMinistryPage from "./pages/Ministries/Children/Children ";
import GetInvolved from "./pages/GetInvolved/GetInvolved";

function App() {
  const Layout = () => {
    return (
      <div>
        <div>
          {" "}
          <Navbar />
        </div>

        <div>
          <Outlet />
        </div>

        <div>
          <Footer />
        </div>
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
              {
                path: "/ministries/children-ministry",
                element: <ChildrenMinistryPage />,
              },
              {
                path: "/ministries/Kama",
                element: <KamaPage />,
              },
              {
                path: "/ministries/MothersUnion",
                element: <MuPage />,
              },
              {
                path: "/ministries/PraiseTeam",
                element: <PraiseTeamPage />,
              },
              {
                path: "/ministries/Choir",
                element: <ChoirPage />,
              },
            ],
          },
          {
            path: "/get-involved",
            element: <GetInvolved />,
          },
        ],
      },
    ]
    // { basename: "/Ack-Church" }
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
