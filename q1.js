var L = parseInt(prompt("Enter L:"))
var R = parseInt(prompt("Enter R:"))
var K = parseInt(prompt("Enter K:"))

var count = 0

for (var i = L; i <= R; i++) {
    if (i % K != 0) continue

    var temp = i
    var hasZero = false
    var digitSum = 0

    while (temp > 0) {
        var d = temp % 10
        if (d == 0) {
            hasZero = true
            break
        }
        digitSum = digitSum + d
        temp = Math.floor(temp / 10)
    }

    if (hasZero) continue

    // check if digitSum is prime
    if (digitSum < 2) continue
    var isPrime = true
    for (var j = 2; j < digitSum; j++) {
        if (digitSum % j == 0) {
            isPrime = false
            break
        }
    }

    if (isPrime) count++
}

alert("Count: " + count)
