function findOutlier(integers){
    return integers.filter(num => num % 2 == 0).length != 1 ? parseInt(integers.filter(num => num % 2 != 0)) : parseInt(integers.filter(num => num % 2 == 0));
}