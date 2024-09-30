/**
 * Componente funcional que renderiza una página de error 404 cuando la ruta no es encontrada.
 * @function Error el nombre de la función es Error
 * @returns {JSX.Element} Un elemento JSX que muestra un mensaje de error con el código 404 y un mensaje de "página no encontrada".
 */

export default function Error() {
    return (
        <main>
            <section>
                <div className="container" style={{textAlign: 'center'}}>
                    <h1 className="text-4xl">404</h1>
                    <p className="text--normal">página no encontrada</p>
                </div>
            </section>
        </main>
    );
}