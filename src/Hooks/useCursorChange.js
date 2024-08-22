import { useEffect } from "react";
import { useAccessibilityContext } from "../contexts/accesibilityContext";

export function useCursorChange() {
    const { settings, updateSettings } = useAccessibilityContext();

    const options = ["white", "black", "large", "mask", "readGuide"];
    
    useEffect(() => {
        const cursorElement = document.getElementById("cursor");
        const currentIndex = options.findIndex(cursor => cursor == settings.cursor);

        const toggleCursorColor = () => {
            const nextIndex = currentIndex + 1 > options.length - 1 ? 0 : currentIndex + 1;
            updateSettings({ cursor: options[nextIndex] });
        }

        const applyStyles = () => {
            switch (settings.cursor) {
                case 'white':
                    document.querySelector('body').style = "cursor: auto;";
                    removeMask();
                    removeReadGuide();
                    break;
                case 'black':
                    document.querySelector('body').style = "cursor: url('/cursor-negro.png'), auto !important;";
                    removeMask();
                    removeReadGuide();
                    break;
                case 'large':
                    document.querySelector('body').style = "cursor: url('/cursor-grande.svg'), auto !important;";
                    removeMask();
                    removeReadGuide();
                    break;
                case 'mask':
                    document.querySelector('body').style = "cursor: auto;";
                    createMask();
                    removeReadGuide();
                    break;
                case 'readGuide':
                    document.querySelector('body').style = "cursor: auto;";
                    createReadGuide();
                    removeMask();
                    break;
            }
        };

        const createReadGuide = () => {
            let readGuide = document.getElementById('read-guide');
            document.querySelector('body').style = "cursor: default;";
            if (!readGuide) {
                readGuide = document.createElement('div');
                readGuide.id = 'read-guide';
                document.body.appendChild(readGuide);
            }

            document.addEventListener('mousemove', handleMouseMoveGuide);
        };

        const handleMouseMoveGuide = (e) => {
            const mouseY = e.clientY;
            const readGuide = document.getElementById('read-guide');

            if (readGuide) {
                readGuide.style.top = `${mouseY - 5}px`;
                readGuide.style.left = `${e.clientX - 250}px`;
            }
        };

        const removeReadGuide = () => {
            const readGuide = document.getElementById('read-guide');
            if (readGuide) readGuide.remove();
            document.removeEventListener('mousemove', handleMouseMoveGuide);
        };

        const createMask = () => {
            let maskTop = document.getElementById('mask--top');
            let maskBottom = document.getElementById('mask--bottom');

            if (!maskTop) {
                maskTop = document.createElement('div');
                maskTop.id = 'mask--top';
                document.body.appendChild(maskTop);
            }

            if (!maskBottom) {
                maskBottom = document.createElement('div');
                maskBottom.id = 'mask--bottom';
                document.body.appendChild(maskBottom);
            }

            document.addEventListener('mousemove', handleMouseMoveMask);
        };

        const handleMouseMoveMask = (e) => {
            const mouseY = e.clientY;
            const maskTop = document.getElementById('mask--top');
            const maskBottom = document.getElementById('mask--bottom');

            if (maskTop && maskBottom) {
                maskTop.style.height = `${mouseY - 70}px`;
                maskBottom.style.height = `${window.innerHeight - mouseY - 70}px`;
            }
        };

        const removeMask = () => {
            const maskTop = document.getElementById('mask--top');
            const maskBottom = document.getElementById('mask--bottom');

            if (maskTop) maskTop.remove();
            if (maskBottom) maskBottom.remove();

            document.removeEventListener('mousemove', handleMouseMoveMask);
        };

        if(cursorElement) {
            applyStyles();
            cursorElement.addEventListener("click", toggleCursorColor);
        }

        return () => {
            if(cursorElement) {
                cursorElement.removeEventListener("click", toggleCursorColor);
            }
        }

    }, [settings]);

    return null;
}
