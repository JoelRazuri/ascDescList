/*
    Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los
    numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) 
    devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const ascDescList = (list = undefined) => {
    if (list === undefined) return console.warn("No ingresaste una lista de números");
    if (!(list instanceof Array)) return console.error("El valor que ingresaste no es una lista");
    if (list.length === 0) return console.error("La lista esta vacia");

    for (let num of list){
        if (typeof num !== "number") return console.error(`El valor '${num}' ingresado, NO es un número`);
    }

    return console.info({
        list,
        asc: list.map(el => el).sort(),
        desc:list.map(el => el).sort().reverse()
    });
}


console.info("EJERCICIO 24");
ascDescList();
ascDescList(23);
ascDescList([1, "hola"]);
ascDescList([7, 5, 7, 8, 6]);
