import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import image from "../../../assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {useEffect, useState} from "react";
import {Wrapper as PopperWrapper} from "../../Popper";
import AccountItem from "../../AccountItem/AccountItem.tsx";
import Button from "../../Button/Button.tsx";

const cx = classNames.bind(styles);
const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 1000)
    });
    return <header className={cx("wrapper")}>
        <div className={cx("inner")}>
            <div className={cx("logo")}>
                <img src={image.logo} alt="Tiktok logo"/>
            </div>
            <Tippy
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
            </Tippy>
            <div className={cx("actions")}>
                <Button text={true}>
                    Upload
                </Button>
                <Button leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass}/>} rounded={true} primary={true}
                        className={cx('custom-login')}>
                    Login
                </Button>

            </div>
        </div>
    </header>;
};
export default Header;
