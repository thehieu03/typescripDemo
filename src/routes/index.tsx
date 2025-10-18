// Layout
import { DefaultLayout, HeaderOnly } from "../Layout";
// public routes
import Following from "../pages/Following/Following.tsx";
import { type FC, type ReactNode } from "react";
import Home from "../pages/Home/Home.tsx";
import Profile from "../pages/Profile/Profile.tsx";
import Upload from "../pages/Upload/Upload.tsx";
import config from "../config";

type AppRoute = {
  path: string;
  element: ReactNode;
  layout: FC<{ children?: ReactNode }>;
};
const publicRoutes: AppRoute[] = [
  {
    path: config.routes.home,
    element: <Home />,
    layout: DefaultLayout,
  },
  {
    path: config.routes.following,
    element: <Following />,
    layout: DefaultLayout,
  },
  {
    path:config.routes.upload,
    element: <Upload />,
    layout: HeaderOnly,
  },
  {
    path: config.routes.profile,
    element: <Profile />,
    layout: DefaultLayout,
  },
];
// private routes
const privateRoutes: string[] = [];
export { publicRoutes, privateRoutes };
