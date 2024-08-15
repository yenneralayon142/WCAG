import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export default function AccessibilityControls () {

    const fontSizeRef = useRef(null);
    const contrastRef = useRef(null);
    const colorBlindnessRef = useRef(null);

    return(
        <div className="container accesibility-controls">
            <div className="accesibility-controls__item">                
                <label htmlFor="font-size">Tamaño de fuente:</label>
                <select id="font-size" ref={fontSizeRef}>
                    <option value="default">Por defecto (Mediano)</option>
                    <option value="small">Pequeño</option>
                    <option value="default">Mediano</option>
                    <option value="large">Grande</option>
                    <option value="x-large">Muy grande</option>
                    <option value="xx-large">Extra grande</option>
                </select>    
            </div>

            <div className="accesibility-controls__item">
                <label htmlFor="contrast">Contraste:</label>
                <select id="contrast" ref={contrastRef}>
                    <option value="default">Por defecto</option>
                    <option value="high-contrast">Alto contraste</option>
                </select>
            </div>
    
            <div className="accesibility-controls__item">
                <label htmlFor="color-blindness">Filtros para daltonismo:</label>
                <select id="color-blindness" ref={colorBlindnessRef}>
                    <option value="default">Por defecto</option>
                    <option value="protanopia">Protanopia</option>
                    <option value="deuteranopia">Deuteranopia</option>
                    <option value="tritanopia">Tritanopia</option>
                </select>
            </div>
        </div>
    );
}

// En este código, se usa PropTypes.shape para definir la forma del objeto que se espera para cada ref.
// Cada ref debe ser un objeto con una propiedad current que es una instancia de Element. 
// Esto garantiza que los props pasados al componente tengan la forma esperada.
AccessibilityControls.propTypes = {
    fontSizeRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    contrastRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    colorBlindnessRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    voiceSelectRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
