import React, { createContext, useContext, useState } from 'react';

export const AccessibilityContext = createContext();

export function useAccessibilityContext () {
    return useContext(AccessibilityContext);
}

export default function AccessibilityProvider ({ children }) {
    
    const [settings, setSettings] = useState({
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
        hideImages: false
    });

    return (
        <AccessibilityContext.Provider value={{settings, setSettings}}>
            {children}
        </AccessibilityContext.Provider>
    )
}
