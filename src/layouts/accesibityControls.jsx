import { Button } from "@progress/kendo-react-buttons";
import * as icons from "@progress/kendo-svg-icons";

export default function AccessibilityControls() {
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
            <div className="sidebar">
                <div className="sidebar__tittle">
                    <h1 className="text-2xl">
                        Menú de Accesibilidad
                    </h1>
                    <h2 className="text-lg">
                        Aumentar tamaño Widgets
                    </h2>
                </div>
                <div className="sidebar__container">
                    <article className="sidebar__item">
                        <a href="">
                            <span className="material-symbols-outlined">
                                text_fields
                            </span>
                            <br />
                            Tamaño texto
                        </a>
                    </article>
                    <article className="sidebar__item">
                        <a href="">
                            <span className="material-symbols-outlined">
                                contrast
                            </span>
                            Contraste
                        </a>
                    </article>
                    <article className="sidebar__item">
                        <a href="">
                            <span className="material-symbols-outlined">
                                text_to_speech
                            </span>
                            Lector Pantalla
                        </a>
                    </article>
                    <article className="sidebar__item">
                        <a href="">
                            <span className="material-symbols-outlined">
                                web_traffic
                            </span>
                            Cursor
                        </a>
                    </article>
                </div>
                
                <div className="sidebar__buttons">
                    <label htmlFor="open-menu" className="close-button" aria-label="Cerrar menú de accesibilidad web">
                        <Button
                            rounded="full"
                            fillMode="flat"
                            svgIcon={icons.xIcon}
                            size="large"
                            htmlFor="open-menu"
                            type="button"
                            style={{width: '100%'}}
                            onClick={() => document.getElementById('open-menu').click()}
                        >
                            Cerrar
                        </Button>
                    </label>
                    <Button
                        rounded="full"
                        fillMode="flat"
                        svgIcon={icons.arrowRotateCcwIcon}
                        size="large"
                        type="button"
                        className="button-end"
                        style={{width: '100%'}}
                    >
                        Restablecer configuraciones
                    </Button>
                </div>
            </div>
        </form>
    );
}
