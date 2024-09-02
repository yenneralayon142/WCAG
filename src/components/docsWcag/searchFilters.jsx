export default function SearchFilters ()  {
    return (
      <div className="search-filters">
        <input type="text" placeholder="Búsqueda" className="search-bar"/>
        <div className="filters">
          <h4>Filtros de búsqueda</h4>
          <button>Discapacidad</button>
          <button>Directrices WCAG</button>
          <button>Nivel</button>
          <button>Ejemplos</button>
        </div>
      </div>
    );
  }