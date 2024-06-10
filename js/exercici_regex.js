function esEmailValid(email) {
    patro = /^(\w+|\d+)@{1}(\w+|\d+)\.{1}\w+/; //^ que comenci amb lletra (\w) o numero (\d), (+) minim 1 caracter. A continuació ha de contenir una arroba @{1}, seguit de lletra o (\w) numero (\d), (+) minim 1 caracter. Desprès ha de tenir un punt (\.) i terminar amb una o mes lletres (\w+)
    return patro.test(email);
}

function extreureNombresTelefon(telefon) {
    patro = /([(]\d{3}[)]\s\d{3}[-]\d{4})|(\d{3}\s\d{2}\s\d{2}\s\d{2})/g;
    return telefon.match(patro);
}

function esCpValid(cp) {
    patro = /^\d{5}$/; //^ y $ fa que la coincidencia ha de començar y terminar amb el patró assignat
    return patro.test(cp);
}

function extraureDominiEmail(domini) {
    patro = /(?<=@)(\w+|\d+)[.]\w+/g; //"(?<=@)" fa que busqui a partir de l'arroba
    return domini.match(patro);
}

function esTargetaCreditValida(tarjeta) {
    patro = /((\d{4}\s*){4}(?<!\s))|(\d{16})/;
    return patro.test(tarjeta);
}

function extraureHashtags(hashtags) {
    patro = /\#(\w+|\d+)/g;
    return hashtags.match(patro);
}

// function esPasswordValida(contrasenya) {
//     patro = /^([A-Z]+)([a-z]+)([0-9]+)([#?!@$%^&*- ]+)/;
//     return patro.test(contrasenya);
// }

function extraureDates(data) {
    patro = /(\d{2}[/]){2}\d{4}/g;
    return data.match(patro);
}

// function treureParaulesDuplicades(duplicat) {

// }