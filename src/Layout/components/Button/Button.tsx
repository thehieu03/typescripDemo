import type {
    ElementType,
    ReactNode,
    ButtonHTMLAttributes,
    AnchorHTMLAttributes
} from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import {Link} from "react-router-dom";

type ButtonProps = {
    to?: string;
    href?: string;
    children?: ReactNode;
    text?: boolean;
    primary?: boolean;
    outline?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    size?: "small" | "large";
    target?: "_self" | "_blank" | "_parent" | "_top";
    className?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    click?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>
    & AnchorHTMLAttributes<HTMLAnchorElement>;

const cx = classNames.bind(styles);

function Button({
                    to,
                    href,
                    children,
                    click,
                    text,
                    primary,
                    outline,
                    disabled,
                    rounded,
                    target,
                    size,
                    className,
                    leftIcon,
                    rightIcon,
                    ...rest
                }: ButtonProps) {
    let Comp: ElementType = "button";

    const _props: Record<string, unknown> = {

        onClick: click,
        ...rest
    };

    if (disabled) {
        Object.keys(_props).forEach(key => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }

    if (to && !disabled) {
        _props.to = to;
        Comp = Link;
    } else if (href && !disabled) {
        _props.href = href;
        if (target) {
            _props.target = target;
        }
        Comp = "a";
    }

    const classes = cx("wrapper", {primary},
        {outline},
        {[size!]: size},
        {text},
        {disabled},
        {rounded}, {
            className
        });

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx('tittle')}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
