var was_called = false;

var i = 0;
var txt = '>>> home';
var speed = 120;
async function write_and_fade() {
    document.getElementById("header").style.cssText = "position: absolute; top: 45%; left: 48%; margin-top: -50px; margin-left: -50px; width: fit-content; height: 100px;";
    document.getElementById("0").style.cssText = "opacity: 0;";
    if (i < txt.length) {
        document.getElementById("header").innerHTML += txt.charAt(i);
        i++;
        setTimeout(write_and_fade, speed);
        setTimeout(continue_fade,1500);
    }
}
function continue_fade() {
    document.getElementById("header").style.cssText = `transition: top ease 1s;
                                                       position: relative; 
                                                       top: 0; left: 48%; 
                                                       margin-left: -50px; 
                                                       width: fit-content;
                                                       margin-bottom: 0;`;
    document.getElementById("0").style.cssText = `animation: fadein 4s;
                                                  left: 30%;
                                                  position: relative;
                                                  height: 100%;`;
}

if (was_called === true) {
                // HUGE THANKS TO Theódór Magnússon WHO UPLOADED THIS TO https://codepen.io/teddimagg/pen/NPZmje!!!!
    $(document).ready(function shuffle_words(){
    var theLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#%&^+=-";
    var ctnt = "relevant";
    var speed = 50;
    var increment = 8;


    var clen = ctnt.length;       
    var si = 0;
    var stri = 0;
    var block = "";
    var fixed = "";

    (function rustle (i) {          
    setTimeout(function () {
        if (--i){rustle(i);}
        nextFrame(i);
        si = si + 1;        
    }, speed);
    })(clen*increment+1); 
    function nextFrame(pos){
        for (var i=0; i<clen-stri; i++) {

            var num = Math.floor(theLetters.length * Math.random());

            var letter = theLetters.charAt(num);
            block = block + letter;
        }
        if (si == (increment-1)){
            stri++;
        }
        if (si == increment){

            fixed = fixed +  ctnt.charAt(stri - 1);
            si = 0;
        }
        $("#output").html(fixed + block);
        block = "";
    }
    });
}