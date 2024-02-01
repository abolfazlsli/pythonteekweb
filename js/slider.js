let slides = document.querySelectorAll('.slideritem')
let activeslide = 0
console.log(slides)
setInterval(e => {

    for (let i = 0 ; i < 3 ; i++){
        if (activeslide == i){
            slides[i].classList.add('activeslide')
        }
        else{
            slides[i].classList.remove('activeslide')
        }

    }
    if (activeslide == 2){
        activeslide = 0
    }
    else {
        activeslide = activeslide + 1
    }
} , 2500)