let arr = [2, 8, 4, 4, 3];

function minMaxSum(arr) {
    // Sort array elements
    arr.sort((a, b) => a - b);
    //r is pointing to last element
    let r = arr.length - 1;
    //l is pointing to first element
    let l = 0;
    let min = 0;
    let max = 0;
    while (l < 4) {
        min += arr[l];
        max += arr[r - l];
        l++;
    }

    return [min, max];
};


//some extra stuff
if (arr.length > 4) {
    //continue as normal
    minMaxSum(arr);
} else if (arr.length === 4) {
    //min === max
    let minMax = 0;
    for (let i = 0; i < arr.length; i++) {
        minMax += arr[i];
    }
    console.log("Min equals max: " + minMax);
} else {
    //error handling
    console.log("Please input array with length of more than or equals to 4")
}
