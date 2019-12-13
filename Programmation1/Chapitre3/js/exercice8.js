// Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5. (Celsius = 5/9(fahrenheit-32))
var celsius;

for (fahrenheit = -40; fahrenheit <= 40; fahrenheit += 5) {
    celsius = Math.round(5/9*(fahrenheit-32));
    document.write(fahrenheit + " F = " + celsius + " C<br>");
}