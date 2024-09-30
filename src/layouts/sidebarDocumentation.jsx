import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="docs__sidebar">
            <h3 className="text-3xl text--blue text-center">Menú</h3>
            <div className="docs__sidebar__list">
                <Link to="/docs">Introducción</Link>
                <Link to="/docs/perceptible">Perceptible</Link>
                <Link to="/docs/operable">Operable</Link>
                <Link to="/docs/comprensible">Comprensible</Link>
                <Link to="/docs/robusto">Robusto</Link>
            </div>
        </div>
    );
}
