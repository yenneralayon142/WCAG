export default function Service(props) {
    const { image, title, text } = props;

    return (
        <article className="service">
            <figure className="service__icon">
                <img src={image} alt="Imagen de servicio" className="image" />
            </figure>
            <div>
                <h3 className="text--extralarge text--dark-green">{title}</h3>
                <p className="text--normal">{text}</p>
            </div>
        </article>
    );    
}