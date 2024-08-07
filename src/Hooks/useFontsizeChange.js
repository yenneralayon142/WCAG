import { useEffect } from 'react';


export function useFontSizeChange () {
  useEffect(() => {
    const fontSizeElement = document.getElementById('font-size');
    const changeFontSize = (event) => {
      const size = event.target.value;
      document.body.classList.remove('large-font', 'x-large-font');
      if (size === 'large') {
        document.body.classList.add('large-font');
      } else if (size === 'x-large') {
        document.body.classList.add('x-large-font');
      }
    };
    if (fontSizeElement) {
      fontSizeElement.addEventListener('change', changeFontSize);
    }
    return () => {
      if (fontSizeElement) {
        fontSizeElement.removeEventListener('change', changeFontSize);
      }
    };
  }, []);
}
