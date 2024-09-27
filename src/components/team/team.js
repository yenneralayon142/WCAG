export const fullTeam = [
    {
        id: 1,
        url: "",
        url: "/team/vladimir-cortes.jpg",
        name: "Vladirmir Cortés Arevalo",
        role: "Lider de semilleros",
        description: `pendiente.`,

    },
    {
        id: 2,
        url: "/team/william-navarro.jpg",
        name: "William Navarro",
        role: "Lider de semilleros, investigador e instructor",
        description: `Liderar y gestionar las actividades para garantizar el cumplimiento de términos.
        Realizar seguimiento y control del presupuesto del proyecto
        Realizar seguimiento al cronograma del proyecto
        Apoyar en el desarrollo del software y en el funcionamiento de la misma.
        Liderar aprobar los informes de gestión mensuales, trimestrales y finales del proyecto.
        Liderar la creación de los productos de divulgación.
        Gestionar la infraestructura necesaria para la puesta en marcha de los aplicativos realizados.
        Apoyar en el diseño de arquitecturas de software, asegurando la viabilidad técnica y la innovación en los proyectos.`,
    },
    {
        id: 3,
        url: "/team/alexander-vanegas.jpg",
        name: "Alexander Vanegas",
        role: "Instructor",
        description: `pendiente`,
    },
    {
        id: 4,
        url: "/team/juan-sanabria.jpg",
        name: "Juan Pablo Sanabria Moscoso",
        role: "Investigador Experto",
        description: `Participar en el diseño y planificacion de experimentos o estuidos.
        Ayudar en la redacción de propuestas de investigación y solicitudes de financiamiento.
        Colaborar en la gestión de proyectos de investigación, incluyendo la coordinación de actividades y la comunicación con otros miembros del equipo.
        Contribuir a la difusión de los resultados de la investigación a través de la publicación de artículos en revistas científicas.
        Desarrollo de software para productos propuestos.`,
    },
    {
        id: 5,
        url: "/team/kevin-lopez.jpg",
        name: "Kevin Lopez",
        role: "Investigador Senior",
        description: `Investigación y desarrollo de proyectos tecnológicos.
        Generación de informes técnicos, estados del arte, artículos científicos y ponencias.
        Desarrollo de software ara productos propuestos.
        Diseño de arquitecturas de software, asegurando la viabilidad técnica y la inovación en los proyectos.`,
    },
    {
        id: 6,
        url: "/team/yenner-alayon.jpg",
        name: "Yenner Sneider Alayon Benavides",
        role: "Investigador Junior",
        description: `Participar en el diseño y planificacion de experimentos o estuidos.
        Ayudar en la redacción de propuestas de investigación y solicitudes de financiamiento.
        Colaborar en la gestión de proyectos de investigación, incluyendo la coordinación de actividades y la comunicación con otros miembros del equipo.
        Contribuir a la difusión de los resultados de la investigación a través de la publicación de artículos en revistas científicas.
        Desarrollo de software para productos propuestos.`,
    },
    {
        id: 7,
        url: "/team/andres-gutierrez.jpg",
        name: "Andrés Gutiérrez Hurtado",
        role: "Monitor",
        description: `Ayudar con el levantamiento de información, desarrollo de las herramientas de accesibilidad, desarrollo front-end y control de versiones de la página web.`,
    },
    {
        id: 8,
        url: "/team/luna-pinzon.jpg",
        name: "Luna Sofía Pinzón Bejarano",
        role: "Diseñadora",
        description: `Soy aprendiz del SENA en el tecnólogo de Producción Multimedia, apasionada por la creación de contenido 
        audiovisual y el desarrollo de proyectos innovadores. Me enfoqué en crear una experiencia visual atractiva y funcional 
        que permita a los usuarios navegar de manera fluida e intuitiva, haciendo de la accesibilidad una prioridad en cada decisión de diseño.`,
    },
    {
        id: 9,
        url: "/team/angie-gomez.jpg",
        name: "Angie Daniela Gómez Quevedo",
        role: "Diseñadora",
        description: `Soy aprendiz del SENA en el tecnólogo de Producción Multimedia, he aplicado los conocimientos adquiridos 
        para contribuir de manera significativa al diseño de la página web. Me enfoqué en encontrar soluciones que no solo se 
        ajustaran a las sugerencias del equipo, sino que también respondieran a las necesidades de los usuarios, buscando la accesibilidad.`,
    },
    {
        id: 10,
        url: "/team/lina-muñoz.jpg",
        name: "Lina Mercedes Muñoz González ",
        role: "Diseñadora",
        description: `Soy aprendiz del SENA en el programa de Tecnólogo en Producción Multimedia, he tenido la aportunidad de 
        aplicar mis conocimiento y habilidades en diseño de forma satisfactoria en este proyecto. Mi rol consiste en plantear 
        ideas de diseño accesibles, proponiendo estructuras minimalistas y combinaciones de colores que contrasten para asegurar 
        una mayor visibilidad, siempre con un enfoque en la inclusión.`,
    },
    {
        id: 11,
        url: "/team/evelin-pacheco.jpg",
        name: "Evelyn Sofía Pacheco Sierra",
        role: "Diseñadora",
        description: `Soy aprendiz del SENA en el tecnólogo de Producción Multimedia, apasionado por el diseño web accesible. He 
        aplicado mis conocimientos para desarrollar soluciones que respondan a las necesidades de todos los usuarios, asegurando 
        una navegación inclusiva y amigable, de manera sencilla y cómoda.`,
    },
];

export const investigationTeam = [
    {
        position: 1,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 6)], // Yenner Alayon
    },
    {
        position: 2,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 1)], // Vladimir Cortés
    },
    {
        position: 3,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 2)], // William Navarro
    },
    {
        position: 4,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 3)], // Juan Sanabria
    },
    {
        position: 5,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 4)], // Kevin Lopez
    },
    {
        position: 6,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 5)], // Kevin Lopez
    },
];

export const developerTeam = [
    {
        position: 1,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 7)], // Andrés Gutiérrez Hurtado
    },
    {
        position: 2,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 4)], // Juan Sanabria
    },
    {
        position: 3,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 6)], // Yenner Alayon
    },
];

export const designerTeam = [
    {
        position: 1,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 8)], // Luna Pinzon
    },
    {
        position: 2,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 9)], // Angie Gomez
    },
    {
        position: 3,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 10)], // Lina Muñoz
    },
    {
        position: 4,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 11)], // Evelin Pacheco
    },
];
