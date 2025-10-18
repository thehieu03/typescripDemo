import classNames from "classnames/bind";
import styles from "./SuggestedAccount.module.scss";
import type {FC} from "react";
import AccountItem from "./AccountItem.tsx";
const cx = classNames.bind(styles);
type SuggestedAccountProps = {
    label: string;
}
const SuggestedAccount:FC<SuggestedAccountProps> = ({label}) => {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem/>
        </div>
    );
};

export default SuggestedAccount;
