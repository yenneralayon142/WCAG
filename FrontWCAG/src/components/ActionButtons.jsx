import PropTypes from 'prop-types';

// Componente Funcional

export const ActionButtons = ({ onImageDescription, onVoiceRecognition }) => (
  <div className="action-buttons">
    <button id="start-image-description" onClick={onImageDescription}>Iniciar descripción de imagen</button>
    <button id="start-voice-recognition" onClick={onVoiceRecognition}>Iniciar reconocimiento de voz</button>
  </div>
);

// Se usa propTypes como buena practica, para documentar y saber lo que se espera
ActionButtons.propTypes = {
  onImageDescription: PropTypes.func.isRequired,
  onVoiceRecognition: PropTypes.func.isRequired,
};
