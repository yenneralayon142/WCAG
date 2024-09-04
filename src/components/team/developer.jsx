import { ScrollView } from "@progress/kendo-react-scrollview";
import CarouselItem from "../carousel-item";

export default function Developer() {
    const items = [
        {
            position: 1,
            url: "/team/andres-gutierrez.jpg",
            name: "Andrés Gutiérrez Hurtado",
            role: "Monitor",
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
            <div className="container carousel">
                <h2 className="text--extralarge text--blue text--center">Equipo de desarrollo de software</h2>
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
