import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar__Documentation">
      <h3 className="text--bold text--subtitle text--blue">Menú</h3>
      <ul>
        <li><Link to="/perceptible">Perceptible</Link></li>
        <li><Link to="/operable">Operable</Link></li>
        <li><Link to="/comprensible">Comprensible</Link></li>
        <li><Link to="/robusto">Robusto</Link></li>
      </ul>
    </div>
  );
}
