export default function Index(){
    return(
        <>
           <header className="description">
                <section className="description__container">
                    <img src="../../public/ImagenInicio.png" alt="Imagen sobre accesibilidad Web" />
                    <h1 className="description__tiitle">Aprende a <br/>hacer tu<br/>pagina web<br/> <span className="description__tittle new-color">accesible<br/>con nosotros</span></h1>
                </section>
            </header>
            <main>
                <div className="objective-container">
                        <div className="objective-title">
                            <h2>¿Cuál es <br/>nuestro <br />objetivo?</h2>
                        </div>
                        <div className="objective-description">
                            <p>Esta página facilita a los programadores/diseñadores web la creación de sitios que cumplan con los estándares WCAG, garantizando la accesibilidad para todos los usuarios, incluidas personas con discapacidades.</p>
                        </div>
                </div>
                <section className="services">
                        <h2 className="services__title">¿Qué ofrecemos?</h2>
                        <div className="services__container">
                            <div className="service">
                                <img src="../../public/gestion-de-la-informacion.png" alt="Icono de Información" className="service__icon"/>
                                <h3 className="service__title">Información</h3>
                                <p className="service__description">Relacionada con las directrices WCAG</p>
                            </div>
                            <div className="service">
                                <img src="../../public/expediente1.png" alt="Icono de Documentación" className="service__icon"/>
                                <h3 className="service__title">Documentación</h3>
                                <p className="service__description">Guía para una mejor comprensión</p>
                            </div>
                            <div className="service">
                                <img src="codificacion2.png" alt="Icono de HTML/CSS" className="service__icon"/>
                                <h3 className="service__title">HTML / CSS</h3>
                                <p className="service__description">Modelos para programar fácilmente</p>
                            </div>
                        </div>
                </section>
            </main>
        </>
    );
}