def binary_search(myarray, search_item):
    low = 0
    high = len(myarray)-1
    status = 'Not found'
    while low <= high:
        mid = low+((high-low)//2)

        if myarray[mid] == search_item:
            status = mid
            return status
        elif myarray[mid] < search_item:  # increment low because the search item is higher
            low = mid+1
        elif myarray[mid] > search_item: #set the high to the mid point as ceiling
            high = mid-1
    return status

array1 = [1,2,3,55]
s = binary_search(array1, 55)
print(s)
