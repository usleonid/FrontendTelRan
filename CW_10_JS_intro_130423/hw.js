let res = sumDigits(1234); //10
console.log(`res = ${res}`);

res = luckyNumber (123321); // 1 + 2 + 3 == 8 + 7 + 1
console.log(`res = ${res}`);

function sumDigits(x) {
    if (typeof x != 'number' || x % 1 != 0) {
        return 'Incorrect input'
    }
    if (x <= 0) {
        x = -x;
    }
    
    let sum = 0;
    while (x != 0) {
        sum += x % 10;
        x = (x - x % 10) / 10;
    }
    return sum;
}

function luckyNumber(x) {
    let sum1, sum2, num1, num2;
    sum1 = 0;
    sum2 = 0;
    num1 = (x - x%1000) / 1000;
    num2 = x%1000;
    sumDigits(num1);
    sumDigits(num2);
    // while (num1 != 0) {
    //     sum1 += num1 % 10;
    //     num1 = (num1 - num1 % 10) / 10;
    // }
    // while (num2 != 0) {
    //     sum2 += num2 % 10;
    //     num2 = (num2 - num2 % 10) / 10;
    // }
    if (sum1 == sum2) {
        return `${x} is lucky number`;
    } else {
        return `${x} is not a lucky number`;
    }
}