export default function Hero() {
    return(
        <section>
            <div className="container hero__wcag">
                <div className="hero__wcag__title">
                    <h1 className="text--blue"> ¿Qué son los estándares <span className="text--green">WCAG</span>? </h1>
                    <p className="text--extralarge">
                        Las pautas de accesibilidad para el contenido web (WCAG por sus siglas en inglés) son recomendaciones del W3C que buscan 
                        hacer la web más accesible, asegurando que todo en una página sea fácil de usar y comprender.
                    </p>
                </div>
                <figure className="hero__wcag__image">
                    <img src="/hero_wcag.png" alt="Imagen de incio sobre las WCAG" className="image" />
                </figure>
            </div>
        </section>
    );
}