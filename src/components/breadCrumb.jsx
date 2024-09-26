import { useNavigate, useLocation } from "react-router-dom";
import { Breadcrumb } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import * as icons from "@progress/kendo-svg-icons";

export default function BreadCrumb() {
    const navigate = useNavigate();
    const location = useLocation();

    const pathSegments = location.pathname
        .split("/")
        .filter((segment) => segment);

    const items = [
        {
            id: "home",
            text: "Inicio",
            path: "/",
            icon: <SvgIcon icon={icons.homeIcon} />,
        },
        ...pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const itemText = segment.charAt(0).toUpperCase() + segment.slice(1);
            return {
                id: segment,
                text:
                    itemText == "Docs"
                        ? "Documentación"
                        : itemText == "Team"
                        ? "Equipo"
                        : itemText == "SearchUrl"
                        ? "Búsqueda url"
                        : itemText,
                path: path,
            };
        }),
    ];

    if (items.length == 3 && items[1].text == "Búsqueda url") {
        items[2].text = "Detalles dominio";
    }

    const handleItemSelect = (event) => {
        const itemIndex = items.findIndex(
            (curValue) => curValue.id === event.id
        );
        redirect(items[itemIndex]);
    };

    const handleKeyDown = (event) => {
        if (event.nativeEvent.keyCode === 13) {
            const itemIndex = items.findIndex(
                (curValue) => curValue.id === event.id
            );
            redirect(items[itemIndex]);
        }
    };

    const redirect = (selectedItem) => {
        if (selectedItem && selectedItem.path) {
            navigate(selectedItem.path);
        }
    };
    return (
        <div className="container">
            <Breadcrumb
                data={items}
                onItemSelect={handleItemSelect}
                onKeyDown={handleKeyDown}
                size="large"
            />
        </div>
    );
}
