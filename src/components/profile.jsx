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
            </main>
        </>
    );
}