export default function Hero() {
    return (
        <section>
            <div className="container hero">
                <figure className="hero__figure">
                    <img
                        src="/ImagenInicio.png"
                        alt="Imagen sobre accesibilidad Web"
                        className="image"
                    />
                </figure>
                <div className="hero__title">
                    <h1 className="text--title text--blue"> Aprende a hacer tu página web <span className="text--green"> accesible <br/>con nosotros </span> </h1>
                </div>
            </div>
        </section>
    );
}
