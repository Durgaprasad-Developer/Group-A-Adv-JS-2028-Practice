"use strict"
function outer () {
    let name = "Durga"
    let inner = () => {
        console.log(name)
    }
    inner()
}

outer();