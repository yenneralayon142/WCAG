import { ScrollView } from "@progress/kendo-react-scrollview";
import CarouselItem from "../carousel-item";
import { developerTeam } from "./team";

export default function Developer() {
    
    return (
        <section>
            <div className="container carousel">
                <h2 className="text-2xl text--blue text-center">Equipo de desarrollo de software</h2>
                <ScrollView
                    style={{
                        width: '100%',
                        height: 500,
                    }}
                    pageable={false}
                    endless={true}
                >
                    {developerTeam.map((item, index) => {
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
