let can = document.getElementById("can");
let ctx = can.getContext("2d");
let cP = document.getElementById("colorPicker")
let hold = 0;
let rhold = 0;
let s = 50

// Window resize
let fullResizeWindow = () => {
	var width = can.width = window.innerWidth;
	var height = can.height = window.innerHeight;
};
fullResizeWindow();

// function getRand(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

let draw = (x, y, w, h) => {
    ctx.beginPath();
    ctx.arc(x, y, w, 1, 2 * Math.PI);
    ctx.fillStyle = cP.value
    ctx.fill();
}

// Press click
document.addEventListener('mousedown', function(e) {
    switch (e.button) {
        case 0: // Primary button ("left")
            hold = 1;
            break;

        case 2: // Secondary button ("right")
            rhold = 1;
            break;
    }
});

document.addEventListener('contextmenu', function(e) {e.preventDefault()})

// Release click
document.addEventListener('mouseup', function(e) {
    hold = 0;
    rhold = 0;
});

// Anytime you move
document.addEventListener('mousemove', function(e) { 
    if(hold) {
        ctx.globalCompositeOperation = 'destination-over';
        draw(e.clientX, e.clientY, s, s);
    } else if(rhold) {
        ctx.globalCompositeOperation = 'destination-out';
        draw(e.clientX, e.clientY, s, s);
        // ctx.clearRect(e.clientX, e.clientY, 100, 100);
    }
});

// sebi t'es vraiment la plus belle