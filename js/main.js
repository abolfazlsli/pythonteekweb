
let menustatus = false
const menumanager = () =>{
    let elmmenu = document.querySelector('.menu')
    let elmglass = document.querySelector('.glass')
    let elmlogo = document.querySelector('#logo')
    console.log("init")
    if (menustatus == false) {
        elmmenu.style.right = '0%'
        elmglass.style.opacity = '1'
        elmglass.style.visibility = "visible"
        elmlogo.style.left = '-100%'
        menustatus = true
    }
    else{
        elmmenu.style.right = '-100%'
        elmglass.style.opacity = '0'
        elmglass.style.visibility = "hidden"
        elmlogo.style.left = '0'
        menustatus = false
    }
}

