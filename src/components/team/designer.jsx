import { ScrollView } from "@progress/kendo-react-scrollview";
import CarouselItem from "../carousel-item";
import { designerTeam } from "./team";

export default function Designer() {
    return (
        <section>
            <div className="container carousel carousel--blue">
                <h2 className="text-2xl text--green text-center">Equipo de diseño</h2>
                <ScrollView
                    style={{
                        width: '100%',
                        height: 500,
                    }}
                    pageable={false}
                    endless={true}
                >
                    {designerTeam.map((item, index) => {
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
