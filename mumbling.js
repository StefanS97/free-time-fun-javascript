function accum(s) {
    let final = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = -1; j < i; j++) {
            if (j==-1) {
                final += s[i].toUpperCase();
            } else {
                final += s[i].toLowerCase();
            }
        }
        if (i != s.length-1){
            final += '-';
        }
    }
    return final;
}