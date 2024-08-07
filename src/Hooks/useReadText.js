import { useEffect } from 'react';
export function useReadText () {
  useEffect(() => {
    if (typeof speechSynthesis === 'undefined') return;

    let voices = [];
    const textElements = document.querySelectorAll('p, h1, h2, label, select, input, button, footer, header');

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
        text = event.target.alt || event.target.getAttribute('aria-label') || 'Imagen sin descripción';
      } else {
        text = event.target.textContent;
      }

      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
      speakText(text);
    };

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    textElements.forEach((element) => {
      element.addEventListener('mouseover', handleMouseOver);
    });

    return () => {
      textElements.forEach((element) => {
        element.removeEventListener('mouseover', handleMouseOver);
      });
    };
  }, []);
}
