import { useEffect } from "react"
import { useAccessibilityContext } from "../contexts/accesibilityContext";

export function useHighLightLinks() { 

    const { settings, updateSettings } = useAccessibilityContext();

    useEffect(() => {
        const highlightLinkElement = document.getElementById('highlight-links');

        const toggleHighlightLinks = () => {
            updateSettings({ highlightedLinks: !settings.highlightedLinks })
        }

        const applyStyles = () => {
            const elements = document.querySelectorAll('a, .k-menu-link-text');
            elements.forEach(element => {
                if (settings.highlightedLinks) {
                    element.classList.add('link--highlighted');
                } else {
                    element.classList.remove('link--highlighted');
                }
            })
        }

        if(highlightLinkElement) {
            applyStyles();
            highlightLinkElement.addEventListener('click', toggleHighlightLinks);
        }

        return () => {
            highlightLinkElement.removeEventListener('click', toggleHighlightLinks);
        }
    }, [settings]);

    return null;
}