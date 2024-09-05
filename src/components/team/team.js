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
        url: "pendiente",
        name: "Luna Sofia Pinzón Bejarano",
        role: "Diseñadora",
        description: `pendiente`,
    },
    {
        id: 7,
        url: "pendiente",
        name: "Daniela Gomez",
        role: "Diseñadora",
        description: `pendiente`,
    },
    {
        id: 8,
        url: "pendiente",
        name: "Lina Muñoz",
        role: "Diseñadora",
        description: `pendiente`,
    },
    {
        id: 9,
        url: "pendiente",
        name: "Evelyn Pacheco",
        role: "Diseñadora",
        description: `pendiente`,
    }
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
