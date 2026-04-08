var current = parseInt(prompt("Enter starting number:"))
var seed = parseInt(prompt("Enter seed:"))

for (var i = 0; i < 3; i++) {
    if (current % 2 == 0) {
        current = current / 2 + seed
    } else {
        current = current * 3 - seed
    }
}

// check 3 digit
var result = "NO"
if (current >= 100 && current <= 999) {
    var temp = current
    var d3 = temp % 10
    temp = Math.floor(temp / 10)
    var d2 = temp % 10

    if (d2 == seed) {
        result = "YES"
    }
}

alert(result + "\nFinal number: " + current)
