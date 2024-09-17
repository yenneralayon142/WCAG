export default function CarouselItem(props) {
    const { position, url, name, role, description } = props;

    return (    
        <div className="carousel__item text--center">
            <div>
                <figure className="carousel__item__image">
                    <img src={url} alt={`Foto de ${name}`} className="image image--cover" />
                </figure>
                <h4 className="text--large">{name}</h4>
                <p className="text--normal">{role}</p>
            </div>
            <div className="carousel__card text--black">
                <p className="text--normal">{description}</p>
                <button>Más informacion</button>
            </div>
        </div>
    );
}