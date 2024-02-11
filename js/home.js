const chnageperson = (elm,val) => {
    let leftperson = document.querySelector(".leftperson")
    let rightperson = document.querySelector(".rightperson")
    let centerperson = document.querySelector(".centerperson")
    let points = document.querySelectorAll(".point")
    console.log(points)
    for (let i = 0; i < points.length; i++) {
        points[i].classList.remove("activepoint")
    }
    elm.classList.add("activepoint")
    switch (val){
        case "1":{
            leftperson.classList.add("activeperson")
            rightperson.classList.remove("activeperson")
            centerperson.classList.remove("activeperson")
            break
        }
        case "2":{
            leftperson.classList.remove("activeperson")
            rightperson.classList.remove("activeperson")
            centerperson.classList.add("activeperson")
            break
        }
        case "3" :{
            leftperson.classList.remove("activeperson")
            rightperson.classList.add("activeperson")
            centerperson.classList.remove("activeperson")
            break
        }

    }

}