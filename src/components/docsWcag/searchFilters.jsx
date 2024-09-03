export default function SearchFilters ()  {
    return (
      <div className="search-filters">
        <h2 className="text--bold text--subtitle text--blue">Documentacion</h2>
        <input type="text" placeholder="Búsqueda" className="search-bar"/>
        <div className="filters">
          <h4 className="text--bold text--subtitle text--blue">Filtros de búsqueda</h4>
          <button>Nivel</button>
        </div>
      </div>
    );
  }