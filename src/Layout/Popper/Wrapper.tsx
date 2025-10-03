import classNames from "classnames/bind";
import style from "./Popper.module.scss";
import React, {type FC} from "react";

const cx = classNames.bind(style);
type WrapperProps = {
    children: React.ReactNode
}
const Wrapper: FC<WrapperProps> = ({children}) => {
    return (
        <div className={cx("wrapper")}>
            {children}
        </div>
    );
};

export default Wrapper;