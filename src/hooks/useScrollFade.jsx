import { useEffect, useState } from 'react';

const useScrollFade = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight ) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return isVisible;
};

export default useScrollFade;
