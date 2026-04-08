var base = parseInt(prompt("Enter base fare:"))
var distance = parseInt(prompt("Enter distance:"))
var minutesLate = parseInt(prompt("Enter minutes late:"))
var seed = parseInt(prompt("Enter seed:"))

var fare = base + 7 * distance

if (minutesLate > 15) {
    fare = fare + 20
}

if (distance > 10) {
    fare = fare + 0.1 * fare
}

if (seed % 2 != 0) {
    fare = fare - seed
} else {
    fare = fare + seed
}

// round to nearest multiple of 5
var rem = fare % 5
if (rem < 2.5) {
    fare = fare - rem
} else {
    fare = fare + (5 - rem)
}

fare = Math.round(fare)

alert("Final Fare: " + fare)
