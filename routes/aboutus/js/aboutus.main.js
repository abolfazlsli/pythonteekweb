const changemap = (elm , val) => {
    const address = document.querySelectorAll(".addres")
    let addretext = document.querySelector(".spanofaddres")
    let map = document.querySelector(".map")
    const addreslist = {
        "sedrazi" : {
            addrestext : 'خراسان رضوی مشهد خیابان سید رضی 6',
            element : ``
        },
        "fedosi":{
            addrestext: 'مشهد، آزمایشگاه بهینه سازی دانشکده علوم ریاضی دانشگاه فردوسی مشهد',
            element: ``
        },
        "hamed":{
            addrestext: 'خراسان رضوی چهارراه فرامرزعباسی حامد شالی 11',
            element: ``
        },
        "tehran":{
            addrestext: 'تهران ',
            element: ``
        },
        "khayam":{
            addrestext: 'خراسان رضوی مشهد خیابان خیام جنوبی',
            element: ``
        },
    }
    for (let i = 0; i < address.length; i++) {
        address[i].classList.remove("activeaddres")
    }

    elm.classList.add("activeaddres")
    map.innerHTML = addreslist[val].element
    addretext.innerHTML = addreslist[val].addrestext
}