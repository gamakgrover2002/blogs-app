import { useState, useEffect } from "react";

type useWindowProps = {
  width: number;
  height: number;
};

export function useWindow(inputDimension: useWindowProps) {
  const [dimension, setDimension] = useState({
    width: inputDimension.width,
    height: inputDimension.height,
  });
  useEffect(() => {
    const dimen = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    setDimension(dimen);
  });
  return { dimension };
}
