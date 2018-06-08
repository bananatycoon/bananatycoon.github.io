// Variables

var bananas = 0;
var money = 0;
var manualclick = 1;
var bananasPerSecond = 0;
var monkeyCost = 10;
var gorillaCost = 100;

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}


function update() {
    document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
    document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();
    document.getElementById("harvestCount").innerHTML = "BPH: " + manualclick.toLocaleString();
    document.getElementById("bpsCount").innerHTML = "BPS: " + bananasPerSecond.toLocaleString();
    document.getElementById("hireMonkey").innerHTML = "Monkey - " + "($" + monkeyCost.toLocaleString() + ")";
    document.getElementById("hireGorilla").innerHTML = "Gorilla - " + "($" + gorillaCost.toLocaleString() + ")";

}

// Save/Load

    function save() {
        localStorage.setItem("bananas", bananas);
        localStorage.setItem("manualclick", manualclick);
        localStorage.setItem("money", money);
        localStorage.setItem("bananasPerSecond", bananasPerSecond);
        localStorage.setItem("monkeyCost", monkeyCost);
        localStorage.setItem("gorillaCost", gorillaCost);
    
    }

    function load() {
        bananas = localStorage.getItem("bananas");
        bananas = parseInt(bananas);
        manualclick = localStorage.getItem("manualclick");
        manualclick = parseInt(manualclick);
        money = localStorage.getItem("money");
        money = parseInt(money); 
        bananasPerSecond = localStorage.getItem("bananasPerSecond");
        bananasPerSecond = parseInt(bananasPerSecond);
        monkeyCost = localStorage.getItem("monkeyCost");
        monkeyCost = parseInt(monkeyCost);
        gorillaCost = localStorage.getItem("gorillaCost");
        gorillaCost = parseInt(gorillaCost);
        update()
    }

// Manual Clicking

function grow() {
    bananas = bananas + manualclick;
    update()
}

// Upgrades

function sellAll() {
    money = money + (bananas * .25);
    bananas = bananas - bananas;
    update()
}   

function sell20() {
    if(bananas >= 20) {
        bananas = bananas - 20;
        money = money + 5;
        update()
    }
}

function sell50() {
    if(bananas >= 50) {
        bananas = bananas - 50;
        money = money + 12;
        update()
    }
}

function sell1000() {
    if(bananas >= 1000) {
        bananas = bananas - 1000;
        money = money + 250;
        update()
    }
}

function sell10k() {
   if(bananas >= 10000) {
        bananas = bananas - 10000;
        money = money + 3000;
        update()
   }
}

function sell100k() {
    if(bananas >= 100000) {
        bananas = bananas - 100000;
        money = money + 50000;
        update()
    }
}

function enhanceSoil() {
    if(money >= 50) {
        money = money - 50;
        manualclick = manualclick + 5;
        update()
    }
}

function purifyWater() {
    if(money >= 200) {
        money = money - 200;
        manualclick = manualclick + 25;
        update()
    }
}

function expandFarms() {
    if(money >= 10000) {
        money = money - 10000;
        manualclick = manualclick + 500;
        update()
    }
}

function hireMarketing() {
    if(money >= 100000) {
        money = money - 100000;
        manualclick = manualclick + 20000;
        update()
    }
}

function buySmallerFarm() {
    if(money >= 1000000) {
        money = money - 1000000;
        manualclick = manualclick + 75000;
        update()
    }
}

function hireMonkey() {
    if (money >= monkeyCost) {
        money = money - monkeyCost;
        bananasPerSecond = bananasPerSecond + 1;
        monkeyCost = prettify(monkeyCost * 1.1);
        update()
    }
}

function hireGorilla() {
    if (money >= gorillaCost) {
        money = money - gorillaCost;
        bananasPerSecond = bananasPerSecond + 5;
        gorillaCost = prettify(gorillaCost * 1.1);
        update()
    }
}

// Updater 9000

window.setInterval(function(){
    bananas = bananas + bananasPerSecond;
    update()
}, 1000);
