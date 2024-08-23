import { useEffect } from "react";
import { useAccessibilityContext } from "../contexts/accesibilityContext";

export function useFontSizeChange() {
    const { settings, updateSettings } = useAccessibilityContext();

    const options = ["small", "normal", "large", "extralarge", "giant"];
    
    useEffect(() => {
        const fontSizeElement = document.getElementById("font-size");
        const currentIndex = options.findIndex(size => size === settings.textSize);

        const ChangeFontSize = () => {
            const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
            updateSettings({ textSize: options[nextIndex] });
        }

        const applyFontSize = () => {
            const titles = document.querySelectorAll('.text--title');
            const subtitles = document.querySelectorAll('.text--subtitle');
            const extralarges = document.querySelectorAll('.text--extralarge');
            const larges = document.querySelectorAll('.text--large');
            const normals = document.querySelectorAll('.text--normal');
    
            let scaleFactor = 1;

            switch (options[currentIndex]) {
                case "small":
                    scaleFactor = 0.8;
                    break;
                case "normal":
                    scaleFactor = 1;
                    break;
                case "large":
                    scaleFactor = 1.2;
                    break;
                case "extralarge":
                    scaleFactor = 1.4;
                    break;
                case "giant":
                    scaleFactor = 1.6;
                    break;
                default:
                    scaleFactor = 1;
                    break;
            }

            titles.forEach(element => element.style.fontSize = `${3.375 * scaleFactor}rem`);
            subtitles.forEach(element => element.style.fontSize = `${2.5 * scaleFactor}rem`);
            extralarges.forEach(element => element.style.fontSize = `${1.75 * scaleFactor}rem`);
            larges.forEach(element => element.style.fontSize = `${1.25 * scaleFactor}rem`);
            normals.forEach(element => element.style.fontSize = `${1 * scaleFactor}rem`);
        }

        if(fontSizeElement) {
            applyFontSize();
            fontSizeElement.addEventListener("click", ChangeFontSize);
        }

        return () => {
            if(fontSizeElement) {
                fontSizeElement.removeEventListener("click", ChangeFontSize);
            }
        }

    }, [settings]);

    return null;
}
