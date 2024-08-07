import { useEffect } from 'react';

export function useVoiceRecognition  (onResultCallback, onErrorCallback, onEndCallback){
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Tu navegador no soporta la API de Reconocimiento de Voz');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log('Reconocimiento de voz iniciado');
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      console.log('Transcripción recibida:', transcript);

      switch (transcript) {
        case 'fuente grande':
          document.getElementById('font-size').value = 'large';
          document.getElementById('font-size').dispatchEvent(new Event('change'));
          break;
        case 'fuente muy grande':
          document.getElementById('font-size').value = 'x-large';
          document.getElementById('font-size').dispatchEvent(new Event('change'));
          break;
        case 'alto contraste':
          document.getElementById('contrast').value = 'high-contrast';
          document.getElementById('contrast').dispatchEvent(new Event('change'));
          break;
        case 'protanopia':
        case 'deuteranopia':
        case 'tritanopia':
          document.getElementById('color-blindness').value = transcript;
          document.getElementById('color-blindness').dispatchEvent(new Event('change'));
          break;
        case 'por defecto':
          document.getElementById('font-size').value = 'default';
          document.getElementById('font-size').dispatchEvent(new Event('change'));
          document.getElementById('contrast').value = 'default';
          document.getElementById('contrast').dispatchEvent(new Event('change'));
          document.getElementById('color-blindness').value = 'default';
          document.getElementById('color-blindness').dispatchEvent(new Event('change'));
      }

      if (onResultCallback) {
        onResultCallback(transcript);
      }
    };

    recognition.onerror = (event) => {
      if (onErrorCallback) {
        onErrorCallback(event.error);
      }
    };

    recognition.onend = () => {
      if (onEndCallback) {
        onEndCallback();
      }
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [onResultCallback, onErrorCallback, onEndCallback]);
};
