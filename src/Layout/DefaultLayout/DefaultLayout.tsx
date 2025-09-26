import Header from "./Header/Header.tsx";
import Sidebar from "./Sidebar/Sidebar.tsx";
import type {FC, ReactNode} from "react";

type DefaultLayoutProps = {
    children?: ReactNode;
}
const DefaultLayout: FC<DefaultLayoutProps> = ({children}) => {
    return (
        <div>
            <Header/>
            <div className="container">
                <Sidebar/>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;