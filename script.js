// function binary_search(array,target) {
//     begin_index = 0
//     end_index = array.length -1
//     while (begin_index<=end_index) {
//         midpoint= Math.floor((begin_index + (end_index-begin_index) /2))
//         if (array[midpoint] == target) {
//             return midpoint
//         } else if (array[midpoint] < target) {
//             begin_index = midpoint + 1
//         } else if (array[midpoint] > target) {
//             end_index = midpoint - 1
//         }
        
//     }
//     return -1
// }

function calculate_midpoint(array) {
    begin_index=0
    end_index=array.length - 1
    return Math.floor(begin_index + (end_index-begin_index) / 2)
}

user_array = prompt('enter an sorted array   e.g. 2,3,5,8 :',)

var as_arr = user_array.split(',')    //e.g ['2','3','5','8']
const og_array = user_array.split(',') 


const array_html = document.querySelector("#your_array")
array_html.innerHTML = `Your array is:  [${as_arr}]`

user_target = prompt(`enter a target:               your array is: [${as_arr}]`)
const target_html = document.querySelector('#your_target')
target_html.innerHTML = `Your target is:  ${user_target}`

const button = document.querySelector('#start')

function removeHalf() {
    
    if (parseInt(user_target) > as_arr[calculate_midpoint(as_arr)]) {
        as_arr = as_arr.splice(midpoint_vis+1,as_arr.length)
        
        //remove all divs from visualization in order to make shorter, splitted array
        $('#visualization').children('div').each(function () {
            console.log(this.remove()); 
        });
        clickFunction()
    } else if (parseInt(user_target) < as_arr[calculate_midpoint(as_arr)]) {
        as_arr = as_arr.splice(0,midpoint_vis)
        
        //remove all divs from visualization in order to make shorter, splitted array
        $('#visualization').children('div').each(function () {
            console.log(this.remove()); 
        });
        clickFunction()

    }
}

function real_index() {
    return og_array.indexOf(user_target)
}

function clickFunction() {
    // make midpoint block yelllow
    for (element in as_arr) {
        const vis = document.querySelector('#visualization')
        const block_div = document.createElement('div')
        var inside = document.createTextNode(as_arr[element])
        var list = document.querySelector('#list')
        
        midpoint_vis=calculate_midpoint(as_arr)
        
        if (element == midpoint_vis) {
            if (as_arr[element] == parseInt(user_target)) {     //check if midpoint is equal to target
                const paragraph = document.querySelector('#start-info')
                const par = document.createElement('p')
                const ins = document.createTextNode('if you got it at the first try, try something longer')
                par.appendChild(ins)
                paragraph.appendChild(par)
                
                block_div.style['background-color']='green'     
                var event_item = document.createElement('li')
                event_item.appendChild(document.createTextNode(`target found at index ${real_index()}`))
                alert(`target found at index ${real_index()}`)
                list.appendChild(event_item)

            } else {
                block_div.style['background-color']='yellow';
            }
        
            var event_item = document.createElement('li')
            if (element > 1) {
                event_item.appendChild(document.createTextNode(`midpoint found at index ${element}, click 'next step' to split an array`))
                list.appendChild(event_item)
            }
            
            button.innerHTML = 'Next step'
            button.removeEventListener('click',clickFunction)
            button.addEventListener('click',removeHalf)

        }
        block_div.appendChild(inside)
        vis.appendChild(block_div)
    }
}


button.addEventListener('click',clickFunction)



