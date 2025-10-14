import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import Image from "../Image/Image";
import type {SearchResponse} from "../../../Models/SearchResponse.tsx";

const cx = classNames.bind(styles);

interface AccountItemProps {
    data?: SearchResponse
}

const AccountItem = ({data}: AccountItemProps) => {
    return (
        <div className={cx("wrapper")}>
            <Image
                className={cx("avatar")}
                src={data?.avatar}
                alt="Image"
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    {data?.full_name}
                    {data?.tick && <FontAwesomeIcon className={cx("check")} icon={faCheckCircle}/>}
                </h4>
                <span className={cx("userName")}>{data?.full_name}</span>
            </div>
        </div>
    );
};

export default AccountItem;
