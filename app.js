let clickUpgrades = {
    shovel: {
      price: 10,
      quantity: 0,
      multiplier: 1
    },
    shovel2: {
        price: 50,
        quantity: 0,
        multiplier: 5
    }
  };
  
  let automaticUpgrades = {
    rover: {
      price: 250,
      quantity: 0,
      multiplier: 10
    },
    rover2: {
        price: 1250,
        quantity: 0,
        multiplier: 100
    }
  };
  

let coins = 0;

function mine(){
    coins += 1 + (clickUpgrades.shovel.quantity * clickUpgrades.shovel.multiplier)
    + (clickUpgrades.shovel2.quantity * clickUpgrades.shovel2.multiplier)
    // console.log('mining', coins)
    document.getElementById('coins').innerText = coins
    if(coins > 0) {
        document.getElementById('coins-p').innerHTML = 
        `Coins: <span class="text-success" id="coins">${coins}</span>`
    }
}

function buyShovel(){
    if(coins >= clickUpgrades.shovel.price){
        // console.log('purchased', clickUpgrades.shovel)
        coins -= clickUpgrades.shovel.price
        clickUpgrades.shovel.quantity += 1
        clickUpgrades.shovel.price += 5
        coinsPerClick()
        document.getElementById('coins').innerText = coins
        document.getElementById('shovel').innerText = clickUpgrades.shovel.quantity
        document.getElementById('shovelprice').innerText = clickUpgrades.shovel.price
        document.getElementById('shovel-p').innerHTML =
        `Shovels: <span class="text-success" id="shovel">${clickUpgrades.shovel.quantity}</span>`
    }

}

function buyShovelV2(){
    if(coins >= clickUpgrades.shovel2.price){
        // console.log('purchased', clickUpgrades.shovel2)
        coins -= clickUpgrades.shovel2.price 
        clickUpgrades.shovel2.quantity += 1
        clickUpgrades.shovel2.price += 25
        coinsPerClick()
        document.getElementById('coins').innerText = coins
        document.getElementById('shovel2').innerText = clickUpgrades.shovel2.quantity
        document.getElementById('shovel2price').innerText = clickUpgrades.shovel2.price
        document.getElementById('shovel2-p').innerHTML = 
        `Shovel V2s: <span class="text-success" id="shovel2">${clickUpgrades.shovel2.quantity}</span>`
    }
}

function buyRover(){
    if(coins >= automaticUpgrades.rover.price){
        // console.log('purchased', automaticUpgrades.rover)
        coins -= automaticUpgrades.rover.price
        automaticUpgrades.rover.quantity += 1
        automaticUpgrades.rover.price += 125
        document.getElementById('coins').innerText = coins
        document.getElementById('rover').innerText = automaticUpgrades.rover.quantity
        document.getElementById('roverprice').innerText = automaticUpgrades.rover.price
        document.getElementById('rover-p').innerHTML = 
        `Rovers: <span class="text-success" id="rover">${automaticUpgrades.rover.quantity}</span>`
        coinsPerSecond()
    }
}

function buyRoverV2(){
    if(coins >= automaticUpgrades.rover2.price){
        // console.log('purchased', automaticUpgrades.rover2)
        coins -= automaticUpgrades.rover2.price
        automaticUpgrades.rover2.quantity += 1
        automaticUpgrades.rover2.price += 625
        document.getElementById('coins').innerText = coins
        document.getElementById('rover2').innerText = automaticUpgrades.rover2.quantity
        document.getElementById('rover2price').innerText = automaticUpgrades.rover2.price
        document.getElementById('rover2-p').innerHTML = 
        `Rover V2s: <span class="text-success" id="rover2">${automaticUpgrades.rover2.quantity}</span>`
        coinsPerSecond()
    }
}

function collectAutoUpgrades(){
    coins += 0 + (automaticUpgrades.rover.quantity * automaticUpgrades.rover.multiplier)
    + (automaticUpgrades.rover2.quantity * automaticUpgrades.rover2.multiplier)
    document.getElementById('coins').innerText = coins
    // console.log('collecting auto upgrades', coins)
}

let cps = 0

function coinsPerSecond(){ 
    cps = 0 + (automaticUpgrades.rover.quantity * automaticUpgrades.rover.multiplier)
    + (automaticUpgrades.rover2.quantity * automaticUpgrades.rover2.multiplier)
    document.getElementById('cps').innerText = cps.toFixed(2)
    if(cps > 0){document.getElementById('cps-p').innerHTML = 
    `Coins Per Second: <span class="text-success"id="cps">${cps}</span>`
}
}

let cpc = 1

function coinsPerClick(){ 
cpc = 1 + (clickUpgrades.shovel.quantity * clickUpgrades.shovel.multiplier)
+ (clickUpgrades.shovel2.quantity * clickUpgrades.shovel2.multiplier)
document.getElementById('cpc').innerText = cpc
}


setInterval(collectAutoUpgrades, 1000);
setInterval(coinsPerSecond, 1000);

