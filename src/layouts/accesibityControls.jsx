import React, { useEffect } from "react";
import { Button } from "@progress/kendo-react-buttons";
import * as icons from "@progress/kendo-svg-icons";
// Hooks
import { useAccessibilityContext } from "../contexts/accesibilityContext";
import { useFontSizeChange } from "../Hooks/useFontsizeChange";
import { useSidebarSizeChange } from "../Hooks/useSidebarSizeChange";
import { useReadText } from "../Hooks/useReadText";
import { useCursorChange } from "../Hooks/useCursorChange";
import { useHighLightLinks } from "../Hooks/useHighlightLinks";
import { useContrastChange } from "../Hooks/useContrastChange";
// Components
import SidebarItem from "../components/sidebarItem";

export default function AccessibilityControls() {
    
    const { settings, updateSettings, defaultSettings } = useAccessibilityContext();

    const accesibilityTools = [
        {
            text: 'Tamaño texto',
            icon: 'text_fields',
            id: 'font-size',
            hasIndex: true,
            options: ["small", "normal", "large", "extralarge", "giant"],
            optionName: "textSize",
        },
        {
            text: 'Contraste',
            icon: 'contrast',
            id: 'contrast',
            hasIndex: true,
            options: ["normal", "invertido", "oscuro", "claro"],
            optionName: "contrast",
        },
        {
            text: 'Lector pantalla',
            icon: 'text_to_speech',
            id: 'screen-reader',
            hasIndex: false,
            optionName: "screenReader",
        },
        {
            text: 'Cursor',
            icon: 'web_traffic',
            id: 'cursor',
            hasIndex: true,
            options: ["white", "black", "large", "mask", "readGuide"],
            optionName: "cursor",
        },
        {
            text: 'Tamaño widget',
            icon: 'accessibility',
            id: 'sidebar-size',
            hasIndex: true,
            options: ["small", "medium", "large"],
            optionName: "sidebarSize",
        },
        {
            text: 'Resaltar Links',
            icon: 'link',
            id: 'highlight-links',
            hasIndex: false,
            optionName: "highlightedLinks",
        }
    ]

    useFontSizeChange();
    useSidebarSizeChange();
    useReadText();
    useCursorChange();
    useHighLightLinks();
    useContrastChange();

    const handleMoveSidebar = () => {
        if (settings.sidebarPosition == 'left') {
            updateSettings({ sidebarPosition: 'right' });
        } else {
            updateSettings({ sidebarPosition: 'left' });
        }
    };

    const handleRestartSidebar = () => {
        updateSettings(defaultSettings);
    };

    return (
        <form>
            <input type="checkbox" id="open-menu" className="hidden" aria-label="Abrir menú de accesibilidad web"/>
            
            <label htmlFor="open-menu" className="open-button">
                <button
                    type="button"
                    className="accessibility__button"
                    onClick={() => document.getElementById('open-menu').click()}
                >
                    <img src="/icons/accessibility.png" alt="Logo accesibilidad" />
                </button>
            </label>
            
            <div className="overlay" onClick={() => document.getElementById('open-menu').click()}></div>

            {/* Sidebar */}
            <div className={`sidebar ${settings.sidebarPosition == 'left' ? '' : 'sidebar--right'} ${settings.sidebarSize == 'medium' ? '' : (settings.sidebarSize == 'large' ? 'sidebar--large' : 'sidebar--small')} `}>

                {/* Encabezado */}
                <div className="sidebar__tittle">
                    <h1 className="text-2xl">Menú de Accesibilidad</h1>
                    <hr />
                </div>

                {/* Contenido del menú */}
                <div className="sidebar__container">
                    {
                        accesibilityTools.map((item, index) => (
                            <SidebarItem key={index} text={item.text} icon={item.icon} id={item.id} hasIndex={item.hasIndex} options={item.options} optionName={item.optionName} onClick={item.onClick} />
                        ))
                    }
                </div>

                {/* Botones inferiores */}
                <div className="sidebar__buttons">
                    <hr />
                    <label htmlFor="open-menu" className="close-button" aria-label="Cerrar menú de accesibilidad web">
                        <Button
                            rounded="full"
                            fillMode="flat"
                            svgIcon={icons.xIcon}
                            size="large"
                            type="button"
                            style={{width: '100%'}}
                            onClick={() => document.getElementById('open-menu').click()}
                        >
                            Cerrar
                        </Button>
                    </label>
                    <label className="change-position" aria-label="Cambiar de posición menú de accesibilidad" onClick={handleMoveSidebar}>
                        <Button
                            rounded="full"
                            fillMode="flat"
                            svgIcon={icons.fileConfigIcon}
                            size="large"
                            type="button"
                            style={{width: '100%'}}
                        >
                            Mover Widget
                        </Button>
                    </label>
                    <label aria-label="Reestablecer las configuraciones del menú de accesibilidad" onClick={handleRestartSidebar}>
                        <Button
                            rounded="full"
                            fillMode="flat"
                            svgIcon={icons.arrowRotateCwIcon}
                            size="large"
                            type="button"
                            style={{width: '100%'}}
                        >
                            Reestablecer configuraciones
                        </Button>
                    </label>
                </div>
            </div>
        </form>
    );
}
