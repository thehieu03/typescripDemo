import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}
                 src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4d7990bd8620d8d85c3f012ec2c168ba~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=a5ed9a76&x-expires=1759622400&x-signature=k62FAgNb%2B%2BpY95LpEYRXvdVT9ik%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                 alt="Image"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>nguyen van a
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('userName')}>
                    nguyen_van_a
                </span>
            </div>
        </div>
    );
};

export default AccountItem;