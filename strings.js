function spinWords(string){
    let ar = string.split(' ');
    let final = [];
    for (let i = 0; i < ar.length; i++) {
        let letter = ar[i];
        if (letter.length < 5) {
            final.push(letter);
        } else {
            final.push(letter.split('').reverse().join(''));
        }
    }
    return final.join(' ');;
}