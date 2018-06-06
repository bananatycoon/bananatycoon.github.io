
// Variables

var bananas = 0;
var money = 0;
var manualclick = 1;

// Save/Load

    function save() {
        localStorage.setItem("bananas", bananas);
        localStorage.setItem("manualclick", manualclick);
        localStorage.setItem("money", money);
    }

    function load() {
        bananas = localStorage.getItem("bananas");
        bananas = parseInt(bananas);
        manualclick = localStorage.getItem("manualclick");
        manualclick = parseInt(manualclick);
        money = localStorage.getItem("money");
        money = parseInt(money); 
        
        document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
        document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();
        document.getElementById("harvestCount").innerHTML = "Bananas Per Harvest: " + manualclick.toLocaleString();

    }

// Manual Clicking

function grow() {
    bananas = bananas + manualclick;
    document.getElementById("bananaCount").innerHTML = "Bananas: " + bananas.toLocaleString();
    document.getElementById("harvestCount").innerHTML = "Bananas Per Harvest: " + manualclick.toLocaleString();
    
}

// Upgrades

function sellAll() {
    money = money + (bananas * .25);
    bananas = bananas - bananas;
    
    document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
    document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();
    document.getElementById("harvestCount").innerHTML = "Bananas Per Harvest: " + manualclick.toLocaleString();
}   

function sell20() {
    if(bananas >= 20) {
        bananas = bananas - 20;
        money = money + 5;
        document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
        document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();
        document.getElementById("harvestCount").innerHTML = "Bananas Per Harvest: " + manualclick.toLocaleString();

    }
}

function sell50() {
    if(bananas >= 50) {
        bananas = bananas - 50;
        money = money + 12;
        document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
        document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();
    }
}

function sell1000() {
    if(bananas >= 1000) {
        bananas = bananas - 1000;
        money = money + 250;
        document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
        document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();
        document.getElementById("harvestCount").innerHTML = "Bananas Per Harvest: " + manualclick.toLocaleString();
    }
}

function sell10k() {
   if(bananas >= 10000) {
        bananas = bananas - 10000;
        money = money + 3000;
        document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
        document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();
        document.getElementById("harvestCount").innerHTML = "Bananas Per Harvest: " + manualclick.toLocaleString();
   }
}

function sell100k() {
    if(bananas >= 100000) {
        bananas = bananas - 100000;
        money = money + 50000;
        document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
        document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();
        document.getElementById("harvestCount").innerHTML = "Bananas Per Harvest: " + manualclick.toLocaleString();
    }
}

function enhanceSoil() {
    if(money >= 50) {
        money = money - 50;
        manualclick = manualclick + 5;
        document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
        document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();   
        document.getElementById("harvestCount").innerHTML = "Bananas Per Harvest: " + manualclick.toLocaleString();

    }
}

function purifyWater() {
    if(money >= 200) {
        money = money - 200;
        manualclick = manualclick + 25;
        document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
        document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();        
        document.getElementById("harvestCount").innerHTML = "Bananas Per Harvest: " + manualclick.toLocaleString();
    }
}

function expandFarms() {
    if(money >= 10000) {
        money = money - 10000;
        manualclick = manualclick + 500;
        document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
        document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();
        document.getElementById("harvestCount").innerHTML = "Bananas Per Harvest: " + manualclick.toLocaleString();
    }
}

function hireMarketing() {
    if(money >= 100000) {
        money = money - 100000;
        manualclick = manualclick + 20000;
        document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
        document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();
        document.getElementById("harvestCount").innerHTML = "Bananas Per Harvest: " + manualclick.toLocaleString();
    }
}
