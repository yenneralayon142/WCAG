import { useEffect } from "react";
import { useAccessibilityContext } from "../contexts/accesibilityContext";

export function useCursorColorChange() {
    const { settings, updateSettings } = useAccessibilityContext();

    const options = ["white", "black"];
    
    useEffect(() => {
        const cursorColorElement = document.getElementById("cursor-color");
        const currentIndex = options.findIndex(color => color == settings.cursorColor);

        const toggleCursorColor = () => {
            const nextIndex = currentIndex + 1 > options.length - 1 ? 0 : currentIndex + 1;
            updateSettings({ cursorColor: options[nextIndex] });
        }

        const applyStyles = () => {
            if (settings.cursorColor == 'black') {
                document.querySelector('body').style = "cursor: url('/cursor-negro.png'), auto;";
            } else {
                document.querySelector('body').style = "cursor: auto;";
            }
        }

        if(cursorColorElement) {
            applyStyles();
            cursorColorElement.addEventListener("click", toggleCursorColor);
        }

        return () => {
            if(cursorColorElement) {
                cursorColorElement.removeEventListener("click", toggleCursorColor);
            }
        }

    }, [settings]);

    return null;
}
