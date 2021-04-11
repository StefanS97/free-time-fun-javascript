function orderWeight(strng) {
    let list = strng.split(' ');
    let helper = [];

    function sumIntegers(integer) {
        let me = integer.toString().split('');
        a = 0;
        for (let i = 0; i < me.length; i++) {
            a += parseInt(me[i]);
        }
        return a;
    }

    for (let i = 0; i < list.length; i++) {
        if (list[i].length > 0) {
            helper.push(parseInt(list[i].split(' ')));
        }
    }

    return list.sort((a, b) => sumIntegers(a) - sumIntegers(b) || a > b || -(a < b)).join(' ');
}