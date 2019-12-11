var names = [
    "Emily",
    "Yifan",
    "Jackie",
    "Tiffany"
];

var fxn = function() {
    console.log("Hi");
};

var fact = function(n) {
    if (n < 2) return 1;
    return n * fact(n - 1);
};

var fib = function(n) {
    if (n === 0) {
        return 0;
    }
    if (n < 3) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

var gcd = function(a, b) {
    if (b === 0)
        return a;
    return gcd(b, a % b);
}

var randomStudent = function() {
    return names[Math.floor(Math.random() * names.length)];
}

document.getElementById("fact").addEventListener("click", fact(5));
document.getElementById("fib").addEventListener("click", fib(5));
document.getElementById("gcd").addEventListener("click", gcd(10, 8));
document.getElementById("rand").addEventListener("click", randomStudent());