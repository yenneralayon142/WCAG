export const fullTeam = [
    {
        id: 1,
        url: "pendiente",
        name: "Kevin Lopez",
        role: "Investigador Experto",
        description: "Ayudé con la creación de un sitio web.",
    },
    {
        id: 2,
        url: "/team/yenner-alayon.jpg",
        name: "Yenner Alayon",
        role: "Investigador Junior",
        description: "Ayudé con la creación de un sitio web.",
    },
    {
        id: 3,
        url: "/team/andres-gutierrez.jpg",
        name: "Andrés Gutiérrez Hurtado",
        role: "Monitor",
        description: "Ayudar con el levantamiento de información, desarrollo de las herramientas de accesibilidad, desarrollo front-end y control de versiones de la página web.",
    },
    {
        id: 4,
        url: "pendiente",
        name: "Luna Sofia Pinzón Bejarano",
        role: "Diseñadora",
        description: "Ayudé con la creación de un sitio web.",
    },
    {
        id: 5,
        url: "pendiente",
        name: "Angie Gomez",
        role: "Diseñadora",
        description: "Ayudé con la creación de un sitio web.",
    },
    {
        id: 6,
        url: "pendiente",
        name: "Angie Gomez",
        role: "Diseñadora",
        description: "Ayudé con la creación de un sitio web.",
    },
    {
        id: 7,
        url: "pendiente",
        name: "Lina Mercedes",
        role: "Diseñadora",
        description: "Ayudé con la creación de un sitio web.",
    }
];

export const investigationTeam = [
    {
        position: 1,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 1)],
    },
    {
        position: 2,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 2)],
    },
];

export const developerTeam = [
    {
        position: 1,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 3)],
    },
    {
        position: 2,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 2)],
    },
];

export const designerTeam = [
    {
        position: 1,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 4)],
    },
    {
        position: 2,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 5)],
    },
    {
        position: 3,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 6)],
    },
    {
        position: 4,
        ...fullTeam[fullTeam.findIndex((member) => member.id === 7)],
    },
];
