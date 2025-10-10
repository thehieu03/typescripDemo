import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import type {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

interface HeaderMenuProps {
    title?: string;
    onBack?: () => void;
}

// tittle onBack
const HeaderMenu: FC<HeaderMenuProps> = ({title, onBack}) => {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <h4 className={cx('header-tittle')}>{title}</h4>
        </header>
    );
};

export default HeaderMenu;