function factorialize(n) {
    var total = 1;
    for (var i = 1; i <= n; i++) {
        total *= i;
    }
    return total;
}

factorialize(5);