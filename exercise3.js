
// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
const stepDecrease = (endValue, step) => {
    while (endValue > 0){
        endValue -= step;
        console.log('x: ' + endValue);
    }
};

let x = 6;
stepDecrease(x, 0.5);

// - Print all the odd numbers between 1 - 100.
const displayOddNumber = (firstNumber, endNumber) => {
    
    while(firstNumber <= endNumber){
        if(firstNumber%2 !== 0){
             console.log('odd number: ' + firstNumber);        
        }
        firstNumber++;
    }
};

let i = 1;
let end = 100;
displayOddNumber(i, end);

// - Write a method with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
const displayArray = (endValue) => {
    let arr = [];
    let i = 1;
    while(i <= endValue){
        arr.push(`[${i}]`);  
        i++;
    }
        console.log(`n = ${endValue}: ${arr}`);
}

let n = 5;
displayArray(n);

// - Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
sumOfValue = (value) => {
    let i = 1;
    let sum = 0;

    while(i <= value){
        sum += i
        i++;
    }
    console.log('sum: ' + sum);
};

sumOfValue(n);