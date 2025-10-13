import { forwardRef, type ImgHTMLAttributes } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  return <img ref={ref} {...props} />;
});

Image.displayName = "Image";

export default Image;
