import React, { createContext, useContext, useEffect, useState } from 'react';

export const AccessibilityContext = createContext();

export function useAccessibilityContext () {
    return useContext(AccessibilityContext);
}

export default function AccessibilityProvider ({ children }) {
    
    const defaultSettings = {
        // Sidebar settings
        sidebarSize: 'medium',
        sidebarPosition: 'left',

        // Sidebar profiles
        accesibilityProfile: 'none',

        // screen reader
        screenReader: false,
        
        // Navigation settings
        cursorColor: 'white',
        resaltedLinks: false,

        // Text settings
        textSize: 'text-md',
        textFont: 'font-sans',
        lineHeight: 'normal',
        textSpacing: 'normal',
        textAlign: 'left',

        // Color settings
        colorSaturation: 'normal',
        colorContrast: 'normal',
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
