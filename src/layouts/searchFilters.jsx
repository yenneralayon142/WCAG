import { DropDownList } from "@progress/kendo-react-dropdowns";

export default function SearchFilters() {
    
    const leverFilter = [
        {
            text: "Nivel A",
            id: "nivel-a",
            value: "a",
        },
        {
            text: "Nivel AA",
            id: "nivel-aa",
            value: "aa",
        },
        {
            text: "Nivel AAA",
            id: "nivel-aaa",
            value: "aaa",
        },
    ];

    const defaultItem = {
        text: "Todos",
        id: "todos",
        value: "todos",
    };

    return (
        <div className="search-filters">
            <h2 className="text--bold text--subtitle text--blue">
                Documentacion
            </h2>
            <input type="text" placeholder="Búsqueda" className="search-bar" />
            <div className="filters">
                <h4 className="text--bold text--subtitle text--blue">
                    Filtros de búsqueda
                </h4>
                <DropDownList
                    style={{
                        width: "300px",
                    }}
                    data={leverFilter}
                    textField="text"
                    dataItemKey="id"
                    onChange={() => {}}
                    defaultItem={defaultItem}
                    id="level-filter"
                />
            </div>
        </div>
    );
}
