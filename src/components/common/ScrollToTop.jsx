import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 즉시 스크롤을 상단으로 이동
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    // 추가로 document 요소도 스크롤
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default ScrollToTop;

