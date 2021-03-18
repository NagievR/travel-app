import { useEffect, useState } from "react";

const useParallax = () => {
  const [bgPositionY, setBgPositionY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setBgPositionY(window.pageYOffset * 0.6);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { backgroundPositionY: bgPositionY };
}

export default useParallax;
