import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import image from "../../../assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard, faMessage
} from "@fortawesome/free-solid-svg-icons";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {useEffect, useState} from "react";
import {Wrapper as PopperWrapper} from "../Popper";
import AccountItem from "../AccountItem/AccountItem.tsx";
import Button from "../Button/Button.tsx";
import Menu from "../Popper/Menu/Menu.tsx";
import type {Items} from "../../../Models/Items.tsx";
import {PhoneIcon} from "../Icons/Index.tsx";

const cx = classNames.bind(styles);
const MENU_ITEMS: Items[] = [{
    icon: <FontAwesomeIcon icon={faEarthAsia}/>,
    title: 'English',
    children: {
        title: 'Language',
        data: [
            {
                title: 'English',
                code: 'en'
            },
            {
                title: 'Tiếng Việt',
                code: 'vi'
            }
        ]
    }
}, {
    icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
    title: 'Feedback and help',
    to: '/feedback'
}, {
    icon: <FontAwesomeIcon icon={faKeyboard}/>,
    title: 'Keyboard shortcuts'
}
]
const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 1000)
    });
    // handle menu change
    const handleMenuChange = (menuItem: Items) => {
        switch (menuItem.code) {
            case 'en':
                break;
            case 'vi':
                break;
            default:
                break;
        }
    }
    const stateLogin = true;
    return <header className={cx("wrapper")}>
        <div className={cx("inner")}>
            <div className={cx("logo")}>
                <img src={image.logo} alt="Tiktok logo"/>
            </div>
            <div>
                <TippyHeadless
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-tittle')}>Accounts</h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input placeholder="Search account and video..." spellCheck={false}/>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        {/*loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>

                    </div>
                </TippyHeadless>
            </div>
            <div className={cx("actions")}>
                {stateLogin == true ? (
                    <>
                        <Tippy delay={[0, 200]} content='Upload' placement='bottom'>
                            <button className={cx('button-btn')}>
                                <PhoneIcon/>
                            </button>
                        </Tippy>
                        <button className={cx('button-btn')}>
                            <FontAwesomeIcon icon={faMessage}/>
                        </button>
                    </>
                ) : (
                    <>
                        <Button text={true}>
                            Upload
                        </Button>
                        <Button primary={true}
                                className={cx('custom-login')}>
                            Login
                        </Button>
                    </>

                )}

                <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                    {stateLogin == true ? (<>
                    </>) : (<>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                    </>)}
                </Menu>

            </div>
        </div>
    </header>;
};
export default Header;
