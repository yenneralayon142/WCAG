export default function Principle(props) {
    const { image, title } = props;
    return(
        <article className="principles__card">
            <figure className="principles__card__image">
                <img src={image} alt="Imagen principio" className="image" />
            </figure>   
            <h2 className="text--extralarge text--green">{title}</h2>
        </article>        
    );
}