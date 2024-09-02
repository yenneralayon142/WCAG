import { Button } from "@progress/kendo-react-buttons";
import * as icons from "@progress/kendo-svg-icons";

export default function ContactForm() {
  return (
      <section>
            <div className="container contact">
                    <h2 className="text--subtitle text--center text--blue"> Queremos saber tu opinión </h2>
                    <p className="text--normal">
                    Tu experiencia es muy importante para nosotros, y nos gustaría conocer tu opinión sobre el uso y funcionamiento de nuestra página web. Tu retroalimentación nos ayudará a mejorar y ofrecerte una mejor experiencia. Agradecemos mucho el tiempo que dediques a compartir tus comentarios con nosotros. A continuación, te invitamos a compartir tus pensamientos y comentarios:
                    </p>
                    <form action="" method="" className="bg--green form">
                        <div className="form__group form__group--flex">
                            <div className="form__input">
                                <label htmlFor="" className="text--white">Nombre:</label>
                                <input type="text" placeholder="Ingresa tu nombre." />
                            </div>
                            <div className="form__input">
                                <label htmlFor="" className="text--white">Email:</label>
                                <input type="text" placeholder="ejemplo@gmail.com"/>
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__input">
                                <label htmlFor="" className="text--white">Asunto:</label>
                                <input type="text" placeholder="Escribe de qué trata tu mensaje" />
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="form__input">
                                <label htmlFor="" className="text--white">Mensaje:</label>
                                <textarea style={{resize: 'none', height: '100px'}}></textarea>
                            </div>
                        </div>
                        <Button className="button--orange" themeColor="warning" svgIcon={icons.uploadIcon}>
                            Enviar
                        </Button>
                    </form>
            </div>
      </section>
  );
}