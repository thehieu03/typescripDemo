import type {FC, ReactNode} from "react";
import {Wrapper as PopperWrapper} from "../index.tsx";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem.tsx";
import type {Items} from "../../../../Models/Items.tsx";

const cx = classNames.bind(styles);

type MenuProps = {
    children: ReactNode;
    item: Items[];
}

const Menu: FC<MenuProps> = ({children, item}) => {
    const renderItem = () => {
        return item.map((item, index) => (
            <MenuItem key={index} data={item}/>
        ));
    }
    return (
        <Tippy interactive={true}
               visible={true}
               placement="bottom-end"
               render={attrs => (
                   <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                       <PopperWrapper>
                           {renderItem()}
                       </PopperWrapper>
                   </div>
               )}>
            <button className={cx('more-btn')}>
                {children}
            </button>
        </Tippy>
    );
};

export default Menu;