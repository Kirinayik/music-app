import {useEffect, useState} from "react";

export const useWidth = ():number => {
  const [width, setWidth] = useState<number>(0);
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return width;
}