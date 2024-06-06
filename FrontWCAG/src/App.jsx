import { useEffect, useRef } from 'react';
import { handleFontSizeChange, handleContrastChange, handleColorBlindnessChange, readText } from './library/library.js';
import  {AccessibilityControls} from './components/Accesibility.jsx';
import  {ActionButtons} from './components/ActionButtons.jsx';
import {ColorSample} from './components/ColorSample.jsx' ;
import {MediaContent} from './components/MediaContent.jsx';
import {Section} from './components/Section.jsx';

const App = () => {
  const fontSizeRef = useRef(null);
  const contrastRef = useRef(null);
  const colorBlindnessRef = useRef(null);
  const imageDescriptionButtonRef = useRef(null);
  const voiceRecognitionButtonRef = useRef(null);
  const voiceSelectRef = useRef(null);

  useEffect(() => {
    const cleanupFontSize = handleFontSizeChange();
    const cleanupContrast = handleContrastChange();
    const cleanupColorBlindness = handleColorBlindnessChange();
    const cleanupReadText = readText();

    return () => {
      cleanupFontSize();
      cleanupContrast();
      cleanupColorBlindness();
      cleanupReadText();
    };
  }, []);

  useEffect(() => {
    const handleFontSizeChange = () => {
      if (fontSizeRef.current) {
        fontSizeRef.current.addEventListener('change', (event) => {
          const fontSize = event.target.value;
          document.body.style.fontSize = fontSize === 'default' ? '' : fontSize;
        });
      }
    };

    const handleContrastChange = () => {
      if (contrastRef.current) {
        contrastRef.current.addEventListener('change', (event) => {
          const contrast = event.target.value;
          document.body.style.filter = contrast === 'high-contrast' ? 'contrast(150%)' : '';
        });
      }
    };

    const handleColorBlindnessChange = () => {
      if (colorBlindnessRef.current) {
        colorBlindnessRef.current.addEventListener('change', (event) => {
          const filter = event.target.value;
          document.body.style.filter = filter === 'default' ? '' : `url(#${filter})`;
        });
      }
    };

    handleFontSizeChange();
    handleContrastChange();
    handleColorBlindnessChange();
  }, []);

  const handleImageDescription = () => {
    // Implementación de la descripción de la imagen
  };

  const handleVoiceRecognition = () => {
    // Implementación del reconocimiento de voz
  };

  return (
    <>
      <header>
        <h1>Web Accesible</h1>
        <AccessibilityControls 
          fontSizeRef={fontSizeRef}
          contrastRef={contrastRef}
          colorBlindnessRef={colorBlindnessRef}
          voiceSelectRef={voiceSelectRef}
        />
      </header>
      <main>
        <Section title="Sección 1">
          <p>Este es un ejemplo de contenido accesible.</p>
          <ColorSample />
        </Section>
        <Section title="Sección 2">
          <p>Este es otro ejemplo de contenido accesible.</p>
          <MediaContent />
          <ColorSample />
        </Section>
      </main>
      <ActionButtons 
        onImageDescription={handleImageDescription}
        onVoiceRecognition={handleVoiceRecognition}
      />
    </>
  );
};

export default App;