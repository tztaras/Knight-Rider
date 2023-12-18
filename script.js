let kR = document.querySelector('.k-r');
(function spanCreation() {
    for (i = 0; i < 8; i++) {
        let span = document.createElement('span');
        kR.append(span);
    };
})();


let brick = 0;
console.dir(brick);
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
        item.style.filter = 'contrast(50%)';
        item.style.boxShadow = 'inset 0 0 10px 4px #000000';
        item.style.border = 'none';
    });


    kRspan[brick].style.filter = 'contrast(200%)';
    kRspan[brick].style.border = '1px solid rgb(255, 0, 0)';
    kRspan[brick].style.boxShadow = '0px 0px 50px 20px rgb(161, 0, 0), inset 0px 0px 15px 15px rgb(161, 0, 0)';
    
    brick += direction;
    // console.log(brick);
   

    setTimeout(animation, 600);


}

animation();

