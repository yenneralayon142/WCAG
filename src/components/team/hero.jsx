export default function Hero() {
    return(
        <section>
            <div className="container hero__wcag">
                <div className="hero__wcag__title">
                    <h1 className="text-7xl text--blue"> ¿Quiénes <span className="text-7xl text--green">somos</span>? </h1>
                    <p className="text-xl">
                        Somos un equipo de diseñadores y desarrolladores dedicados a crear una web inclusiva, donde la tecnología sea accesible para todos. 
                    </p>
                    <p className="text-xl">
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