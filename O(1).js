const boxes = [1,2,5,4,5,2,1,5];
function logFirst(){
    console.log(boxes[0]);
    console.log(boxes[1]);
    console.log(boxes[2]);
    console.log(boxes[3]);
    console.log(boxes[4]);
}


logFirst() // O(1) Constant Time, because this function has only one operation, no matter how many console logs inside it.