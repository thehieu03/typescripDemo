import {forwardRef, type ImgHTMLAttributes} from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {

}

const Image = forwardRef<HTMLImageElement, ImageProps>(
    (props, ref) => {
        return <img ref={ref} {...props} />;
    }
);

Image.displayName = 'Image';

export default Image;