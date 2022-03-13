const sumAll = function(num1, num2) {
    if (typeof(num1) != "number" || typeof(num2) != "number" || num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else {
        sum = 0;
        let range = [num1,num2].sort()
        for(i=range[0]; i<= range[1]; i++) sum += i;
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
