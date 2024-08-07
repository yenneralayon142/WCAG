import { useEffect } from 'react';

export const useColorBlindnessChange = () => {
  useEffect(() => {
    const colorBlindnessElement = document.getElementById('color-blindness');
    const changeColorBlindness = (event) => {
      const filter = event.target.value;
      document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
      if (filter !== 'default') {
        document.body.classList.add(filter);
      }
    };

    if (colorBlindnessElement) {
      colorBlindnessElement.addEventListener('change', changeColorBlindness);
    }

    return () => {
      if (colorBlindnessElement) {
        colorBlindnessElement.removeEventListener('change', changeColorBlindness);
      }
    };
  }, []);
};
