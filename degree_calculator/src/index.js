// Converting Fahrenheit to Celsius
function convertFarToCel(F) {
    if (F === undefined) {
        return 'You did not enter a number';
    }
    return Number.parseInt(((F - 32) * 5/9).toPrecision(2));
}

function convertCelToFar(C) {
    if (C === undefined) {
        return 'You did not enter a number';
    }
    return Number.parseInt(((C * 9/5) + 32).toPrecision(2));
}


module.exports = {convertFarToCel, convertCelToFar}