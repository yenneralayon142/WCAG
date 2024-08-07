import accesibilidad from '../assets/accesibilidad.png'

export const Profile = () => {
    return(
        <main className="profile" id="profile">
            <div className="profile__wrapper">
                <div className="profile__img-container">
                    <img src={accesibilidad} alt="Imagen Accesibilidad Web WCAG" className="profile__img" title='Imagen WCAG' aria-label='Imagen Accesibilidad Web WCAG'/>
                </div>
                <div className="profile__data-container">
                    <div className="profile__data">
                        <div className="profile__description">
                            <h1>Estandar WCAG</h1>
                            <p>
                                El estándar WCAG (Web Content Accessibility Guidelines) es un conjunto de pautas internacionales desarrolladas por la Iniciativa de Accesibilidad Web (WAI) del W3C (World Wide Web Consortium). Estas pautas tienen como objetivo hacer el contenido web más accesible para las personas con discapacidad.
                            </p>
                        </div>
                        <div className="profile__skills-container">
                            <h2>Principios del Estandar y su Importancia</h2>
                            <p>
                                Las WCAG se aplican a todo el contenido web, incluyendo texto, imágenes, sonidos, así como el código o marcado que define la estructura y presentación de una página o aplicación web1.
                                Las WCAG están organizadas bajo cuatro principios fundamentales:

                            </p>
                            <ul>
                                <li className="profile__skill">
                                    <div className="load-bar">
                                        <div className="load-bar__bar bar--80">100%</div>
                                    </div>
                                    <span className="profile__skill-name">Perceptible</span>
                                </li>
                                <li className="profile__skill">
                                    <div className="load-bar">
                                        <div className="load-bar__bar bar--60">100%</div>
                                    </div>
                                    <span className="profile__skill-name">Operable</span>
                                </li>
                                <li className="profile__skill">
                                    <div className="load-bar">
                                        <div className="load-bar__bar bar--70">100%</div>
                                    </div>
                                    <span className="profile__skill-name">Comprensible</span>
                                </li>
                                <li className="profile__skill">
                                    <div className="load-bar">
                                        <div className="load-bar__bar bar--50">100%</div>
                                    </div>
                                    <span className="profile__skill-name">Robusto</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}