// Función para cambiar el tamaño de fuente
export const handleFontSizeChange = () => {
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
    // Limpia el event listener cuando el componente se desmonte
    return () => {
        if (fontSizeElement) {
        fontSizeElement.removeEventListener('change', changeFontSize);
        }
    };
};
  // Función para cambiar el contraste
export const handleContrastChange = () => {
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
    // Limpia el event listener cuando el componente se desmonte
    return () => {
        if (contrastElement) {
        contrastElement.removeEventListener('change', changeContrast);
        } 
    };
};
// Función para aplicar filtros de daltonismo
export const handleColorBlindnessChange = () => {
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
// Limpia el event listener cuando el componente se desmonte
    return () => {
        if (colorBlindnessElement) {
        colorBlindnessElement.removeEventListener('change', changeColorBlindness);
        }
    };
};






