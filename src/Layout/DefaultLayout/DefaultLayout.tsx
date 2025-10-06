import Header from "../components/Header/Header.tsx";
import Sidebar from "../components/Sidebar/Sidebar.tsx";
import type {FC, ReactNode} from "react";
import styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
type DefaultLayoutProps = {
    children?: ReactNode;
}
const DefaultLayout: FC<DefaultLayoutProps> = ({children}) => {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;