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
        }};
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
    }};
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
        }};
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


//Lector de pantalla

export const readText = () => {
  "use strict";

  if (typeof speechSynthesis === 'undefined') return;

  let voices = [];
  // Seleccionar párrafos, títulos e imágenes
  const textElements = document.querySelectorAll('p, h1, h2,label,select,input,button,footer,header');

  const populateVoiceList = () => {
    voices = speechSynthesis.getVoices();
  };

  const speakText = (text) => {
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voices.find(voice => voice.default) || voices[0];

    speechSynthesis.speak(utterThis);
  };

  const handleMouseOver = (event) => {
    let text;
    if (event.target.tagName.toLowerCase() === 'img') {
      // Leer el texto alternativo de las imágenes
      text = event.target.alt || event.target.getAttribute('aria-label') || 'Imagen sin descripción';
    } else {
      text = event.target.textContent;
    }

    if (speechSynthesis.speaking) {
      speechSynthesis.cancel(); // Detener cualquier discurso en curso antes de comenzar uno nuevo
    }
    speakText(text);
  };

  const start = () => {
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    textElements.forEach((element) => {
      element.addEventListener('mouseover', handleMouseOver);
    });
  };

  start();

  // Limpia el event listener cuando el componente se desmonte
  return () => {
    textElements.forEach((element) => {
      element.removeEventListener('mouseover', handleMouseOver);
    });
  };
};


  


// Activar el reconocimiento de voz
export function startVoiceRecognition(onResultCallback, onErrorCallback, onEndCallback) {
  // Verifica si el navegador soporta la API de reconocimiento de voz
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
      alert('Tu navegador no soporta la API de Reconocimiento de Voz');
      return;
  }

  // Crear una instancia de SpeechRecognition
  const recognition = new SpeechRecognition();

  // Configuración del reconocimiento de voz
  recognition.lang = 'es-ES'; // Configurar el idioma a español (España)
  recognition.continuous = false; // No seguir reconociendo continuamente
  recognition.interimResults = false; // No mostrar resultados intermedios

  // Manejar los eventos del reconocimiento de voz
  recognition.onstart = () => {
      console.log('Reconocimiento de voz iniciado');
  };

  recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      console.log('Transcripción recibida:', transcript);

      // Ejecutar la acción correspondiente al comando de voz
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

  // Iniciar el reconocimiento de voz
  recognition.start();
}









