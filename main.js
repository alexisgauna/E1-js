const pizza = [
    {
        id: 1,
        nombrePizza: "muzzarella",
        ingredientes: ["muzzarella", "aceituna", "oregano"],
        precio: 620
    },
    {
        id: 2,
        nombrePizza: "napolitana",
        ingredientes: ["muzzarella", "paleta", "tomate", "oregano"],
        precio: 700
    },
    {
        id: 3,
        nombrePizza: "calabresa",
        ingredintes: ["muzzarella", "provolone", "aceitunas", "calabresa"],
        precio: 550
    },
    {
        id: 4,
        nombrePizza: "chacarera",
        ingredientes: ["muzzarella", "paleta", "huevos", "aceituna", "oregano"],
        precio: 650
    },
    {
        id: 5,
        nombrePizza: "especial",
        ingredientes: ["muzzarella", "paleta", "aceituna", "oregano"],
        precio: 450
    },
    {
        id: 6,
        nombrePizza: "anchoa",
        ingredientes: ["muzzarella", "anchoa", "aceituna"],
        precio: 650
    }
];

//a) las pizzas que tengan un id impar

console.log(`--Ejercicio A`)

const idImpar= pizza.forEach((pizza)=>{
        if (pizza.id % 2 !==0){ 
    console.log(`La pizza ${pizza.nombrePizza} tienen id impar`);
    }
})

console.log(`--Ejecicio B`)

const precioMenos= pizza.filter ((pizza)=>{
    if (pizza.precio < 600){
        console.log (`la pizza ${pizza.nombrePizza} tiene un valor menor a 600`);
    }
})

console.log(`--Ejercicio C`)

const nombrePrecio = pizza.map((pizza)=>{
    console.log(`la pizza ${pizza.nombrePizza} tiene un valor de ${pizza.precio}`);
})

console.log(`--Ejercicio D`)



