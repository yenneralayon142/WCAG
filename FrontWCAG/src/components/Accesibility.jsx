import PropTypes from 'prop-types';

// Componente Funcional

export const AccessibilityControls = ({ fontSizeRef, contrastRef, colorBlindnessRef, voiceSelectRef }) => (
  <div className="accessibility-controls">
    <label htmlFor="font-size">Tamaño de fuente:</label>
    <select id="font-size" ref={fontSizeRef}>
      <option value="default">Por defecto</option>
      <option value="large">Grande</option>
      <option value="x-large">Muy grande</option>
    </select>

    <label htmlFor="contrast">Contraste:</label>
    <select id="contrast" ref={contrastRef}>
      <option value="default">Por defecto</option>
      <option value="high-contrast">Alto contraste</option>
    </select>

    <label htmlFor="color-blindness">Filtros para daltonismo:</label>
    <select id="color-blindness" ref={colorBlindnessRef}>
      <option value="default">Por defecto</option>
      <option value="protanopia">Protanopia</option>
      <option value="deuteranopia">Deuteranopia</option>
      <option value="tritanopia">Tritanopia</option>
    </select>
    </div>
);

// En este código, se usa PropTypes.shape para definir la forma del objeto que se espera para cada ref.
// Cada ref debe ser un objeto con una propiedad current que es una instancia de Element. 
// Esto garantiza que los props pasados al componente tengan la forma esperada.
AccessibilityControls.propTypes = {
  fontSizeRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  contrastRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  colorBlindnessRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  voiceSelectRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

