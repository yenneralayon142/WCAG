import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Context
import { useAccessibilityContext } from "../contexts/accesibilityContext";

export function useFontSizeChange() {
    const { settings, updateSettings } = useAccessibilityContext();
    const location = useLocation();

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
            const larges = document.querySelectorAll('.text--large, .k-menu-link-text');
            const normals = document.querySelectorAll('.text--normal, label, .sidebar__item p, code, .k-breadcrumb-item-text');

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

            if (window.innerWidth < 512) {
                scaleFactor -= 0.3;
            } else if (window.innerWidth < 768) {
                scaleFactor -= 0.1;
            }

            titles.forEach(element => element.style.fontSize = `${1.5 * scaleFactor}em`);
            subtitles.forEach(element => element.style.fontSize = `${2.5 * scaleFactor}rem`);
            extralarges.forEach(element => element.style.fontSize = `${1.75 * scaleFactor}rem`);
            larges.forEach(element => element.style.fontSize = `${1.25 * scaleFactor}rem`);
            normals.forEach(element => element.style.fontSize = `${1 * scaleFactor}rem`);
        }

        if (fontSizeElement) {
            applyFontSize();
            fontSizeElement.addEventListener("click", ChangeFontSize);
            window.addEventListener("resize", applyFontSize);
        }

        return () => {
            if (fontSizeElement) {
                fontSizeElement.removeEventListener("click", ChangeFontSize);
            }
        }

    }, [settings, location.pathname]);

    return null;
}
