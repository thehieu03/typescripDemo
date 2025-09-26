import Header from "./Header/Header.tsx";
import Sidebar from "./Sidebar/Sidebar.tsx";
import type {FC, ReactNode} from "react";

type DefaultLayoutProps = {
    children?: ReactNode;
}
const DefaultLayout: FC<DefaultLayoutProps> = ({children}) => {
    return (
        <div className="wrapper flex flex-col w-full
        items-center">
            <Header/>
            <div className="w-[var(--default-layout-width)] bg-[#333] flex ">
                <Sidebar/>
                <div className='flex-1 bg-[#cdc] min-h[1000px]'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;