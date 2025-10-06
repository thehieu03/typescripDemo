import classNames from "classnames/bind";
import style from "./Popper.module.scss";
import React, {type FC} from "react";

const cx = classNames.bind(style);
type WrapperProps = {
    children: React.ReactNode,
    className?: string
}
const Wrapper: FC<WrapperProps> = ({children, className}) => {
    return (
        <div className={cx("wrapper", className)}>
            {children}
        </div>
    );
};

export default Wrapper;