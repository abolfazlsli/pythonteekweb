let sc = document.getElementById('scene')
    let p = new Parallax(sc , {
        relativeInput: true
    });
    // parallaxInstance.friction(0.2, 0.2);

$(document).ready(function(){
    var controler = new ScrollMagic.Controller()

     $(".disabledr").each(function(){
        var sene = new ScrollMagic.Scene({
            triggerElement : this,
            reverse : false
            // duration:'90%'
        }).setClassToggle(this , 'seen').addTo(controler)
    })
    $(".disabledl").each(function(){
        var sene = new ScrollMagic.Scene({
            triggerElement : this,
            reverse : false
            // duration:'90%'
        }).setClassToggle(this , 'seen').addTo(controler)
    })
}
)



const svg = new Walkway({
    selector: '#testsvg',
    duration: 1000,
});

  
svg.draw(after);
  
function after(){
    fillPath('test','#695a69');
    // fillPath('color-2','#b2441d');
    // fillPath('color-3','#dfd0c6');
    // fillPath('color-4','#c8b2a8');
    // fillPath('color-5','#de582a');
    // fillPath('color-6','#a08a8a')
}

function fillPath(classname, color){
  const paths = document.querySelectorAll(`#svg-castle .${classname}`);
  for(path of paths){
    path.style.fill = `${color}`;
  }
 }
