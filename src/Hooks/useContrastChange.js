import { useEffect } from 'react';

export function useContrastChange  () {
  useEffect(() => {
    const contrastElement = document.getElementById('contrast');
    const changeContrast = (event) => {
      const contrast = event.target.value;
      document.body.classList.remove('high-contrast');
      if (contrast === 'high-contrast') {
        document.body.classList.add('high-contrast');
      }
    };
    if (contrastElement) {
      contrastElement.addEventListener('change', changeContrast);
    }
    return () => {
      if (contrastElement) {
        contrastElement.removeEventListener('change', changeContrast);
      }
    };
  }, []);
}
