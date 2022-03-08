const countdown = (n) => {
    if(n <= 0) {
        return 
    } else {
        console.log(n)
    }
    countdown(n - 1)
}

//Example 
countdown(17);