const personas = [
    { nombre: "Juan", apellidos: "Pérez", edad: 30 },
    { nombre: "María", apellidos: "García", edad: 25 },
    { nombre: "Carlos", apellidos: "López", edad: 28 },
    { nombre: "Ana", apellidos: "Martínez", edad: 22 },
    { nombre: "Luis", apellidos: "Rodríguez", edad: 35 },
    { nombre: "Laura", apellidos: "Hernández", edad: 29 },
    { nombre: "Pedro", apellidos: "Sánchez", edad: 31 },
    { nombre: "Isabel", apellidos: "Díaz", edad: 27 },
    { nombre: "Manuel", apellidos: "Gómez", edad: 32 },
    { nombre: "Sofía", apellidos: "Fernández", edad: 24 },
    // Puedes agregar más personas aquí
];

const personasOrdenadoNombre = personas.sort((a, b) => a.nombre.localeCompare(b.nombre))
console.log(personasOrdenadoNombre)

const personasOrdenadoEdad = personas.sort((a, b) => a.edad - b.edad)
console.log(personasOrdenadoEdad)