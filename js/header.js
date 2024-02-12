const innerHeader = () => {
    let elm  = document.querySelector('.contact')
    let data = `<div class="header">
        <div class="item">
            <div class="subitem">
                <a href="/">خانه</a>
            </div>
            <div class="subitem">
                <a href="/">درباه ما</a>
            </div>
            <div class="subitem">
                <a href="/">تماس باما</a>
            </div>
        </div>
        <div class="logo">
            <img src="https://pythonteek.com/assets/img/logo.png" />
        </div>
        <div class="item">
            <div class="subitem">
                <a href="/" class="singin">ثبت نام</a> <span>/</span> <a href="#">ورود</a>
            </div>
            <div class="subitem">
                <a href="/">اخبار</a>
            </div>
            <div class="subitem">
                <a href="/">مجله</a>
            </div>
        </div>
    </div>
    <div class="phoneheader">
        <div class="logo" id="logo">
            <img src="https://pythonteek.com/assets/img/logo.png" />
        </div>
        <div class="menuopener" onclick="menumanager()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </div>
        <div class="glass">

        </div>
        <div class="menu">
            <div class="closebtn" onclick="menumanager()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </div>
            <div class="pitem">
                <div class="logo">
                <img src="img/logo.png" />
                </div>
            </div>
            <div class="pitem">
                <a href="/">خانه</a>
            </div>
            <div class="pitem">
                <a href="/">درباره ما</a>
            </div>
            <div class="pitem">
                <a href="/">تماس باما</a>
            </div>
            <div class="pitem">
                <a href="/">اخبار</a>
            </div>
            <div class="pitem">
                <a href="/">مجله</a>
            </div>
            <div class="singupbox">
                <div class="snitem">
                    <a href="/">ورود</a>
                </div>
                <div class="snitem singupbtn">
                    <a href="#">ثبت نام</a>
                </div>
            </div>
        </div>`
    elm.innerHTML = data;
    console.log("overx")
}
innerHeader()