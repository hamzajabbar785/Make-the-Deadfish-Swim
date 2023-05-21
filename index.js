// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

const parse = (data) => {
    let count = 0
    let arr = []

    for(let i = 0; i < data.length; i++){
        if(data[i] === "i"){
            count++
        }else if(data[i] === "d"){
            count--
        }else if(data[i] === "s"){
            count = Math.pow(count, 2)
        }else if(data[i] === "o"){
            arr.push(count)
        }else {
            count = count
        }
    }

    return arr
}

parse("iiisdoso")

//Solution 2

const parse = (data) => {
    let arr = []

    data.split("").reduce((curr, s) => {
        if(s === "i") curr++
        if(s === "d") curr--
        if(s === "s") curr = Math.pow(curr, 2)
        if(s === "o") arr.push(curr)

        return curr
    },0)

    return arr
}