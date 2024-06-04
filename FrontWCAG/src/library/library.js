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
    if (typeof speechSynthesis === 'undefined')
        return;

    var voiceSelect = document.getElementById("voiceSelect");
    var voices = [];
    var textElements = document.querySelectorAll('p');

    function populateVoiceList() {
        voices = speechSynthesis.getVoices();

      for (var i = 0; i < voices.length; i++) {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
        option.textContent += voices[i].default ? ' -- DEFAULT' : '';
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        document.getElementById("voiceSelect").appendChild(option);
      }
    }

    function speakText(text) {
      var utterThis = new SpeechSynthesisUtterance(text);
      var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

      for (var i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }

      utterThis.addEventListener('start', function () {
        textElements.forEach(function (element) {
          element.classList.remove('highlighted');
        });
      });

      utterThis.addEventListener('boundary', function (event) {
        var start = event.charIndex;
        var end = event.charIndex + event.charLength;

        textElements.forEach(function (element) {
          var text = element.textContent;
          if (start >= 0 && end <= text.length) {
            var highlightedText = text.substring(start, end);
            var regex = new RegExp(highlightedText, 'gi');
            element.innerHTML = text.replace(regex, '<span class="highlighted">' + highlightedText + '</span>');
          }
        });
      });

      speechSynthesis.speak(utterThis);
    }

    function getSelectionText() {
      var text = "";
      if (window.getSelection) {
        text = window.getSelection().toString();
      } else if (document.selection && document.selection.type !== "Control") {
        text = document.selection.createRange().text;
      }
      return text;
    }

    function handleMouseUp() {
      var selectedText = getSelectionText();
      if (selectedText.length > 0) {
        speakText(selectedText);
      }
    }

    function start() {
      populateVoiceList();
      if (speechSynthesis.onvoiceschanged !== undefined)
        speechSynthesis.onvoiceschanged = populateVoiceList;

      voiceSelect.onchange = function () {
        var selectedText = getSelectionText();
        if (selectedText.length > 0) {
          speakText(selectedText);
        }
      };

      setTimeout(function () {
        var defaultOption = voiceSelect.querySelector('[data-default="true"]');
        if (defaultOption) {
          defaultOption.selected = true;
          var selectedText = getSelectionText();
          if (selectedText.length > 0) {
            speakText(selectedText);
          }
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







