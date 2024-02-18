let countofpartner = 1
let arrayofpartners = document.querySelectorAll('.partner')
const movescrolofpartners = (val) =>
{
    if (val === "next") {
        countofpartner += 1
        if (countofpartner === 1) {
            // hide left arrow
            let arrowl = document.querySelector('.leftarrow')
            arrowl.style.display = 'none'

        } else if (countofpartner === 5) {
            // hide right arrow
            let arrowr = document.querySelector('.rightarrow')
            arrowr.style.display = 'none'
        } else {
            let arrow_l = document.querySelector('.leftarrow')
            let arrow_r = document.querySelector('.rightarrow')
            arrow_l.style.display = "flex"
            arrow_r.style.display = "flex"
            // show arrows
        }
    }
    else if (val === "prove"){
        countofpartner -= 1
        if (countofpartner === 1) {
            // hide left arrow
            let arrowl = document.querySelector('.leftarrow')
            arrowl.style.display = 'none'

        } else if (countofpartner === 5) {
            // hide right arrow
            let arrowr = document.querySelector('.rightarrow')
            arrowr.style.display = 'none'
        } else {
            let arrow_l = document.querySelector('.leftarrow')
            let arrow_r = document.querySelector('.rightarrow')
            arrow_l.style.display = "flex"
            arrow_r.style.display = "flex"
            // show arrows
        }
    }
    console.log(countofpartner)
    for (let i = 0; i < arrayofpartners.length ; i++) {
        arrayofpartners[i].classList.remove("partner")
        arrayofpartners[i].classList.remove("visiblepartner_l")
        arrayofpartners[i].classList.remove("otherpartners")
        arrayofpartners[i].classList.remove("visiblepartner_r")
    }
    for (let i = 0; i < arrayofpartners.length ; i++) {
        console.log(arrayofpartners[i])
        arrayofpartners[i].classList.add("partner")
        arrayofpartners[i].classList.add("otherpartners")
        if (i === countofpartner ){
            arrayofpartners[i].classList.remove("otherpartners")
            arrayofpartners[i].classList.remove("visiblepartner_r")
            arrayofpartners[i].classList.remove("visiblepartner_l")
            arrayofpartners[i-1].classList.add("visiblepartner_r")
            arrayofpartners[i+1].classList.add("visiblepartner_l")
        }
    }
    for (let i = 0; i < arrayofpartners.length ; i++) {
        if ( arrayofpartners[i].classList.toString().includes("visiblepartner_r") || arrayofpartners[i].classList.toString().includes("visiblepartner_l")){
            arrayofpartners[i].classList.remove("otherpartners")
        }
    }
}