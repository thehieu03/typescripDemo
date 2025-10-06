import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import type {Items} from "../../../../Models/Items.tsx";
import Button from "../../Button/Button.tsx";

const cx = classNames.bind(styles);

interface MenuItemProps {
    data?: Items
}

const MenuItem = ({data}: MenuItemProps) => {
    return (
        <Button className={cx('menu-item')} leftIcon={data?.icon} to={data?.to}>{data?.title}</Button>
    );
};

export default MenuItem;