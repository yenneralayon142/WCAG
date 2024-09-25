import { useEffect } from "react";
import { useAccessibilityContext } from "../contexts/accesibilityContext";

export function useReadText() {
    const { settings, updateSettings } = useAccessibilityContext();

    useEffect(() => {
        const screenRead = () => {
            if (typeof speechSynthesis === "undefined") return;
            console.log("Iniciando lectura de texto");

            let voices = [];
            const textElements = document.querySelectorAll(
                "p, span, a, li, td, th, h1, h2, h3, h4, h5, h6, label, select, input, button, footer, header, .text--normal, .text--large, .text--extralarge, .text--subtitle, .text-title, .k-menu-link-text, code, pre"
            );

            const populateVoiceList = () => {
                voices = speechSynthesis.getVoices();
            };

            const speakText = (text) => {
                const utterThis = new SpeechSynthesisUtterance(text);
                utterThis.voice =
                    voices.find((voice) => voice.default) || voices[0];
                speechSynthesis.speak(utterThis);
            };

            const handleMouseOver = (event) => {
                let text;
                if (event.target.tagName.toLowerCase() === "img") {
                    text =
                        event.target.alt ||
                        event.target.getAttribute("aria-label") ||
                        "Imagen sin descripción";
                } else if (event.target.closest("pre") !== null) {
                    text = "Ejemplo de código";
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
                element.addEventListener("mouseover", handleMouseOver);
            });

            return () => {
                textElements.forEach((element) => {
                    element.removeEventListener("mouseover", handleMouseOver);
                });
            };
        };

        const toggleScreenReader = () => {
            updateSettings({ screenReader: !settings.screenReader });
        };

        const screenReaderElement = document.getElementById("screen-reader");

        if (screenReaderElement) {
            screenReaderElement.addEventListener("click", toggleScreenReader);
        }

        // Activar o desactivar el screen reader
        if (settings.screenReader) {
            const cleanup = screenRead();
            return () => {
                cleanup();
                if (screenReaderElement) {
                    screenReaderElement.removeEventListener(
                        "click",
                        toggleScreenReader
                    );
                }
            };
        } else {
            return () => {
                if (screenReaderElement) {
                    screenReaderElement.removeEventListener(
                        "click",
                        toggleScreenReader
                    );
                }
            };
        }
    }, [settings]);

    return null;
}
