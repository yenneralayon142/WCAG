export const fullTeam = [
    {
        id: 1,
        url: "pendiente",
        name: "William Navarro",
        role: "Lider de semilleros",
        description: `pendiente`,
    },
    {
        id: 2,
        url: "pendiente",
        name: "Juan Pablo Sanabria",
        role: "Investigador Experto",
        description: `Participar en el diseño y planificacion de experimentos o estuidos.
        Ayudar en la redacción de propuestas de investigación y solicitudes de financiamiento.
        Colaborar en la gestión de proyectos de investigación, incluyendo la coordinación de actividades y la comunicación con otros miembros del equipo.
        Contribuir a la difusión de los resultados de la investigación a través de la publicación de artículos en revistas científicas.
        Desarrollo de software para productos propuestos.`,
    },
    {
        id: 3,
        url: "pendiente",
        name: "Kevin Lopez",
        role: "Investigador Senior",
        description: `Investigación y desarrollo de proyectos tecnológicos.
        Generación de informes técnicos, estados del arte, artículos científicos y ponencias.
        Desarrollo de software ara productos propuestos.
        Diseño de arquitecturas de software, asegurando la viabilidad técnica y la inovación en los proyectos.`,
    },
    {
        id: 4,
        url: "/team/yenner-alayon.jpg",
        name: "Yenner Alayon",
        role: "Investigador Junior",
        description: `Participar en el diseño y planificacion de experimentos o estuidos.
        Ayudar en la redacción de propuestas de investigación y solicitudes de financiamiento.
        Colaborar en la gestión de proyectos de investigación, incluyendo la coordinación de actividades y la comunicación con otros miembros del equipo.
        Contribuir a la difusión de los resultados de la investigación a través de la publicación de artículos en revistas científicas.
        Desarrollo de software para productos propuestos.`,
    },
    {
        id: 5,
        url: "/team/andres-gutierrez.jpg",
        name: "Andrés Gutiérrez Hurtado",
        role: "Monitor",
        description: `Ayudar con el levantamiento de información, desarrollo de las herramientas de accesibilidad, desarrollo front-end y control de versiones de la página web.`,
    },
    {
        id: 6,
        url: "/team/luna-pinzon.jpg",
        name: "Luna Sofia Pinzón Bejarano",
        role: "Diseñadora",
        description: `Soy aprendiz del SENA en el tecnólogo de Producción Multimedia, apasionada por la creación de contenido 
        audiovisual y el desarrollo de proyectos innovadores. Me enfoqué en crear una experiencia visual atractiva y funcional 
        que permita a los usuarios navegar de manera fluida e intuitiva, haciendo de la accesibilidad una prioridad en cada decisión de diseño.`,
    },
    {
        id: 7,
        url: "/team/angie-gomez.jpg",
        name: "Angie Daniela Gómez Quevedo",
        role: "Diseñadora",
        description: `Soy aprendiz del SENA en el tecnólogo de Producción Multimedia, he aplicado los conocimientos adquiridos 
        para contribuir de manera significativa al diseño de la página web. Me enfoqué en encontrar soluciones que no solo se 
        ajustaran a las sugerencias del equipo, sino que también respondieran a las necesidades de los usuarios, buscando la accesibilidad.`,
    },
    {
        id: 8,
        url: "/team/lina-muñoz.jpg",
        name: "Lina Mercedes Muñoz González ",
        role: "Diseñadora",
        description: `Soy aprendiz del SENA en el programa de Tecnólogo en Producción Multimedia, he tenido la aportunidad de 
        aplicar mis conocimiento y habilidades en diseño de forma satisfactoria en este proyecto. Mi rol consiste en plantear 
        ideas de diseño accesibles, proponiendo estructuras minimalistas y combinaciones de colores que contrasten para asegurar 
        una mayor visibilidad, siempre con un enfoque en la inclusión.`,
    },
    {
        id: 9,
        url: "pendiente",
        name: "Evelyn Pacheco",
        role: "Diseñadora",
        description: `pendiente`,
    },
];

export const investigationTeam = [
    {
        position: 1,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 4)],
    },
    {
        position: 2,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 1)],
    },
    {
        position: 3,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 2)],
    },
    {
        position: 4,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 3)],
    },
];

export const developerTeam = [
    {
        position: 1,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 5)],
    },
    {
        position: 2,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 4)],
    },
];

export const designerTeam = [
    {
        position: 1,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 6)],
    },
    {
        position: 2,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 7)],
    },
    {
        position: 3,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 8)],
    },
    {
        position: 4,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 9)],
    },
];
