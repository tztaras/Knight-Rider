let kR = document.querySelector('.k-r');
(function spanCreation() {
    for (i = 0; i < 8; i++) {
        let span = document.createElement('span');
        kR.append(span);
    };
})();


let brick = 0;

let direction = 1;

let kRspan = document.querySelectorAll('.k-r > span');
function animation() {
    if (brick === kRspan.length-1) {
        direction *= -1;
    }
    else if (brick === -1) {
        brick = 1;
        direction *= -1;
    }


    kRspan.forEach((item) => {
        item.style.filter = 'contrast(70%)';
        item.style.boxShadow = 'inset 0 0 10px 4px #000000';
        item.style.border = 'none';
    });
    

    if (direction === 1||brick===kRspan.length-1) { 
        kRspan[brick].style.boxShadow = '-15px 0px 47px 25px rgb(161, 0, 0), inset 0px 0px 10px 15px rgb(161, 0, 0)';
    } else {
        kRspan[brick].style.boxShadow = '15px 0px 47px 25px rgb(161, 0, 0), inset 0px 0px 10px 15px rgb(161, 0, 0)';
    } 

    kRspan[brick].style.filter = 'contrast(200%)';
    kRspan[brick].style.border = '1px solid rgb(255, 0, 0)';

    
    brick += direction;
    

    setTimeout(animation, 500);


}

animation();



let audio = new Audio('./audio/Intro.mp3');
function playMusic() {
    if (!audio || audio.paused) {
        audio.play();
    } else {
        audio.pause();
        // Reset the audio to the beginning
        audio.currentTime = 0; 
    }
    
}


let m = document.querySelectorAll('.k-r > span');
m.forEach(span => {
    span.addEventListener('click', playMusic);
   
    
})

