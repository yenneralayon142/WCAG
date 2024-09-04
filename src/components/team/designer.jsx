import { ScrollView } from "@progress/kendo-react-scrollview";
import CarouselItem from "../carousel-item";

export default function Designer() {
    const items = [
        {
            position: 1,
            url: "/team/sofia-pinzon.jpg",
            name: "Luna Sofia Pinzón Bejarano",
            role: "Diseñadora",
            description: "Ayude con la creación de un sitio web.",
        },
    ];
    return (
        <section>
            <div className="container carousel carousel--blue">
                <h2 className="text--extralarge text--green text--center">Equipo de diseño</h2>
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
