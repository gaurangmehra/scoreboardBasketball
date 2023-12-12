let home = document.getElementById("homecount")
let guest = document.getElementById("guestcount")
let hcount = 0
let gcount = 0
function add1h(){
    hcount += 1
    home.innerText = hcount
}
function add2h(){
    hcount += 2
    home.innerText = hcount
}
function add3h(){
    hcount += 3
    home.innerText = hcount
}
function add1g(){
    gcount += 1
    guest.innerText = gcount
}
function add2g(){
    gcount += 2
    guest.innerText = gcount
}
function add3g(){
    gcount += 3
    guest.innerText = gcount
}