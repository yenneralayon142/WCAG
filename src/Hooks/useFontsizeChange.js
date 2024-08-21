import { useEffect } from "react";
import { useAccessibilityContext } from "../contexts/accesibilityContext";

export function useFontSizeChange() {
    const { settings, updateSettings } = useAccessibilityContext();

    const options = ["text-sm", "text-md", "text-lg", "text-xl", "text-2xl", "text-3xl"];
    
    useEffect(() => {
        const fontSizeElement = document.getElementById("font-size");
        const currentIndex = options.findIndex(size => size === settings.textSize);

        const ChangeFontSize = () => {
            const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
            updateSettings({ textSize: options[nextIndex] });
        }

        const applyFontSize = () => {
            const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, label, span, a, li");
    
            elements.forEach((element) => {
                element.classList.remove(...["text-sm", "text-md", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl"]);
                element.classList.add(settings.textSize);
            })
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
