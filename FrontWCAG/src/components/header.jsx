import sena from '../assets/sena.svg'  

export const Header = () => {
    return (
        <header className="header">
            <input type="checkbox" id="open-menu" className="header__checkbox" />
            <label htmlFor="open-menu" className="header__open-nav-button" role="button">
                =
            </label>
            <div className="header__logo-container">
                <img src={sena} alt="Logo" className="header__logo" />
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <a href="#profile">Inicio</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#portfolio">Principios</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#contact"> Formulario </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


