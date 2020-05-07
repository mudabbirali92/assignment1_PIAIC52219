var celc=parseFloat(prompt("Plz enter a temp in Celcius"));
var farh=(celc*9/5)+32;
document.write(celc+'&#186;'+"C into Fahrenheit is: "+farh+'&#186;'+"F");
document.write("<br>");
var far=parseFloat(prompt("Plz enter a temp in Fahrenheit"));
var cel=(far-32)*5/9;
document.write(far+'&#186;'+"F into Celcius is: "+cel+'&#186;'+"C");
