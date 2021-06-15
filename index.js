
//console.log("hello world!");

//Calcular el IVA de una cantidad en M.N.
function calcularIva(){
    var tasaIva = 12;
    var monto = 300;
    var iva;

    //Calculo del Iva
    console.log("Calculo de iva: ")
    console.log(iva = (monto * tasaIva)/100);
    
}

//Calcular pendiente de una recta.
function calcularPendiente(){
    var y2 = 12;
    var y1 = 32;
    var x2 = 8;
    var x1 = 6;
    var resultado;

    //Fromula de calcular pendiente de una recta.
    // m=(y2-y1)/(x2-x1)
    console.log("Pendiente de una recta: ")
    console.log(resultado = (y2-y1)/(x2-x1));

}

//Calcular teorema de pitagoras.
function teoremaPitagoras(){
    var a = 8;
    var b = 4;
    var c;
    //Formula para calcular teorema de pitagoras.
    console.log("Calculo de teorema de Pitagoras: ")
    console.log(c = (a*2) + (b*2));

}

//Recibir tres valores y obtener max, min, sumarlos y promedio.
function valores(){
    var valor1 = 3;
    var valor2 = 18;
    var valor3 = 10;
    var max;
    var min;
    var suma; 
    var prom;

    console.log("Suma de los tres valores: ")
    console.log(suma = valor1 + valor2 + valor3);
    
    console.log("Promedio de los tres valores: ")
    console.log(prom = suma / 3);

    console.log("Valor Maximo: ")
    console.log(max = Math.max(valor1, valor2, valor3));

    console.log("Valor Minimo: ")
    console.log(min = Math.min(valor1, valor2, valor3));

}

//Calcular si un numero es par o impar
function parImpar(){
    var num = 5;

    if  (num/2 == 0){
        console.log("El número introducido es par.");
    }else{
        console.log("El número introducido es impar.");
    }
}

console.log(calcularIva());
console.log(calcularPendiente());
console.log(teoremaPitagoras());
console.log(valores());
console.log(parImpar());
