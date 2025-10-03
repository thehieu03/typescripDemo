import type {ElementType, ReactNode} from "react";
import classNames from "classnames/bind";
import styles from './Button.module.scss';

type ButtonProps = {
    to: string;
    href: string;
    children?: ReactNode;
    click?: () => void;
};

const cx = classNames.bind(styles);

function Button(props: ButtonProps) {
    const Comp: ElementType = props.href ? 'a' : 'button';

    const classes = cx('wrapper');

    return (
        <Comp className={classes}>
            <span>{props.children}</span>
        </Comp>
    );
}

export default Button;
