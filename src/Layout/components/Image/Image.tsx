import {forwardRef} from "react";

function Image({...props}) {
    return <img {...props}/>;
}

export default forwardRef(Image);