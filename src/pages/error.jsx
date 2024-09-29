import { AccessibilityWidget } from "sena-accessibility";

export default function Error() {
    return (
        <main>
            <section>
                <div
                    className="container text--green"
                    style={{ textAlign: "center", margin: "100px auto" }}
                >
                    <a href="/">
                        <figure style={{ width: "200px", margin: "0 auto" }}>
                            <img
                                src="/logo-sena.png"
                                alt="Logo sena"
                                className="image"
                            />
                        </figure>
                    </a>
                    <h1 className="text-8xl">404</h1>
                    <p className="text-2xl">página no encontrada</p>
                </div>
            </section>
            <AccessibilityWidget />
        </main>
    );
}
