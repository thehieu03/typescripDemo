import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image/Image";
import type { SearchResponse } from "../../../Models/SearchResponse.tsx";
import { Link } from "react-router-dom";
import routesConfig from "../../../config/routes";

const cx = classNames.bind(styles);

interface AccountItemProps {
  data?: SearchResponse;
}

const AccountItem = ({ data }: AccountItemProps) => {
  if (!data) {
    return null;
  }

  return (
    <Link
      to={routesConfig.profile.replace(":nickname", data.nickname)}
      className={cx("wrapper")}
    >
      <Image className={cx("avatar")} src={data.avatar} alt="Image" />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          {data.full_name}
          {data.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </h4>
        <span className={cx("userName")}>{data.nickname}</span>
      </div>
    </Link>
  );
};

export default AccountItem;
