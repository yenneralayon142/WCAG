import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="docs__sidebar">
            <h3 className="text--subtitle text--blue text--center">Menú</h3>
            <div className="docs__sidebar__list">
                <Link className="text--normal" to="/docs">Introducción</Link>
                <Link className="text--normal" to="/docs/perceptible">Perceptible</Link>
                <Link className="text--normal" to="/docs/operable">Operable</Link>
                <Link className="text--normal" to="/docs/comprensible">Comprensible</Link>
                <Link className="text--normal" to="/docs/robusto">Robusto</Link>
            </div>
        </div>
    );
}
