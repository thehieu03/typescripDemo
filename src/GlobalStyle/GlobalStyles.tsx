import React, {type ReactNode} from 'react';
import "./GlobalStyles.scss";

type GlobalStyleProps = {
    children: ReactNode;
}
const GlobalStyles: React.FC<GlobalStyleProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default GlobalStyles;