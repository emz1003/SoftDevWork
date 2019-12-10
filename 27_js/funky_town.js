var names = [
    "Emily",
    "Yifan",
    "Jackie"
];

var fxn = function() {
    console.log("Hi");
};

var fib = function(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
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
    console.log(names.length);
    return names[Math.floor(Math.random() * names.length)];
}