import { ScrollView } from "@progress/kendo-react-scrollview";
import CarouselItem from "../carousel-item";
import { investigationTeam } from "./team";

export default function Investigation() {
    return (
        <section>
            <div className="container carousel carousel--green">
                <h2 className="text--extralarge text--green text--center">Equipo de investigación</h2>
                <ScrollView
                    style={{
                        width: '100%',
                        height: 500,
                    }}
                    pageable={false}
                    endless={true}
                >
                    {investigationTeam.map((item, index) => {
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
