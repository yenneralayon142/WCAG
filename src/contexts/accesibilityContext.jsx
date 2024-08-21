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
        cursorColor: 'white', // black, white
        cursorSize:  'normal', // normal, large, extra-large
        resaltedLinks: false,

        // Text settings
        textSize: 'text-md', // text-sm, text-md, text-lg, text-xl, text-2xl, text-3xl
        textFont: 'font-sans', // font-sans, font-serif, font-mono
        lineHeight: 'normal', // normal, loose, xloose
        textSpacing: 'normal', // normal, loose, xloose
        textAlign: 'left', // left, center, right, justify

        // Color settings
        colorSaturation: 'normal', // normal, light, dark
        colorContrast: 'normal', // normal, low, high
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
