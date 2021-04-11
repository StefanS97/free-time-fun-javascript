function createPhoneNumber(numbers){
    blank = '';
    numbers.length == 10 ? numbers.forEach(n => blank += n) : '';
    return '(' + blank[0] + blank[1] + blank[2] + ')' + ' ' + blank[3] + blank[4] + blank[5] + '-' + blank[6] + blank[7] + blank[8] + blank[9];
}