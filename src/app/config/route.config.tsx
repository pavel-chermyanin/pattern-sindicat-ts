import {createBrowserRouter} from "react-router-dom";

import {Auth} from "@pages/Auth.tsx";
import {Home} from "@pages/mainLayout/home";
import {Main} from "@pages/mainLayout/main";
import {Report} from "@pages/mainLayout/report/ui/Report.tsx";
import {ReportList} from "@pages/mainLayout/reportList";

import {ROUTES_PATH} from "../consts/route.paths.ts";


export const router = createBrowserRouter([
  {
    path: ROUTES_PATH.auth,
    element: <Auth/>,
    // errorElement: <ErrorPage/>,
  },
  {
    path: ROUTES_PATH.main,
    element: <Main/>,
    // errorElement: <ErrorPage/>,
    children: [
      {
        path: ROUTES_PATH.main,
        element: <Home/>,
      },
      {
        path: ROUTES_PATH.report,
        element: <Report/>,
      },
      {
        path: ROUTES_PATH.reportList,
        element: <ReportList/>,
      }
    ]
  },
]);
