import { forwardRef, useState, type ImgHTMLAttributes } from "react";
import images from "../../../assets/images";
import classNames from "classnames";
import styles from "./Image.module.scss";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
};

const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallbackSrc, setFallbackSrc] = useState<string>("");

    const handleError = () => {
      setFallbackSrc(customFallback);
    };

    const effectiveSrc = (fallbackSrc ||
      (src as string) ||
      customFallback) as string;

    return (
      <img
        ref={ref}
        src={effectiveSrc}
        alt={alt}
        className={classNames(styles.wrapper, className)}
        {...props}
        onError={handleError}
      />
    );
  }
);

Image.displayName = "Image";

export default Image;
