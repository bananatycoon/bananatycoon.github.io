//Manual Clicking
function grow() {
    bananas = bananas + 1;
}

//Automatic Stuff

function update() { 

document.title = bananas.toLocaleString() + " Bananas";
document.getElementById('nanners').value = bananas.toLocaleString();

}

function timer() {
    update();
}

setInterval(timer, 1000)

// Variables
var bananas = 0;


