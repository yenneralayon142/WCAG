import { ScrollView } from "@progress/kendo-react-scrollview";
import CarouselItem from "../carousel-item";

export default function Investigation() {
    const items = [
        {
            position: 1,
            url: "/team/kevin-lopez.jpg",
            name: "Kevin Lopez",
            role: "Investigador Experto",
            description: "Ayude con la creación de un sitio web.",
        },
        {
            position: 2,
            url: "/team/yenner-alayon.jpg",
            name: "Yenner Alayon",
            role: "Investigador Junior",
            description: "Ayude con la creación de un sitio web.",
        },
    ];
    return (
        <section>
            <div className="container carousel carousel--green">
                <h2 className="text--extralarge text--green text--center">Equipo de investigación y monitor</h2>
                <ScrollView
                    style={{
                        width: '100%',
                        height: 500,
                    }}
                    pageable={false}
                >
                    {items.map((item, index) => {
                        return (
                            <CarouselItem
                                key={item.position}
                                position={item.position}
                                url={item.url}
                                name={item.name}
                                role={item.role}
                                description={item.description}
                            />
                        );
                    })}
                </ScrollView>
            </div>
        </section>
    );
}
