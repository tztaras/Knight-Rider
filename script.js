let kR = document.querySelector('.k-r');
function spanCreation() {
    for (i = 0; i < 8; i++){
        let span = document.createElement('span');
        kR.append(span);
    };
};
spanCreation();