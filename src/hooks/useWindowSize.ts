import { useEffect, useState } from "react";

interface WindowConstraints {
  width: number;
  height: number;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowConstraints>({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
