import { useEffect } from 'react';

export function useFontSizeChange() {
  useEffect(() => {
    const fontSizeElement = document.getElementById('font-size');

    const changeFontSize = (event) => {
        const size = event.target.value;

        document.body.classList.remove('text-sm', 'text-md', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl');

        switch (size) {
            case 'small':
                document.body.classList.add('text-sm');
                break;
            case 'default':
                document.body.classList.add('text-md');
                break;
            case 'large':
                document.body.classList.add('text-lg');
                break;
            case 'x-large':
                document.body.classList.add('text-xl');
                break;
            case 'xx-large':
                document.body.classList.add('text-2xl');
                break;
            default:
                document.body.classList.add('text-md'); // Valor por defecto
                break;
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
