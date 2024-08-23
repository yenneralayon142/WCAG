export default function ContactForm() {
  return (
      <section>
            <div className="container contact">
                    <h2 className="text--subtitle text--center text--blue"> ¿Quienes somos? </h2>
                    <form action="" method="" className="bg--green form">
                        <div className="form__group">
                            <div className="form__input">
                                <label htmlFor="">Nombre:</label>
                                <input type="text" />
                            </div>
                            <div className="form__input">
                                <label htmlFor="">Email:</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__input">
                                <label htmlFor="">Asunto:</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__input">
                                <label htmlFor="">Mensaje</label>
                                <textarea > </textarea>
                            </div>
                        </div>
                    </form>
            </div>
      </section>
  );
}