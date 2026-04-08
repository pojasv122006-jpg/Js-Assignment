var a = parseInt(prompt("Enter correct answers (a):"))
var b = parseInt(prompt("Enter partial answers (b):"))
var c = parseInt(prompt("Enter wrong answers (c):"))

var score = 3 * a + b - 2 * c

if (score < 0) {
    score = 0
}

if (a + b + c > 50) {
    score = score - 10
}

var result = ""
if (score >= 60) {
    result = "PASS"
} else {
    result = "FAIL"
}

alert("Score: " + score + "\nResult: " + result)
