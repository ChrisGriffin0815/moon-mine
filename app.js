let mods = {
  knife: { modifier: 1, type: 'click', cost: 5 },
  drill: { modifier: 2, type: 'click', cost: 10 },
  grater: { modifier: 10, type: 'auto', cost: 20 },
  minion: { modifier: 15, type: 'auto', cost: 40 }
}

let minIntervalID
let intervalID
let knifeModValue = 0
let drillModValue = 0
let graterModValue = 0
let minionModValue = 0

let cheese = 0
let knife = 0
let drill = 0
let grater = 0
let minion = 0

function mineCheese() {
  cheese += 1 + knifeModValue + drillModValue
  drawAll()
}

function knifeButtonToggle() {
  let knifeButton = document.getElementById('knife-button')
  if (cheese >= mods.knife.cost) {
    knifeButton.disabled = false
  } else {
    knifeButton.disabled = true
  }
}

function drillButtonToggle() {
  let drillButton = document.getElementById('drill-button')
  if (cheese >= mods.drill.cost) {
    drillButton.disabled = false
  } else {
    drillButton.disabled = true
  }
}

function graterButtonToggle() {
  let graterButton = document.getElementById('grater-button')
  if (cheese >= mods.grater.cost) {
    graterButton.disabled = false
  } else {
    graterButton.disabled = true
  }
}

function minionButtonToggle() {
  let minionButton = document.getElementById('minion-button')
  if (cheese >= mods.minion.cost) {
    minionButton.disabled = false
  } else {
    minionButton.disabled = true
  }
}



function buyKnife() {
  knife++
  knifeModValue += mods.knife.modifier
  let knifeCount = document.getElementById('knife-count')
  knifeCount.innerText = knife.toString()
  cheese -= mods.knife.cost
  mods.knife.cost *= 4
  drawAll()
  mods.knife.modifier *= 2
}

function buyDrill() {
  drill++
  drillModValue += mods.drill.modifier
  let drillCount = document.getElementById('drill-count')
  drillCount.innerText = drill.toString()
  cheese -= mods.drill.cost
  mods.drill.cost *= 4
  drawAll()
  mods.drill.modifier *= 2
}

function buyGrater() {
  stopGrating()
  cheese -= mods.grater.cost
  grater++
  graterModValue += mods.grater.modifier
  mods.grater.cost *= 4
  drawAll()
  intervalID = setInterval(grateCheese, 1000)
  mods.grater.modifier *= 2
}

function grateCheese() {
  cheese += graterModValue
  drawResources()
}

function stopGrating() {
  clearInterval(intervalID)
}

function buyMinion() {
  stopMining()
  cheese -= mods.minion.cost
  minion++
  mods.minion.cost *= 4
  drawAll()
  minionModValue += mods.grater.modifier
  minIntervalID = setInterval(minionCheese, 1000)
  mods.minion.modifier *= 2
}

function stopMining() {
  clearInterval(minIntervalID)
}

function minionCheese() {
  cheese += minionModValue
  drawAll()
}

function drawItemCost() {
  let knifeCost = document.getElementById('knife-button')
  let drillCost = document.getElementById('drill-button')
  let graterCost = document.getElementById('grater-button')
  let minionCost = document.getElementById('minion-button')
  knifeCost.innerText = `KNIFE: ${mods.knife.cost}`
  drillCost.innerText = `DRILL: ${mods.drill.cost}`
  graterCost.innerText = `GRATER: ${mods.grater.cost}`
  minionCost.innerText = `MINION: ${mods.minion.cost}`
}


function drawResources() {
  setTimeout
  let cheeseCount = document.getElementById('cheese-count')
  let knifeCount = document.getElementById('knife-count')
  let graterCount = document.getElementById('grater-count')
  let drillCount = document.getElementById('drill-count')
  let minionCount = document.getElementById('minion-count')
  cheeseCount.innerText = `CHEESE: ${cheese}`
  knifeCount.innerText = `KNIFE: ${knife}`
  drillCount.innerText = `DRILL: ${drill}`
  graterCount.innerText = `GRATER: ${grater}`
  minionCount.innerText = `MINION: ${minion}`
}

function drawModValues() {
  let knifeModElem = document.getElementById('knife-mod-display')
  let drillModElem = document.getElementById('drill-mod-display')
  let graterModElem = document.getElementById('grater-mod-display')
  let minionModElem = document.getElementById('minion-mod-display')
  knifeModElem.innerText = `KNIFE MOD VALUE: ${knifeModValue} per click`
  drillModElem.innerText = `DRILL MOD VALUE: ${drillModValue} per click`
  graterModElem.innerText = `GRATER MOD VALUE: ${graterModValue} per second`
  minionModElem.innerText = `MINION MOD VALUE: ${minionModValue} per second`


}


function drawAll() {
  knifeButtonToggle()
  drillButtonToggle()
  graterButtonToggle()
  minionButtonToggle()
  drawItemCost()
  drawModValues()
  drawResources()
}






drawAll()