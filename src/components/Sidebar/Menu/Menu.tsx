import type {FC, ReactNode} from "react";

type MenuProps = {
    children: ReactNode;
}
const Menu:FC<MenuProps> = ({children}) => {
    return (
        <nav>
            {children}
        </nav>
    );
};

export default Menu;