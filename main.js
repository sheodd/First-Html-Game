var moneys = 0;
var shops = 0;
var shopups = 0;
var clickupgrade = 0;

var moneyPS = 0;
var damage = 1;
var Health = 10;
var hmult = 0;
var damageUpgrades = 0;
function moneyClick(number){
	moneys = (moneys + number);
	
	document.getElementById("moneys").innerHTML = moneys;
	
};
function buyShop(){
	var shopCost = Math.floor(10 * Math.pow(1.2,shops));
	if(moneys >= shopCost){
		shops = shops + 1;
		moneys = moneys - shopCost;
	
		document.getElementById('shops').innerHTML = shops;
		document.getElementById('moneys').innerHTML = moneys;
	};
	var nextCost = Math.floor(10 * Math.pow(1.2,shops));
	document.getElementById("shopCost").innerHTML = nextCost;
};
function buyShopUp(){
	var shopUpCost = Math.floor(100 * Math.pow(2.1,shopups));
	if(moneys >= shopUpCost) {
		shopups = shopups + 1;
		moneys = moneys - shopUpCost;
		document.getElementById('shopups').innerHTML = shopups;
		document.getElementById('moneys').innerHTML = moneys;
	};
	var shopUpCost = Math.floor(100 * Math.pow(2.1, shopups));
	document.getElementById('shopUpCost').innerHTML = shopUpCost;
};
window.setInterval(function(){
moneyClick((shops / 2) + (shops * shopups) / 2);
MPS();




}, 1000);
function MPS(){
var moneyPerSecond = ((shops / 2) + (shops * shopups) /2);
moneyPS = moneyPerSecond;
document.getElementById('moneyPS').innerHTML = moneyPS
};
window.setInterval(function(){
Save
}, 1000);
function buyClickUpgrade(){
var clickUpgradeCost = Math.floor(10 * Math.pow(2.1,clickupgrade));
if (moneys >= clickUpgradeCost){
	clickupgrade = clickupgrade + 1;
	moneys = moneys - clickUpgradeCost;

	document.getElementById('clickupgrade').innerHTML = clickupgrade;
	document.getElementById('moneys').innerHTML = moneys;
	var clickUpgradeCost = Math.floor(10 * Math.pow(2.1,clickupgrade));
	document.getElementById('clickUpgradeCost').innerHTML = clickUpgradeCost;
};
};

function Save(){
	var save = {
	moneys: moneys,
	shops: shops,
	shopups: shopups,
	clickupgrade: clickupgrade,
	/*damage: damage,
	Health: Health,
	damageUpGrades: damageUpGrades,
	hmult: hmult,*/
	
};
localStorage.setItem("save",JSON.stringify(save));

};
function Cheat(){
	moneys = moneys + 1000000000000000;
	document.getElementById('moneys').innerHTML = moneys;
	shops = shops + 1000000000000;
	document.getElementById('shops').innerHTML = shops;
	shopups = shopups + 1000000000000000;
	document.getElementById('shopups').innerHTML = shopups;
};
function HP(){
	

Health = Health - damage;
document.getElementById('Health').innerHTML = Health;
if (Health <= 0){
	hmult = hmult + 1;
	Health = 10 + (hmult * 2);
	moneys = moneys + 50;
	
	
	document.getElementById('Health').innerHTML = Health;
	document.getElementById('moneys').innerHTML = moneys;
};

};
function buyDamageUpgrade(){
	var damageUpgradeCost = Math.floor(10 * Math.pow(2.1,damageUpgrades));
	if (moneys >= damageUpgradeCost){
		damageUpgrades = damageUpgrades + 1;
		moneys = moneys - damageUpgradeCost;
		damage = damage + damageUpgrades;
		document.getElementById('damageUpGrades').innerHTML = damageUpgrades;
		document.getElementById('moneys').innerHTML = moneys;
		
	};
	var damageUpgradeCost = Math.floor(10 * Math.pow(2.1,damageUpgrades));
	document.getElementById('damageUpgradeCost').innerHTML = damageUpgradeCost;
	document.getElementById('damage').innerHTML = damage;

};


function Load(){
	var savegame = JSON.parse(localStorage.getItem("save")); 
	/*if (typeof savegame.hmult !== "undefined") hmult = savegame.hmult;
	if (typeof savegame.damageUpGrades !== "undefined") damageUpGrades = savegame.damageUpGrades; document.getElementById("damageUpGrades");
	if (typeof savegame.Health !=="undefined") Health = savegame.Health; document.getElementById("Health") = Health;
	if (typeof savegame.damage !== "undefined") damage = savegame.damage; document.getElementById("damage") = damage;*/
	if (typeof savegame.moneys !== "undefined") moneys = savegame.moneys;
	if (typeof savegame.shops !== "undefined") shops = savegame.shops; document.getElementById('shops').innerHTML = shops;var nextCost = Math.floor(10 * Math.pow(1.1,shops));; document.getElementById("shopCost").innerHTML = nextCost;
	if (typeof savegame.shopups !== "undefined") shopups = savegame.shopups; document.getElementById('shopups').innerHTML = shopups;var shopUpCost = Math.floor(100 * Math.pow(1.1, shopups));document.getElementById('shopUpCost').innerHTML = shopUpCost;
	if (typeof savegame.clickupgrade !== "undefined") clickupgrade = savegame.clickupgrade; document.getElementById('clickupgrade').innerHTML = clickupgrade;var clickUpgradeCost = Math.floor(10 * Math.pow(2.1,clickupgrade));document.getElementById('clickUpgradeCost').innerHTML = clickUpgradeCost;
};
function delSave(){
	localStorage.removeItem("save");
	location.reload();
};