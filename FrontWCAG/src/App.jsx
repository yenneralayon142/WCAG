import { useEffect, useRef } from 'react';
import { handleFontSizeChange, handleContrastChange, handleColorBlindnessChange, readText,startVoiceRecognition } from './library/library.js';
import {Header} from './components/header.jsx'
import {Profile} from './components/profile.jsx'
import {Portfolio} from './components/portfolio.jsx' 
import {Contact} from './components/contact.jsx'
import {Footer} from './components/footer.jsx'
import { ColorSample } from './components/colorSample.jsx';
import {AccessibilityControls} from './components/accesibityControls.jsx'

const App = () => {
  const fontSizeRef = useRef(null);
  const contrastRef = useRef(null);
  const colorBlindnessRef = useRef(null);

  useEffect(() => {
    const cleanupFontSize = handleFontSizeChange();
    const cleanupContrast = handleContrastChange();
    const cleanupColorBlindness = handleColorBlindnessChange();
    const cleanupReadText = readText();

    // Start voice recognition
    startVoiceRecognition(
      (transcript) => {
        console.log('Resultado:', transcript);
      },
      (error) => {
        console.error('Error:Sonido no detectado', error);
      },
      () => {
        console.log('Reconocimiento de voz finalizado');
      }
    );

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

  
  return (
    <>
        <Header/>
        <AccessibilityControls />
        <ColorSample/>
        <Profile />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  );
};

export default App;