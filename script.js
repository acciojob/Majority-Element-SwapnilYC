//your code here
// let arr = [2, 1, 6,4,6,6,6];
// let n = arr.length;

function maxFreqElement(arr, n) {
    let freqMap = new Map();
    // for(let el of arr){
    //     freqMap.has('el') ? freqMap.set('el',Number(freqMap.get('el'))++) : freqMap.set(el,1) ;
    // }

    for (let el of arr) {
        // if element is found in map increase its frequency
        if (freqMap.has(el)) {
            let x = freqMap.get(el);
            x += 1;
            freqMap.set(el, x);
            // Else just set its value to 1
        } else {
            freqMap.set(el, 1);
        }
    }
    console.log(freqMap);

    let maxFreq = Math.floor(n / 2);
    let ans = 'No element found with max frequency';

    // iterating map to find the element with max frequency
    for (let [key, value] of freqMap) {
        if (value > maxFreq) {
            maxFreq = value;
            ans = key;
        }
    }
    console.log(ans);
}

// maxFreqElement(arr, n)

// console.log(ans);