import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const ImageWithLoader = ({ src, alt, layout, objectFit, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={src}
      loader={() => src}
      layout={layout}
      objectFit={objectFit}
      onLoadingComplete={() => { setIsLoading(false)}}
      className={clsx("transition-all", isLoading && "animate-pulse bg-gray-200", className)}
      alt={alt}
    />
  );
};

export default ImageWithLoader;
