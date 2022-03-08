const countdown = (n) => {
    if(n <= 0) {
        return 
    } else {
        console.log(n)
    }
    countdown(n - 1)
}

countdown(17);






















const sortArrayOfStrings = (array) => {
    
    let newArray = array.map((element, i) => {
        return { index: i, value: element.toLowerCase()}
    })
    

    newArray.sort((a, b) => {
        if(a.value > b.value){
            return 1
        }
        if(a.value < b.value){
            return -1
        }
        return 0
    })
    

    let theArray = newArray.map(element => {
        return array[element.index]
    })
    
    console.log(theArray)
}
