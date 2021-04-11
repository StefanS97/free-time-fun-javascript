function sumDigPow(a, b) {
    let res = [];
    for (let i = a; i <= b; i++) {
        let smth = i.toString().split('');
        let total = 0;
        for (let j = 0; j < smth.length; j++){
            total += smth[j]**(j+1);
        }
        if (total == i) {
            res.push(i);
        }
    }
    return res;
}