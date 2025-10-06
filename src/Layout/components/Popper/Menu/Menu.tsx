import {type FC, type ReactElement} from "react";
import {Wrapper as PopperWrapper} from "../index.tsx";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import type {Items} from "../../../../Models/Items.tsx";
import MenuItem from "./MenuItem.tsx";

const cx = classNames.bind(styles);

type MenuProps = {
    children: ReactElement,
    items?: Items[]
}

const Menu: FC<MenuProps> = ({children, items}) => {
    const renderItems = (): ReactElement[] | null => {
        if (!items || items.length === 0) return null;
        return items.map((item, index) => (
            <MenuItem data={item} key={index}/>
        ));
    }
    return (
        <Tippy
            interactive={true}
            visible={true}
            placement="bottom-end"
            render={attrs => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;