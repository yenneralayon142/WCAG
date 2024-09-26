import { Button } from "@progress/kendo-react-buttons";

export default function AnalyzeList({ data }) {
    const dataList = data.data ? (
        data.data.map((item, index) => (
            <li key={item.id}>
                <div>
                    <p className="url__title">
                        <strong>Dominio:</strong> {item.url.split("/")[2]}
                    </p>
                    <p>
                        <strong>Link:</strong>
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.url}
                        </a>
                    </p>
                    <p>
                        <strong>Fecha:</strong>
                        {new Date(item.date).toLocaleDateString("es-ES")}
                    </p>
                </div>
                <a href={`/searchUrl/${item.id}`}>
                    <Button themeColor={"primary"}>Ver más información</Button>
                </a>
            </li>
        ))
    ) : (
        <p>No hay resultados</p>
    );
    return <ul className="url__list">{dataList}</ul>;
}
