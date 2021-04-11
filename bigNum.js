function narcissistic(value) {
    let numbers = value.toString().split('');
    let total = 0;
    numbers.forEach(n => total += parseInt(n)**numbers.length);
    return value == total ? true : false;
}