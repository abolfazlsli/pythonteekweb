
let formdata = {
    phone : "",
    name : '',
    email: '',
    bearth : ''
}

let formelm = document.querySelectorAll('.inp')
const showprebtn = () =>{
    let btnofpre = document.querySelector(".preboxh")
    btnofpre.classList.remove("preboxh")
    btnofpre.classList.add("preboxs")
}
const hideperbtn = () => {
    let btnofpre = document.querySelector(".preboxs")
    btnofpre.classList.remove("preboxs")
    btnofpre.classList.add("preboxh")
}


const stepzero = () =>{
    hideperbtn()
    formelm[3].classList.remove('activeformitem')
    formelm[2].classList.remove('activeformitem')
    formelm[1].classList.add('activeformitem')
    formelm[0].classList.add('activeformitem')
    document.querySelector('.nextst').onclick = stepone
}


const changeformdata = (element , value) => {
    formdata[value] = element.value
}

const stepone = () => {
    console.log(formdata)
    if (formdata.name.length > 0 && formdata.phone.length > 0) {
        formelm[0].classList.remove('activeformitem')
        formelm[1].classList.remove('activeformitem')
        formelm[2].classList.add('activeformitem')
        formelm[3].classList.add('activeformitem')
        showprebtn();
        document.querySelector('.nextst').onclick = verifystep
    }
}
const verifystep = () => {
    window.location = "/verify"
}