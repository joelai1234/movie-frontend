import { useState } from "react";

interface ImageWithFallbackProps {
  className?: string;
  src: string;
  alt: string;
  fallbackSrc: string;
}

export default function ImageWithFallback({
  className,
  src,
  alt,
  fallbackSrc,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <img className={className} src={imgSrc} alt={alt} onError={handleError} />
  );
}
