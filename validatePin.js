function validatePIN (pin) {
    let count = pin.trim().split('');
    let count2 = pin.split('');
    if (count.length == count2.length){
        if (count.length == 4 || count.length == 6){
            return !count.some(isNaN)
        } else {
            return false;
        }
    } else {
        return false;
    }
}