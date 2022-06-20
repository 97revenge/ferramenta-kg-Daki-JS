/* const bagRider = {
    kg,
    qnt
}; */


// const bagRider= (kg, qnt) =>  ;



const carrinho = () => value(0);


/* REFRIGERAÇÃO */

let congelado = () => e ? true : false;


/* REFRIGERAÇÃO */


/* GLOBAL CLASSES  */



// const batataDoce = () => { produto:hortifruttiClass["batata-doce "] ,  hortifruttiClass.[{$kg}], hortifruttiClass.qnt[{$qnt}]}
const hort = (hortifruttiClass) => {
    hortifruttiClass = {
        "batata-doce": { kg: 500, qnt: "2 a 3 UNID", value: 5.99 },
        "tomate saladete": { kg: 500, qnt: "3 a 4 UNID", value: 5.94 },
        "beterraba": { kg: 500, qnt: "3 a 5 UNID", value: 7.99 },
        "Pepino Comum": { kg: 500, qnt: "3 a 6 UNID", value: 3.99 },
        "cenoura": { kg: 500, qnt: "3 a 6 UNID", value: 8.09 },
        "Mini cebola Bandeja": { kg: 500, qnt: "3 a 6 UNID", value: 3.99 },
    };
    return hortifruttiClass.lenght();

}

var list = hort.hortifruttiClass.filter(function(item) {
    return (item[0].kg.hort == 500 && item[0].qnt.hort && item[0].value.hort)



});







const acougueClass = {

    frangos: {
        "filé de frango para strogonoff": {
            kg: 500,
            congelado: false,
            value: 16.99
        },
        "sobrecoxa de frango sem pele": {
            kg: 500,
            congelado: false,
            value: 14.99
        },
        "Filé de frango em bife içougue": {
            kg: 500,
            congelado: false,
            value: 15.99
        }




    },
    bovinos: {
        "Carne moida de primeira": {
            kg: 500,
            congelado: false,
            value: 15.99
        },

        "bife de Ancho": {
            kg: 500,
            congelado: false,



        }


    }


    /*  frangos: {
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

 */



};
const congeladosClass = {};
const padariaClass = {};
const laticinioClass = {};
const destiladosClass = {};
const bebidasClass = {};



/* GLOBAL CATEGORIES  */

congeladosClass = cong;
padariaClass = pada;
laticinioClass = lati;
destiladosClass = dest;
bebidasClass = bebi;
value = "R$:";



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

function addingBag(bagRider, kg) {};

// function calculateKg(carrinho, kg) { // AGUARDANDO PULL REQUEST  
//     if (carrinho <= kg(30000)) {
//         console.log("pesado demais para nossos Riders Levarem!!!")
//     } else if (carrinho <= kg(2000)) {
//         console.log("está bem pesado, nossos riders podem demorar um pouco para chegar no seu destino. quer rever algo?");
//         return carrinho;
//     } 

// } 


function calculateKg(carrinho, kg, carrinho) {
    carrinho <= kg(30000) ?
        console.log("pesado demais para nossos Riders Levarem!!!") :
        console.log("parece que esta pesado... nossos riders podem demorar um pouco para chegar no seu destino. quer rever algo?")

    return value;

    ;
}


/*
ANOTAÇOES DO CODIGO DIA 31/05
"serão mais ou menos 6 itens de cada categoria no momento. Valor, Peso e Quantidade atualizados. 
"
"é necessario criar uma conexao entre calculateKg e DropinBag".


ANOTAÇÕES DO CODIGO DIA 19/06
 "Trabalhei um pouco mais no codigo ... o importante é fazer aconteçer 
 aplicar variaveis novas e refatorar o codigo sao duas ferramentas que me ajudam a manter o conceito produtivo e ativo , 
 mesmo que eu nao mexo no projeto a mais de 15 dias ...



 
 "



*/