#myarray will be [1,2,3], search item is 3  array will have to be sorted
def binary_search(myarray, search_item):
    myarray_length = len(myarray) # get the length of myarray
    midpoint = myarray_length // 2 #integer divison so I get back non-flotating value
    if search_item != myarray[midpoint] and myarray_length == 1:   # base case to exit
        return 'Not found'
    if search_item == myarray[midpoint]: # location is at midpoint search no more
        return midpoint # found where it is, out put location
    elif search_item > myarray[midpoint]:   # if search_item is > my midpoint value
        return binary_search(myarray[midpoint:],search_item)   # basically takes the upperhalf of my array
    elif search_item < myarray[midpoint]:   # if search_item is < my midpoint value
        return binary_search(myarray[0:midpoint], search_item) #takes lower half of my array
    

myarray = [1,2]
answer = binary_search(myarray, 10)
print(answer)
