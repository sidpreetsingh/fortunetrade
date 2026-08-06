import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // or 'react-router'

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Resets scroll position to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;