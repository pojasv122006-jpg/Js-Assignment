var N = parseInt(prompt("Enter N:"))
var K = parseInt(prompt("Enter K:"))

var ans = -1

for (var x = 0; x <= 100000; x++) {
    var num = N + x

    if (num % K != 0) continue

    // check palindrome
    var str = num.toString()
    var rev = ""
    for (var i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i]
    }

    if (str == rev) {
        ans = x
        break
    }
}

alert("Smallest X: " + ans)
