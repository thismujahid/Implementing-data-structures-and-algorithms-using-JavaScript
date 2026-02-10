const boxes = [1,2,3,4,5];
function logParisNums(arr){
    for (let index = 0; index < arr.length; index++) {
        const first = arr[index];
        for (let index = 0; index < arr.length; index++) {
            const second = arr[index];
            console.log(`${first} - ${second}`)
        }
    }
}
logParisNums(boxes) // Each Element Has Five Operations Which means each element increases the count of operations so the Big O will Be n * 2 
// O(n^2)