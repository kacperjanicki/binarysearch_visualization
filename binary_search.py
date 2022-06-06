def binary(array:list,target:int) -> int:
    begin_index=0
    end_index=len(array)-1
    while begin_index <= end_index:
        midpoint = begin_index + (end_index-begin_index) //2
        if array[midpoint] == target:
            return midpoint
        elif array[midpoint] < target:
            begin_index = midpoint + 1
        elif array[midpoint] > target:
            end_index = midpoint-1
    return -1

print(binary([2,4,5,9,11],9)) ## will return 3 since 9 is at 3rd index

print(binary([2,10,12],1)) ## will return -1 since '1' is not in array