function mergesort(myarray) {
    if (myarray.length === 1) {   //base case and is sorted [90]
        return myarray;
    }
    let midpoint = Math.floor(myarray.length/2);
    let leftside = myarray.slice(0,midpoint);   //90,80,70,50  ... 90 80 ... 90
    let rightside = myarray.slice(midpoint,);  //77,88,10,20   ... 70 50 ,,,, 80
    let sortleft = mergesort(leftside);      //80, 90
    let sortright = mergesort(rightside);     //50, 70
    let imyarray = merge(sortleft, sortright);
    return imyarray;
}

function merge(leftsorted, rightsorted) {
    let mergearray = [];
    while ((leftsorted.length !== 0) || (rightsorted.length !== 0)) {
        if (leftsorted.length === 0) {     //left side is empty but right side has some sorted value left, it should just append to merge array
            mergearray = mergearray.concat(rightsorted);
            rightsorted = [];                //emptying out the array so it will exit the while loop
        }
        else if (rightsorted.length === 0) {    ///right side is empty so left side is already sorted, so just add to mergearray
            mergearray = mergearray.concat(leftsorted);
            leftsorted = [];                 //emptying out the array so it will exit the while loop otherwise  it will loop forever
        }
        else if (leftsorted[0] > rightsorted[0]) {  //compares first value, right is smaller, add to mergearray
            mergearray.push(rightsorted.shift());
        }
        else if (leftsorted[0] < rightsorted[0]) {   //compares first value, left is smaller and add to array
            mergearray.push(leftsorted.shift());
        }
    }
    
    return mergearray;
}

myinputarray = [90,80,70,50,77,88,10,20];

console.log(mergesort(myinputarray));
