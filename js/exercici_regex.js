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
    patro = /#(\w|\d)+/g;
    return hashtags.match(patro);
}

function esPasswordValida(contrasenya) {
    patro = /[A-Za-z0-9#?!@$%^&*-]+/;
    patro = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return patro.test(contrasenya);
}

function extraureDates(data) {
    patro = /(\d{2}[/]){2}\d{4}/g;
    return data.match(patro);
}

function treureParaulesDuplicades(duplicat) {
    patro = /\b(\w+)\b(?:\s+\1\b)+/g;
    return duplicat.replace(patro,'$1')
}

function esURLValida(link) {
    patro = /(http|https|ftp)[:][/]{2}(\w+[.|/]){2,}\w+/;
    return patro.test(link);
}

function esSegSocValida(numss) {
    patro = /^\d{3}[-]\d{2}[-]\d{4}$/;
    return patro.test(numss);
}

function extraureUsuarisTwitter(usuari) {
    patro = /\@(\d+|\w+|_)/g;
    return usuari.match(patro);
}

function esEAN13Valid(codi) {
    patro = /^\d{13}$/;
    return patro.test(codi);
}

function extractURLs(url) {
    patro = /(https|http|ftp)[:][/]{2}\w+[.](\w+|\d+)[.]\w+/g;
    return url.match(patro);
}

function esFitxerValid(fitxer) {
    patro = /(\w|\d)*[.]\w{1,3}$/;
    return patro.test(fitxer);
}

function extraureColorsHex(color) {
    patro = /[#](\b(\w|\d){3}\b|\b(\w|\d){6}\b)/g;
    return color.match(patro);
}

function esISBN10Valid(isbn) {
    patro = /\b(\d{9}X?)[^0]\b/;
    return patro.test(isbn);
}

function extraureParaulesMajuscula(mayus) {
    patro = /[A-Z]\w+/g;
    return mayus.match(patro);
}

function esMatriculaValida(matricula) {
    patro = /\b[A-Z]{3}[-]\d+\b/;
    return patro.test(matricula);
}

function extraurePreus(preu) {
    patro = /[$]\d+[.]\d{2}\b/g;
    return preu.match(patro);
}