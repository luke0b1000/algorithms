let status = 'Not found'; // so that the status is global otherwise values get losed
function binary_search(myarray, search_item) {
    let midpoint = Math.floor(myarray.length/2)
    if (myarray[midpoint] === search_item) {
        status = 'Found';
    } else if (myarray[midpoint] !== search_item && myarray.length === 1) {
        status = 'Not found';
    } else if (myarray[midpoint] > search_item) { // search_item in lower half
        binary_search(myarray.slice(0,midpoint-1), search_item)
    } else if (myarray[midpoint] < search_item) { //search item in upper half
        binary_search(myarray.slice(midpoint+1), search_item)
    }
    return status;
};


arr = [1,2,3]
ans = binary_search(arr, 3)
console.log(ans)
