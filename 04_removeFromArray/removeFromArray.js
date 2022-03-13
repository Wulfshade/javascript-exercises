const removeFromArray = function(array, ...items) {
    filtered = [];
    for (let item of array) {
        if(!items.includes(item)) {
            filtered.push(item);
        }
    }
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
