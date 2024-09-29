import { useEffect, useState } from "react";
import { DropDownList, AutoComplete } from "@progress/kendo-react-dropdowns";
import { filterBy } from "@progress/kendo-data-query";
import { useNavigate } from "react-router-dom";
import { source, links } from "./docsSearch";

export default function SearchFilters() {

    const navigation = useNavigate();

    const [state, setState] = useState({
        data: source,
        value: "",
        suggest: "",
    });

    const filterData = (value) => {
        const data = source;
        const filter = {
            value: value,
            operator: "startswith",
            ignoreCase: true,
        };
        return value ? filterBy(data, filter) : data;
    };

    const handleSearchChange = (event) => {
        const value = event.value;
        setState({
            data: filterData(value),
            value: value,
            suggest: event.suggestion ? event.suggestion.value : "",
        });
    };

    const handleSearchClose = () => {
        const index = links.findIndex(x => x.text.toLowerCase() == state.value.toLowerCase() || x.text.toLocaleLowerCase() == state.suggest.toLowerCase() )
        if (index >= 0) {
            navigation( links[index].url );
        } else {
            console.error("Elemento no encontrado: " + state.value)
        }
    }

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
            case "todos":
                document
                    .querySelectorAll(".filter-check")
                    .forEach((element) => {
                        element.setAttribute("checked", true);
                    });
                break;
            default:
                break;
        }
    };

    return (
        <div className="docs__search-filters">
            <input type="checkbox" className="hidden filter-check" id="c-a" />
            <input type="checkbox" className="hidden filter-check" id="c-aa" />
            <input type="checkbox" className="hidden filter-check" id="c-aaa" />

            <h2 className="font-bold text-3xl text--blue text--truncate">
                Documentacion
            </h2>

            <AutoComplete
                data={links}
                value={state.value}
                suggest={true}
                onChange={handleSearchChange}
                onClose={handleSearchClose}
                textField="text"
                placeholder="Buscar tema..."
            />
            <div className="docs__filters">
                <h4 className="font-bold text-xl text--blue">
                    Filtros de búsqueda
                </h4>
                <DropDownList
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
