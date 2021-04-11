function sortArray(array) {
    let odd = array.filter(n => n%2 != 0).sort((a, b) => a - b);
    counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2 != 0){
            array[i] = odd[counter];
            counter++;
        }
    }
    return array;
}