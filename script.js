function binary_search(array,target) {
    begin_index = 0
    end_index = array.length -1
    while (begin_index<=end_index) {
        midpoint= Math.floor((begin_index + (end_index-begin_index) /2))
        if (array[midpoint] == target) {
            return midpoint
        } else if (array[midpoint] < target) {
            begin_index = midpoint + 1
        } else if (array[midpoint] > target) {
            end_index = midpoint - 1
        }
        
    }
    return -1
}

function calculate_midpoint(array) {
    begin_index=0
    end_index=array.length - 1
    return Math.floor(begin_index + (end_index-begin_index) / 2)
}

// user_array = prompt('enter an array   e.g. 2,3,5,8 :',)
user_array='2,4,6,10,12,15,19,20,22'
as_arr = user_array.split(',')
console.log(as_arr)
const array_html = document.querySelector("#your_array")
array_html.innerHTML = `You array is:  [${as_arr}]`

// user_target = prompt('enter a target: ')
user_target='8'
const target_html = document.querySelector('#your_target')
target_html.innerHTML = `Your target is:  ${user_target}`

// put this into button listener
const button = document.querySelector('#start')

function removeHalf() {
    console.log(as_arr)
}


function clickFunction() {
    // make midpoint block yelllow
    for (element in as_arr) {
        const vis = document.querySelector('#visualization')
        const block_div = document.createElement('div')
        var inside = document.createTextNode(as_arr[element])
        const event_log = document.querySelector("#event-log")
        
        midpoint_vis=calculate_midpoint(as_arr)
        console.log(element)

        if (element == midpoint_vis) {
            block_div.style['background-color']='yellow';
            const ul = event_log.innerHTML= `<li>midpoint found at index ${element}, now we delete one part of our array</li><br>`
            button.innerHTML = 'Next step'
            button.removeEventListener('click',clickFunction)
            button.addEventListener('click',removeHalf)

        }
        block_div.appendChild(inside)
        vis.appendChild(block_div)
    }
}


button.addEventListener('click',clickFunction)



