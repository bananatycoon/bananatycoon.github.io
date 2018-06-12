function update() {
    document.getElementById("bananaCount").innerHTML = "Bananas: " + bananas.toLocaleString();
    document.getElementById("moneyCount").innerHTML = "Money: $" + money.toLocaleString();
    document.getElementById("perClickCount").innerHTML = "BPC: " + perClick.toLocaleString();
    document.getElementById("perSecondCount").innerHTML = "BPS: " + perSecond.toLocaleString();
    document.getElementById("enhanceSoil").innerHTML = "Price: $" + soilCost.toLocaleString();
    document.getElementById("purifyWater").innerHTML = "Price: $" + purifyCost.toLocaleString();
    document.getElementById("expandFarms").innerHTML = "Price: $" + expandCost.toLocaleString();
    document.getElementById("createBillboards").innerHTML = "Price: $" + billboardCost.toLocaleString();
    document.getElementById("buySmallerFarm").innerHTML = "Price: $" + buyOutCost.toLocaleString();
}

// Variables

var bananas = 0;
var perClick = 1;
var perSecond = 0;
var money = 0;

var soilCost = 50;
var purifyCost = 1000;
var expandCost = 10000;
var billboardCost = 100000;
var buyOutCost = 1000000;



function save() {
    localStorage.setItem("bananas", bananas);
    localStorage.setItem("perClick", perClick);
    localStorage.setItem("money", money);
    
    localStorage.setItem("soilCost", soilCost);
    localStorage.setItem("purifyCost", purifyCost);
    localStorage.setItem("expandCost", expandCost);
    localStorage.setItem("billboardCost", billboardCost);
    localStorage.setItem("buyOutCost", buyOutCost);
}

function load() {
        bananas = localStorage.getItem("bananas");
        bananas = parseInt(bananas);
        perClick = localStorage.getItem("perClick");
        perClick = parseInt(perClick);
        money = localStorage.getItem("money");
        money = parseInt(money); 
        soilCost = localStorage.getItem("soilCost");
        soilCost = parseInt(soilCost);
        purifyCost = localStorage.getItem("purifyCost");
        purifyCost = parseInt(purifyCost);
        expandCost = localStorage.getItem("expandCost");
        expandCost = parseInt(expandCost);
        billboardCost = localStorage.getItem("billboardCost");
        billboardCost = parseInt(billboardCost);
        buyOutCost = localStorage.getItem("buyOutCost");
        buyOutCost = parseInt(buyOutCost);
        update()
}


//Manual Clicking
function harvest() {
    bananas = bananas + perClick;
    update()
}

// Sell All lol
function sellAll() {
    money = money + (bananas * .25);
    bananas = bananas - bananas;
    update()
}   

//Sell Bananas
function sellBundle() {
    if (bananas >= 20) {
        bananas = bananas - 20;
        money = money + 5;
        update()
    }
}

function sellContainer() {
    if (bananas >= 50) {
        bananas = bananas - 50;
        money = money + 15;
        update()
    }
}

function sellCrate() {
    if (bananas >= 1000) {
        bananas = bananas - 1000;
        money = money + 320;
        update()
    }
}

function sellShipment() {
    if (bananas >= 10000) {
        bananas = bananas - 10000;
        money = money + 3500;
        update()
    }
}

function sellSurplus() {
    if (bananas >= 100000) {
        bananas = bananas - 100000;
        money = money + 40000;
        update()
    }
}

//Upgrades
function enhanceSoil() {
    if (money >= soilCost) {
        money = money - soilCost;
        perClick = perClick + 5;
        soilCost = soilCost + 7;
        update()
    }

}

function purifyWater() {
    if (money >= purifyCost) {
        money = money - purifyCost;
        perClick = perClick + 50;
        purifyCost = purifyCost + 128;
        update()
    }
}

function expandFarms() {
    if (money >= expandCost) {
        money = money - expandCost;
        perClick = perClick + 500;
        expandCost = expandCost + 456;
        update()
    }
}

function createBillboards() {
    if (money >= billboardCost) {
        money = money - billboardCost;
        perClick = perClick + 8000;
        billboardCost = billboardCost + 1045;
        update()
    }
}

function buySmallerFarm() {
    if (money >= buyOutCost) {
        money = money - buyOutCost;
        perClick = perClick + 75000;
        buyOutCost = buyOutCost + 13055;
        update()
    }
}

// Updater 9000

window.setInterval(function(){
  //  bananas = bananas + perSecond;
    update()
}, 1000);
