function activar(){
var texto = document.getElementById("Texto").value;
var separador =" ";

dividirCadena(texto, separador);
}
var conteoVocales = 0;
var conteoConsonantes =0;
function dividirCadena(cadenaADividir,separador) {

    var arrayDeCadenas = cadenaADividir.toString().split(separador);

    console.log("<br>El texto tiene " + arrayDeCadenas.length + " palabras ");
    for (var i=0; i < arrayDeCadenas.length; i++) {
        console.log(arrayDeCadenas[i].toString() + " / ");

        var variable = arrayDeCadenas[i].split("");
        for (var o=0; o < variable.length; o++) {
            console.log(variable[o].toString() + " / " + o);
            var conteo = compararLetra(variable[o]) ;
            console.log(conteo);

            if (conteo == 0)
            {
                conteoVocales = conteoVocales+1;
            }
            if (conteo == 2)
            {
                conteoConsonantes = conteoConsonantes+1;
            }

        }

    }   
    console.log ("hay consonantes:"+conteoConsonantes);
    console.log ("hay voxales:"+conteoVocales);
        cadenaUsada(arrayDeCadenas);

 }

 function compararLetra(letra){

    var arregloVocal = ['a','e','i','o','u'];
    var arregloConsonante = ['b','c','d','f','g','h','i','j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z'];


    for(var i=0; i<arregloVocal.length; i++)

    {
        if (letra == arregloVocal[i]){
            return 0;
        }else{
            for(var e=0; e<arregloConsonante.length; e++)

            {
                if (letra == arregloConsonante[e]){
                    return 2;
                }           
            }
        }           
    }
 }

 function cadenaUsada(cadena){
    var masUsada = 0;
    console.log("tamaño cadena"+cadena);
    for(var i=0; i<cadena.length; i++){
        var palabra = cadena[i];
        for (var o=0; o<cadena.length; o++){
            console.log(palabra+"=="+cadena[0])

            if(palabra == cadena[o]){
                masUsada = masUsada + 1;
            }
        }
    }
    masUsada = masUsada-cadena.length;
    console.log("La mas usada "+masUsada)

 }
