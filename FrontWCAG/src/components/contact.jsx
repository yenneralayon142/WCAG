export const Contact = () => {
    return (
        <section className="form" id="contact">
        <h2 className="form__tittle">Formulario</h2>
        <form className="form__form" action="https://formspree.io/f/mnqejjpd" method="POST">
            <div className="form__input-container">
                <label>Nombre
                    <input type="text" placeholder="John" aria-label="Espacio para escribir nombre"/>
                </label>
            </div>
            <div className="form__input-container">
                <label>Apellido
                    <input type="text" placeholder="Doe" name="name" aria-label="Espacio para escribir Apellido"/>
                </label>
            </div>
            <div className="form__input-container">
                <label>E-mail
                    <input type="email" placeholder="mail@example.com" name="email" aria-label="Espacio para escribir correo"/>
                </label>
            </div>
            <div className="form__input-container">
                <label>Mensaje
                    <textarea type="text" placeholder="Tu mensaje" name="message"></textarea>
                </label>
            </div>
            <div className="form__button-container">
                <input type="submit" value="Enviar" />
            </div>
        </form>
    </section>
    );
}