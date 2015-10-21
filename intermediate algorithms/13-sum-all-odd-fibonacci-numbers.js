function sumFibs(num) {
    var a = 0;
    var b = 1;
    var c = 1;
    var total = 0;

while (c <= num) {
    if ((c % 2) > 0) 
    total += c;
    c = a + b;
    b = a + b;
    a = b - a;
    
}
return total;
}
sumFibs(75025);