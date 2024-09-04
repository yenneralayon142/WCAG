export default function Hero() {
    return(
        <section>
            <div className="container hero__wcag">
                <div className="hero__wcag__title">
                    <h1 className="text--title text--blue"> ¿Quiénes <span className="text--green">somos</span>? </h1>
                    <p className="text--extralarge">
                        Somos un equipo de diseñadores y desarrolladores dedicados a crear una web inclusiva, donde la tecnología sea accesible para todos. 
                    </p>
                    <p className="text--extralarge">
                        Guiados por el Diseño Universal, buscamos empoderar a la próxima generación con herramientas para construir sitios verdaderamente inclusivos, fomentando una cultura de inclusión y equidad en la web.
                    </p>
                </div>
                <figure className="hero__wcag__image">
                    <img src="/hero_wcag.png" alt="Imagen de incio sobre las WCAG" className="image" />
                </figure>
            </div>
        </section>
    );
}