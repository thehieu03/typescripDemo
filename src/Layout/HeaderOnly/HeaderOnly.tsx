import Header from "../../components/Header/Header.tsx";
import type {FC, ReactNode} from "react";

type HeaderOnlyProps = {
    children?: ReactNode;
}

const HeaderOnly: FC<HeaderOnlyProps> = ({children}) => {
    return (
        <div>
            <Header/>
            <div style={{marginTop: 'var(--default-layout-header-height)'}}>
                {children}
            </div>
        </div>
    );
};

export default HeaderOnly;