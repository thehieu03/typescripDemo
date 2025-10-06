import type {Items} from "../../../../Models/Items.tsx";
import type {FC} from "react";
import Button from "../../Button/Button.tsx";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);
type MenuItemProps = {
    data: Items;
}
const MenuItem: FC<MenuItemProps> = ({data}) => {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>{data.title}</Button>
    );
};

export default MenuItem;