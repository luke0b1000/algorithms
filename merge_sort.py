###splitting up the array til it becomes 1 which means it is sorted
def mergesort(myarray):
    if len(myarray) == 1:
        return myarray   #[20]

    midpoint = len(myarray)//2   #midpoint using integer divison so it does the Math.floor
    leftside = myarray[:midpoint]       #10 20 30 ... then 10    ...    ...20
    rightside = myarray[midpoint:]      #40 50 80 ... then 20 30 ... then  ...30
    sortleft = mergesort(leftside)      #so once the left side got sorted goes to next line
    sortright = mergesort(rightside)    # sort out the right side
    myarray = merge(sortleft,sortright)   #this is where the magic happens and starts combing the sorted list on each level
    return myarray

def merge(leftarray, rightarray):
    mergeresult = []
    while len(leftarray) != 0 or len(rightarray) !=0:   ###something exist on both sides
        if len(leftarray) == 0:
            mergeresult.extend(rightarray)     ## so if nothing on left side, then just take the remaining right sided which is sorted and add to result
            rightarray = []                     ## empty out the right side
        elif len(rightarray) == 0:
            mergeresult.extend(leftarray)
            leftarray = []
        elif leftarray[0] < rightarray[0]:
            mergeresult.append(leftarray.pop(0))       ###pop out the zero element to be appended to the merge result
        elif leftarray[0] > rightarray[0]:
            mergeresult.append(rightarray.pop(0))
    return mergeresult                                  #return the sorted list


myarray = [80,30,20,50,40,10, 5]

v = mergesort(myarray)

print(v)
