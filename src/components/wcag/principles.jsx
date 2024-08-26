import Principle from "../principle";

export default function Principles() {
    return(
        <section>
            <div className="container principles">
                <h2 className="text--subtitle text--blue">Los principios WCAG</h2>
                <p className="text--extralarge">La wcag se organiza en torno a cuatro principios fundamentales</p>
                <div className="principles__cards__container">
                    <Principle title="Perceptible" image="/icons/eye.png" />
                    <Principle title="Operable" image="/icons/layers.png" />
                    <Principle title="Comprensible" image="/icons/key.png" />
                    <Principle title="Robusto" image="/icons/shield.png" />
                </div>
                <p className="text--extralarge">Puedes explorar cada uno de estos principios y ver todos los parametros del estándar actualizados en tiempo real y haciendo click en los íconos correspondientes.</p>
            </div>
        </section>
    );
}