let elm = document.querySelectorAll(".productcorsoer")
let productlist =
    {
        python:[
            {
            img:'https://wallpapercave.com/wp/wp8583820.jpg',
            name : 'دوره پایتون',
            time : '1/1/1',
            explain : 'در این دوره پایتون یاد میگیرید',

        },
        {
        img:'https://wallpapercave.com/wp/wp8583820.jpg',
        name : 'دوره پایتون',
        time : '1/1/1',
        explain : 'در این دوره پایتون یاد میگیرید'
    },
    {
        img:'https://wallpapercave.com/wp/wp8583820.jpg',
        name : 'دوره پایتون',
        time : '1/1/1',
        explain : 'در این دوره پایتون یاد میگیرید'
    },
    {
        img:'https://wallpapercave.com/wp/wp8583820.jpg',
        name : 'دوره پایتون',
        time : '1/1/1',
        explain : 'در این دوره پایتون یاد میگیرید'
    },
    {
        img:'https://wallpapercave.com/wp/wp8583820.jpg',
        name : 'دوره پایتون',
        time : '1/1/1',
        explain : 'در این دوره پایتون یاد میگیرید'
    },
    {
        img:'https://wallpapercave.com/wp/wp8583820.jpg',
        name : 'دوره پایتون',
        time : '1/1/1',
        explain : 'در این دوره پایتون یاد میگیرید'
    }
    ],
        scratch : [
            {
                img:'https://www.vectorlogo.zone/logos/mit_scratch/mit_scratch-official.svg',
                name : 'دوره پایتون',
                time : '1/1/1',
                explain : 'در این دوره پایتون یاد میگیرید',

            },
            {
                img:'https://www.vectorlogo.zone/logos/mit_scratch/mit_scratch-official.svg',
                name : 'دوره پایتون',
                time : '1/1/1',
                explain : 'در این دوره پایتون یاد میگیرید'
            },
            {
                img:'https://www.vectorlogo.zone/logos/mit_scratch/mit_scratch-official.svg',
                name : 'دوره پایتون',
                time : '1/1/1',
                explain : 'در این دوره پایتون یاد میگیرید'
            },
            {
                img:'https://www.vectorlogo.zone/logos/mit_scratch/mit_scratch-official.svg',
                name : 'دوره پایتون',
                time : '1/1/1',
                explain : 'در این دوره پایتون یاد میگیرید'
            },
            {
                img:'https://www.vectorlogo.zone/logos/mit_scratch/mit_scratch-official.svg',
                name : 'دوره پایتون',
                time : '1/1/1',
                explain : 'در این دوره پایتون یاد میگیرید'
            },
            {
                img:'https://www.vectorlogo.zone/logos/mit_scratch/mit_scratch-official.svg',
                name : 'دوره پایتون',
                time : '1/1/1',
                explain : 'در این دوره پایتون یاد میگیرید'
            }
        ],
        powerbi : [
            {
                img:'https://logohistory.net/wp-content/uploads/2023/05/Power-BI-Logo-2013-1536x864.png',
                name : 'دوره پایتون',
                time : '1/1/1',
                explain : 'در این دوره پایتون یاد میگیرید',

            },
            {
                img:'https://logohistory.net/wp-content/uploads/2023/05/Power-BI-Logo-2013-1536x864.png',
                name : 'دوره پایتون',
                time : '1/1/1',
                explain : 'در این دوره پایتون یاد میگیرید'
            },
            {
                img:'https://logohistory.net/wp-content/uploads/2023/05/Power-BI-Logo-2013-1536x864.png',
                name : 'دوره پایتون',
                time : '1/1/1',
                explain : 'در این دوره پایتون یاد میگیرید'
            },
            {
                img:'https://logohistory.net/wp-content/uploads/2023/05/Power-BI-Logo-2013-1536x864.png',
                name : 'دوره پایتون',
                time : '1/1/1',
                explain : 'در این دوره پایتون یاد میگیرید'
            },
            {
                img:'https://logohistory.net/wp-content/uploads/2023/05/Power-BI-Logo-2013-1536x864.png',
                name : 'دوره پایتون',
                time : '1/1/1',
                explain : 'در این دوره پایتون یاد میگیرید'
            },
            {
                img:'https://logohistory.net/wp-content/uploads/2023/05/Power-BI-Logo-2013-1536x864.png',
                name : 'دوره پایتون',
                time : '1/1/1',
                explain : 'در این دوره پایتون یاد میگیرید'
            }
        ]
    }


const pythoncurs = (val , e = undefined) => {
    elm.innerHTML = ''
    elms = document.querySelectorAll(".prditem")
    console.log(elms)
    productlist[val].map(
        e => {
            elm[0].innerHTML += `
             <div class='product'>
             <div class="icon">
                    <div class="btn more">
                      <a href="#">یشتر</a>
                    </div>
                    <img src=${e.img} />
              </div>
              <div class="contact">
                    <div class="citem">
                        <p>${e.name}</p>
                        <p>${e.time}</p>
                    </div>
                    <hr/>
                    <div class="citem">
                            <p>${e.explain}</p>
                    </div>
               </div>
            </div>
        `
            elm[1].innerHTML += `
             <div class='product'>
             <div class="icon">
                    <div class="btn more">
                      <a href="#">یشتر</a>
                    </div>
                    <img src=${e.img} />
              </div>
              <div class="contact">
                    <div class="citem">
                        <p>${e.name}</p>
                        <p>${e.time}</p>
                    </div>
                    <hr/>
                    <div class="citem">
                            <p>${e.explain}</p>
                    </div>
               </div>
            </div>
        `
        }
    )
    for (let i = 0; i < elms.length; i++) {
        elms[i].classList.remove('btn')

    }
    e.classList.add("btn")
}

productlist['python'].map(
    e => {
        elm[0].innerHTML += `
             <div class='product'>
             <div class="icon">
                    <div class="btn more">
                      <a href="#">یشتر</a>
                    </div>
                    <img src=${e.img} />
              </div>
              <div class="contact">
                    <div class="citem">
                        <p>${e.name}</p>
                        <p>${e.time}</p>
                    </div>
                    <hr/>
                    <div class="citem">
                            <p>${e.explain}</p>
                    </div>
               </div>
            </div>
        `
        elm[1].innerHTML += `
             <div class='product'>
             <div class="icon">
                    <div class="btn more">
                      <a href="#">یشتر</a>
                    </div>
                    <img src=${e.img} />
              </div>
              <div class="contact">
                    <div class="citem">
                        <p>${e.name}</p>
                        <p>${e.time}</p>
                    </div>
                    <hr/>
                    <div class="citem">
                            <p>${e.explain}</p>
                    </div>
               </div>
            </div>
        `
    }
)