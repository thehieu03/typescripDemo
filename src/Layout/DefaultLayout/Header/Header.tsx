import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import image from "../../../assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

const cx = classNames.bind(styles);
const Header = () => {
    return <header className={cx("wrapper")}>
        <div className={cx("inner")}>
            <div className={cx("logo")}>
                <img src={image.logo} alt="Tiktok logo"/>
            </div>
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
            <div className={cx("actions")}></div>
        </div>
    </header>;
};
export default Header;
