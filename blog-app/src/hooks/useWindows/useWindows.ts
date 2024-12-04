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
    const updateDimensions = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return { dimension };
}
