import type {FC, ReactElement} from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
type MenuItemsProps = {
    tittle:string;
    to:string;
    icon:ReactElement;
}
const cx = classNames.bind(styles);
const MenuItems:FC<MenuItemsProps> = ({tittle,to,icon}) => {
    return (
        <NavLink className={(nav)=>cx('menu-items',{active:nav.isActive})} to={to} >
            {icon}
            <span  className={cx('tittle')}>{tittle}</span>
        </NavLink>
    );
};

export default MenuItems;