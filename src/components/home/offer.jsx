import Service from "../service";

export default function Offer() {
    return (
        <section>
            <div className="container hero">
                <section className="services">
                    <h2 className="font-bold text-4xl text--blue">¿Qué ofrecemos?</h2>
                    <div className="services__container">
                        <Service image="/gestion-de-la-informacion.png" title="Información" text="Relacionada con las directrices WCAG"/>
                        <Service image="/expediente1.png" title="Documentación" text="Guía para una mejor comprensión" />
                        <Service image="/codificacion2.png" title="HTML / CSS" text="Modelos para programar fácilmente" />
                    </div>
                </section>
            </div>
        </section>
    );
}
