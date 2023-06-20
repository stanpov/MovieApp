import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageProps {
  imagePath: string;
  height?: string;
  brightness?: boolean;
}

const Image: React.FC<ImageProps> = ({ imagePath, height, brightness }) => (
  <LazyLoadImage
    alt={"imagePath"}
    effect="blur"
    src={`${import.meta.env.VITE_IMAGE_URL}${imagePath}`}
    className={`h-full w-full ${brightness ? "brightness-[65%]" : undefined}`}
    height={height}
    width={"100%"}
  />
);

export default Image;
