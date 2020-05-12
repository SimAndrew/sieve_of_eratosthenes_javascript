function sieveOfEratosthenes(n) {
    var primes = [];
    for (var i = 0; i <= n; i++){
        primes[i] = true;
    }
    primes[0] = false;
    primes[1] = false;

    for (var i = 2; i <= Math.sqrt(n); i++){
        for (var j = 2; j * i <= n; j++){
            primes[i * j] = false;
        }
    }
    var result = [];
    for (var i = 0; i < primes.length; i++){
        if (primes[i]) result.push(i);
    }
    return result;
}
console.log(sieveOfEratosthenes(20)); // [2,  3,  5,  7,11, 13, 17, 19]

//Sieve of Eratosthenes algorithm find all of the prime numbers up to a given number
