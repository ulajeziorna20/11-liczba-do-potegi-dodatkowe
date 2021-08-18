// 1.version


const power = (base, exponent) => {

    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;

}

console.log(power(2, 3));
console.log(power(3, 2));
console.log(power(4, 2));





// 2.version

function numberToPower(number, power){
    let total = 1;
    for (let i = 1; i <= power; i++) { 
      total = total * number;
    }
    return total;
  }

console.log(  numberToPower(2, 3));



// 3. version


// const power = (base, exponent) => {

//     let result = Math.pow(base, exponent);
//     return result;

// }

// console.log(power(2, 3));