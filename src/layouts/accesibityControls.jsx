import React from "react";
import { useAccessibilityContext } from "../contexts/accesibilityContext";
import { Button } from "@progress/kendo-react-buttons";
import * as icons from "@progress/kendo-svg-icons";

export default function AccessibilityControls() {

    const { settings, updateSettings, defaultSettings } = useAccessibilityContext();

    const handleMoveWidget = () => {
        if (settings.sidebarPosition == 'left') {
            updateSettings({ sidebarPosition: 'right' });
        } else {
            updateSettings({ sidebarPosition: 'left' });
        }
    };

    return (
        <form>
            <input type="checkbox" id="open-menu" className="hidden" aria-label="Abrir menú de accesibilidad web"/>
            
            <label htmlFor="open-menu" className="open-button">
                <Button
                    rounded="full"
                    fillMode="solid"
                    svgIcon={icons.accessibilityIcon}
                    size="large"
                    type="button"
                    onClick={() => document.getElementById('open-menu').click()}
                />
            </label>

            <div className="overlay" onClick={() => document.getElementById('open-menu').click()}></div>
            <div className={`sidebar 
                ${settings.sidebarPosition == 'left' ? '' : 'sidebar--right'} 
                ${settings.sidebarSize == 'medium' ? '' : settings.sidebarSize == 'large' ? 'sidebar--large' : 'sidebar--small'}
                `}>
                <div className="sidebar__tittle">
                    <h1 className="text-2xl">Menú de Accesibilidad</h1>
                    <h2 className="text-lg">Aumentar tamaño Widgets</h2>
                </div>
                <div className="sidebar__container">
                    <article className="sidebar__item" id="font-size">
                        <span className="material-symbols-outlined">text_fields</span>
                        <p>Tamaño texto</p>
                    </article>
                    <article className="sidebar__item">
                        <span className="material-symbols-outlined">contrast</span>
                        <p>Contraste</p>
                    </article>
                    <article className="sidebar__item">
                            <span className="material-symbols-outlined">text_to_speech</span>
                            <p>Lector pantalla</p>
                    </article>
                    <article className="sidebar__item">
                        <span className="material-symbols-outlined">web_traffic</span>
                        <p>Cursor</p>
                    </article>
                </div>
                <div className="sidebar__buttons">
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
                    <label className="change-position" aria-label="Cambiar de posición menú de accesibilidad" onClick={handleMoveWidget}>
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
                </div>
            </div>
        </form>
    );
}
