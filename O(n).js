const fishName = 'Nemo';
const fishNames = ['Nemo','Hemo','Bremo','Kemo','Nemo'];
function findNemo(arr){
    let t0 = performance.now();
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element === fishName){
            console.log(fishName,'Found')
        }
    }
    console.log('Search Took: ',(performance.now()- t0).toFixed(2),'ms')
}

findNemo(fishNames) // O(n)