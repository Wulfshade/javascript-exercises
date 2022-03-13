const repeatString = function(text, repeat) {
    if (repeat < 0) return 'ERROR';

    result = '';
    for (let i = 0;i<repeat; i++) {
        result += text;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
