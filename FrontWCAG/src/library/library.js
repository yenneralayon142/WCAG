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


// Leer texto cuando se seleccione con el mouse
export const readText = () => {
    "use strict";
  
    if (typeof speechSynthesis === 'undefined')
      return;
  
    const voiceSelect = document.getElementById("voiceSelect");
    let voices = [];
    const textElements = document.querySelectorAll('p');
  
    const populateVoiceList = () => {
      voices = speechSynthesis.getVoices();
  
      for (let i = 0; i < voices.length; i++) {
        const option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
        option.textContent += voices[i].default ? ' -- DEFAULT' : '';
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
      }
    }
  
    const speakText = (text) => {
      const utterThis = new SpeechSynthesisUtterance(text);
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }
  
      utterThis.addEventListener('start', () => {
        textElements.forEach((element) => {
          element.classList.remove('highlighted');
        });
      });
  
      utterThis.addEventListener('boundary', (event) => {
        const start = event.charIndex;
        const end = event.charIndex + event.charLength;
  
        textElements.forEach((element) => {
          const text = element.textContent;
          if (start >= 0 && end <= text.length) {
            const highlightedText = text.substring(start, end);
            const regex = new RegExp(highlightedText, 'gi');
            element.innerHTML = text.replace(regex, '<span class="highlighted">' + highlightedText + '</span>');
          }
        });
      });
  
      speechSynthesis.speak(utterThis);
    }
  
    const getSelectionText = () => {
      let text = "";
      if (window.getSelection) {
        text = window.getSelection().toString();
      } else if (document.selection && document.selection.type !== "Control") {
        text = document.selection.createRange().text;
      }
      return text;
    }
  
    const handleMouseUp = () => {
      const selectedText = getSelectionText();
      if (selectedText.length > 0) {
        speakText(selectedText);
      }
    };
  
    const start = () => {
      populateVoiceList();
      if (speechSynthesis.onvoiceschanged !== undefined)
        speechSynthesis.onvoiceschanged = populateVoiceList;
  
      voiceSelect.onchange = handleMouseUp;
  
      setTimeout(() => {
        const defaultOption = voiceSelect.querySelector('[data-default="true"]');
        if (defaultOption) {
          defaultOption.selected = true;
          handleMouseUp();
        }
      }, 75);
    }
  
    start();
  
    // Limpia el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      if (voiceSelect) {
        voiceSelect.removeEventListener('change', start);
      }
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
              document.body.style.fontSize = 'larger';
              break;
          case 'fuente muy grande':
              document.body.style.fontSize = 'x-large';
              break;
          case 'alto contraste':
              document.body.style.filter = 'contrast(150%)';
              break;
          case 'protanopia':
              document.body.style.filter = 'url(#protanopia)'; // Necesitarías un filtro SVG para esto
              break;
          case 'deuteranopia':
              document.body.style.filter = 'url(#deuteranopia)'; // Necesitarías un filtro SVG para esto
              break;
          case 'tritanopia':
              document.body.style.filter = 'url(#tritanopia)'; // Necesitarías un filtro SVG para esto
              break;
          case 'por defecto':
              document.body.style.fontSize = '';
              document.body.style.filter = '';
              break;
          default:
              console.log('Comando de voz no reconocido:', transcript);
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

// Ejemplo de uso de la función
startVoiceRecognition(
  (transcript) => {
      console.log('Resultado:', transcript);
  },
  (error) => {
      console.error('Error:', error);
  },
  () => {
      console.log('Reconocimiento de voz finalizado');
  }
);








