const bagRider = {
    kg,
    qnt
};
const carrinho = value(0);


/* REFRIGERAÇÃO */

let congelado = true;

/* REFRIGERAÇÃO */


/* GLOBAL CLASSES  */

const hortifruttiClass = {
    "batata doce ": {
        kg: 500,
        qnt: "2 a 3 UNID",
        value: 5.99
    },
    "tomate saladete": {
        kg: 500,
        qnt: "3 a 4 UNID",
        value: 5.94
    },
    "beterraba": {
        kg: 500,
        qnt: "3 a 5 UNID",
        value: 7.99

    },
    "Pepino Comum": {
        kg: 500,
        qnt: "3 a 6 UNID",
        value: 3.99

    },
    "cenoura": {
        kg: 500,
        qnt: "3 a 6 UNID",
        value: 8.09
    },
    "Mini cebola Bandeja": {
        kg: 500,
        qnt: "3 a 6 UNID",
        value: 3.99
    }



};
const acougueClass = {
    frangos: {
        ["filé de frango para strogonoff", 500, { $value: 16.99 }]
        ["sobrecoxa de frango sem pele", 500, { $value: 14.99 }]
        ["Filé de frango em bife içougue", 500, { $value: 15.99 }]
    },
    bovinos: {
        ["Carne Moida de primeira", 500, { $value: 29.99 }]
        ["Bife de ancho ", 500, { $value: 45.65 }]
        ["Picanha Nobre", kg(1), { $value: 130.90 }]
    },
    suinos: {
        ["filet mignon Suino", 500, { $value: 17.99 }]
        ["costelinha suina em tiras", 500, { $value: 17.90 }]
    }





};
const congeladosClass = {};
const padariaClass = {};
const laticinioClass = {};
const destiladosClass = {};
const bebidasClass = {};



/* GLOBAL CATEGORIES  */
hortifruttiClass = hort;
congeladosClass = cong;
padariaClass = pada;
laticinioClass = lati;
destiladosClass = dest;
bebidasClass = bebi;



function dropinBag(bagRider, kg, carrinho) {

    switch (bagRider) {
        case 1:
            low["50%", 50, "nao esta cheio"]
        case 2:
            mid["70%", 70]
        case 3:
            high["100%", 100, "está cheia"]
        default:
            ["vazia", null, ""]
    }
    return bagRider();




}

function addingBag(bagRider, kg, )





/*
ANOTAÇOES DO CODIGO DIA 31/05
"serão mais ou menos 6 itens de cada categoria no momento. Valor, Peso e Quantidade atualizados. 
"



*/