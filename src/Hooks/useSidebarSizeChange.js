import { useEffect } from "react";
import { useAccessibilityContext } from "../contexts/accesibilityContext";

export function useSidebarSizeChange() {
    const { settings, updateSettings } = useAccessibilityContext();

    const options = ['small', 'medium', 'large'];

    useEffect(() => {
        const sidebarSizeElement = document.getElementById("sidebar-size");
        const currentIndex = options.findIndex(size => size === settings.sidebarSize);

        const ChangeSidebarSize = () => {
            const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
            updateSettings({ sidebarSize: options[nextIndex] });
        }

        if (sidebarSizeElement) {
            sidebarSizeElement.addEventListener("click", ChangeSidebarSize);
        }

        return () => {
            if (sidebarSizeElement) {
                sidebarSizeElement.removeEventListener("click", ChangeSidebarSize);
            }
        }

    }, [settings]);
}