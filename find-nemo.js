const fishName = 'Nemo';
const fishNames = ['Nemo','Hemo','Bremo','Kemo','Nemo'];
const largeArr = new Array(1000).fill('nemo');

let t0 = performance.now();
for (let index = 0; index < largeArr.length; index++) {
    const element = largeArr[index];
    if(element === 'nemo'){
        console.log('Nemo Found')
    }
}
console.log('Search Took: ',(performance.now()- t0).toFixed(2),'ms')