export default function Service(props) {
    const { image, title, text } = props;

    return (
        <article className="service">
            <figure className="service__icon">
                <img src={image} alt="Imagen de servicio" className="image" />
            </figure>
            <div>
                <h3 className="text-2xl text--green">{title}</h3>
                <p className="text-sm">{text}</p>
            </div>
        </article>
    );    
}