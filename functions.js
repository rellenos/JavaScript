let name = "Daniel";
let surname = "Mansilla";
let age = 24;
let pet = false;

function sum(x,y) {
    return x + y;
}

function calcul(operador1,operador2,operante) {
    if (operante == "+")
        resultat = operador1 + operador2;
    else if (operante == "-")
            resultat = operador1 - operador2;
        else if (operante == "*")
                resultat = operador1 * operador2;
            else
                resultat = operador1 / operador2;
    return resultat;
}