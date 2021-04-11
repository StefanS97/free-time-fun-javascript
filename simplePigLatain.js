function pigIt(str){
    let words = str.split(' ').filter(char => /[a-zA-Z]/.test(char));
    let word = str.split(' ')
    let modified = [];

    for (let i = 0; i < word.length; i++) {
        if (words[i] == word[i]) {
            let helper = words[i].split('');
            let firstItem = helper.shift();
            modified.push([helper.join(''), firstItem, 'ay'].join(''));
        } else {
            modified.push(word[i]);
        }
    }

    return modified.join(' ');
}