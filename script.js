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

    kRspan.forEach((item) => {
        item.style.filter = 'contrast(45%)';
        item.style.boxShadow = 'none';
    });


    kRspan[brick].style.filter = 'contrast(150%)';
    kRspan[brick].style.boxShadow = '0px 0px 30px rgb(246, 50, 50)';
    
    brick += direction;
    console.log(brick);
   

    setTimeout(animation, 700);


}

animation();

