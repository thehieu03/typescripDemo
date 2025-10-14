// Layout
import {DefaultLayout, HeaderOnly} from "../Layout";
// public routes
import Following from "../pages/Following/Following.tsx";
import {type FC, type ReactNode} from "react";
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
        path: "/",
        element: <Home/>,
        layout: DefaultLayout
    },
    {
        path: "/following",
        element: <Following/>,
        layout: DefaultLayout
    },
    {
        path: "/profile",
        element: <Profile/>,
        layout: DefaultLayout
    }, {
        path: 'upload',
        element: <Upload/>,
        layout: HeaderOnly
    }
];
// private routes
const privateRoutes: string[] = [];
export {publicRoutes, privateRoutes};
