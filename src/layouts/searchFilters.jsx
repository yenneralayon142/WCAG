import { DropDownList } from "@progress/kendo-react-dropdowns";
import { useEffect } from "react";

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

    useEffect(() => {
        document.querySelectorAll(".filter-check").forEach((element) => {
            element.setAttribute("checked", true);
        });
    }, []);

    const handleInputChange = (event) => {
        document.querySelectorAll(".filter-check").forEach((element) => {
            element.removeAttribute("checked");
        });

        switch (event.value.id) {
            case "nivel-a":
                document.getElementById("c-a").setAttribute("checked", true);
                break;
            case "nivel-aa":
                document.getElementById("c-aa").setAttribute("checked", true);
                break;
            case "nivel-aaa":
                document.getElementById("c-aaa").setAttribute("checked", true);
                break;
            case 'todos': 
                document.querySelectorAll(".filter-check").forEach((element) => {
                        element.setAttribute("checked", true);
                    });
                break;
            default:
                break;
        }
    };

    return (
        <div className="search-filters">
            <input type="checkbox" className="hidden filter-check" id="c-a" />
            <input type="checkbox" className="hidden filter-check" id="c-aa" />
            <input type="checkbox" className="hidden filter-check" id="c-aaa" />

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
                    onChange={handleInputChange}
                    defaultItem={defaultItem}
                    id="level-filter"
                />
            </div>
        </div>
    );
}
