
// Save/Load

    function save() {
        localStorage.setItem("bananas", bananas);
        localStorage.setItem("manualclick", manualclick);
        localStorage.setItem("money", money);
    }

// Manual Clicking

function grow() {
    bananas = bananas + manualclick;
    document.getElementById("bananaCount").innerHTML = "Bananas: " + bananas.toLocaleString();

}

// Upgrades

function sell20() {
    if(bananas >= 20) {
        bananas = bananas - 20;
        money = money + 5;
        document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
        document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();

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

function enhanceSoil() {
    if(money >= 50) {
        money = money - 50;
        manualclick = manualclick + 5;
        document.getElementById("moneyCount").innerHTML = "Money: " + "$" + money.toLocaleString();
        document.getElementById("bananaCount").innerHTML = "Bananas: " +  bananas.toLocaleString();        
    }
}

// Variables

var bananas = 0;
var money = 0;
var manualclick = 1;
