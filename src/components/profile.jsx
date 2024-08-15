export default function Profile(){
    return(
        <div className="container profile">
            <div style={{height: '400px', width: '100%', maxWidth: '500px', flex: 'none'}}>
                <img src="/accesibilidad.png" alt="Imagen Accesibilidad Web WCAG" className="image" title='Imagen WCAG' aria-label='Imagen Accesibilidad Web WCAG'/>
            </div>
            <div className="profile__data">
                <h2 className="text--blue text-4xl">Estandar WCAG</h2>
                <p>
                    El estándar WCAG (Web Content Accessibility Guidelines) es un conjunto de pautas internacionales desarrolladas por la 
                    Iniciativa de Accesibilidad Web (WAI) del W3C (World Wide Web Consortium). Estas pautas tienen como objetivo hacer el 
                    contenido web más accesible para las personas con discapacidad.
                </p>
                <h3 className="text--blue text-xl">Principios del Estandar y su Importancia</h3>
                <p>
                    Las WCAG se aplican a todo el contenido web, incluyendo texto, imágenes, sonidos, así como el código o marcado que 
                    define la estructura y presentación de una página o aplicación web1. Las WCAG están organizadas bajo cuatro principios 
                    fundamentales:
                </p>
            </div>
        </div>
    );
}