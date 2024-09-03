import React, { createContext, useContext, useEffect, useState } from 'react';

export const AccessibilityContext = createContext();

export function useAccessibilityContext () {
    return useContext(AccessibilityContext);
}

export default function AccessibilityProvider ({ children }) {
    
    const defaultSettings = {
        // Sidebar settings
        sidebarSize: 'medium', // small, medium, large
        sidebarPosition: 'left', // left, right

        // Sidebar profiles
        accesibilityProfile: 'none', // none, protanopia, deuteranopia, tritanopia

        // screen reader
        screenReader: false,
        
        // Navigation settings
        cursor: 'white', // white, black, large, mask, readGuide
        highlightedLinks: false,

        // Text settings
        textSize: 'normal', // small, normal, large, extralarge, giant
        textFont: 'font-sans', // font-sans, font-serif, font-mono
        lineHeight: 'normal', // normal, loose, xloose
        textSpacing: 'normal', // normal, loose, xloose
        textAlign: 'left', // left, center, right, justify

        // Color settings
        contrast: 'normal', // normal, medio, alto, invertido
        hideImages: false,
    };

    const [settings, setSettings] = useState(defaultSettings);

    const updateSettings = (newSettings) => {
        setSettings({ ...settings, ...newSettings });
        localStorage.setItem('settings', JSON.stringify({ ...settings, ...newSettings }));
    };

    useEffect(() => {
        const storedSettings = JSON.parse(localStorage.getItem('settings'));
        if (storedSettings) {
            setSettings(storedSettings);
        }
    }, []);

    return (
        <AccessibilityContext.Provider value={{ settings, updateSettings, defaultSettings }}>
            {children}
        </AccessibilityContext.Provider>
    )
}
