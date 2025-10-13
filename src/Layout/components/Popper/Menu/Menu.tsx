import {type FC, type ReactElement, useState} from "react";
import {Wrapper as PopperWrapper} from "../index.tsx";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import type {Items} from "../../../../Models/Items.tsx";
import MenuItem from "./MenuItem.tsx";
import HeaderMenu from "./HeaderMenu.tsx";

const cx = classNames.bind(styles);

type MenuProps = {
    children: ReactElement,
    items?: Items[],
    onChange?: (menuItem: Items) => void
}

const Menu: FC<MenuProps> = ({children, items, onChange}) => {
    const [history, setHistory] = useState([{data: items}]);
    const current = history[history.length - 1];
    const renderItems = (): ReactElement[] | null => {
        if (!current.data || current.data.length == 0) return null;
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent && item.children) {
                            setHistory(prev => [...prev, item.children!]);
                        } else {
                            onChange?.(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive={true}
            delay={[0, 500]}
            placement="bottom-end"
            render={attrs => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <HeaderMenu title='Language' onBack={() => {
                            setHistory(prevState => prevState.slice(0, prevState.length - 1));
                        }}/>}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory(prevState => prevState.slice(0, 1))
            }}
        >
            {children}
        </Tippy>
    );
};

export default Menu;