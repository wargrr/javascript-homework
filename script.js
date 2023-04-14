// zadaca 1

let a = 10;
let b = 15;
if(typeof a === 'number' && typeof b === 'number') {
    if(a > b) {
        console.log(a + " is bigger than " + b)
    }
    else if (b > a) {
        console.log(b + " is bigger than " + a)
    }
    else {
        console.log("Numbers are equal")
    }
}
else {
    console.log("Invalid Number")
}

// zadaca 2
let day = 6; 

if(day === 1) {
    console.log("Monday")
} else if(day === 2) {
    console.log("Tuesday")
} else if(day === 3) {
    console.log("Wednesday")
} else if(day === 4) {
    console.log("Thursday")
} else if(day === 5) {
    console.log("Friday")
} else if(day === 6) {
    console.log("Saturday")
} else if(day === 7) {
    console.log("Sunday")
} else {
    console.log("Invalid Day")
}