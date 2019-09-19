//madLib function//
function madLib (name, subject) {
    return name + "'s favorite subject in school is " + subject;
}
madLib("John", "music");

//tip calculator//
function tipCalc (billAmt, service) {
    if (service == 'good') {
        return billAmt * .20;
    }
    else if (service == 'fair') {
        return billAmt * .15;
    }
    else if (service == 'bad') {
        return billAmt * .10;
    }
    else {
        return "Please input 'good', 'fair', or 'bad'.";
    }
}
tipCalc(100, "good");
tipCalc(100, "fair");
tipCalc(100, "bad");
tipCalc(100, "neutral");

//tip calculator 2//
function tipCalc2 (billAmt, service) {
    if (service == 'good') {
        return (billAmt * .20) + billAmt;
    }
    else if (service == 'fair') {
        return (billAmt * .15) + billAmt;
    }
    else if (service == 'bad') {
        return (billAmt * .10) + billAmt;
    }
    else {
        return "Please input 'good', 'fair', or 'bad'.";
    }
}
tipCalc2(100, "good");

//print numbers//
function forprintNumbers(firstNum, secondNum) {
    for (var i = firstNum; i <= secondNum; i++) {
        console.log(i)
    }
}
forprintNumbers(1, 10);

// function whileprintNumbers(firstNum, secondNum) {
//     while (firstNum <= secondNum) {
//         firstNum ++
//         console.log()
//     }
// }
// whileprintNumbers(1,20);    figure this one out later

//print square//
function printSquare(num) {
    for (var i = num; i <= num; i++) {
        
        console.log(i)
    }
}