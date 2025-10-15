// Layout
import { DefaultLayout, HeaderOnly } from "../Layout";
import routesConfig from "../config/routes";
// public routes
import Following from "../pages/Following/Following.tsx";
import { type FC, type ReactNode } from "react";
import Home from "../pages/Home/Home.tsx";
import Profile from "../pages/Profile/Profile.tsx";
import Upload from "../pages/Upload/Upload.tsx";

type AppRoute = {
  path: string;
  element: ReactNode;
  layout: FC<{ children?: ReactNode }>;
};
const publicRoutes: AppRoute[] = [
  {
    path: routesConfig.home,
    element: <Home />,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.following,
    element: <Following />,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.upload,
    element: <Upload />,
    layout: HeaderOnly,
  },
  {
    path: "/@:nickname",
    element: <Profile />,
    layout: DefaultLayout,
  },
  {
    path: routesConfig.profile,
    element: <Profile />,
    layout: DefaultLayout,
  },
];
// private routes
const privateRoutes: string[] = [];
export { publicRoutes, privateRoutes };
