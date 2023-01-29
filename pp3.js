function makeAverage(arr){
    var sum=0;
    var avg;
    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
        avg = sum / arr.length;
    }
    return avg;
}
const array = [3, 5, 7, 1, 4];
const total = makeAverage(array);
console.log("Total ", total);