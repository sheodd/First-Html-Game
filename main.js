var moneys = 0;
var shops = 0;
var shopups = 0;
var clickupgrade = 0;
var gold = 0;
var moneyPS = 0;
var damage = 1;
var Health = 10;
var hmult = 0;
var damageUpgrades = 0;
var plat = 0;
//called whenever you click or need money per second
function moneyClick(number){
	moneys = (moneys + number);
	
	document.getElementById("moneys").innerHTML = moneys;
	
};
//basic shop and mps gen base for how i did the rest
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
//bas upgade for shop how ill do upgrades from now on unless i finde a nuther way
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
//clock that ticks every second and calls functions
window.setInterval(function(){
moneyClick((shops / 2) + (shops * shopups) / 2);
MPS();




}, 1000);
//calculats the money gained persecond based off of the upgrades you have with your shop and other things as thay are added
function MPS(){
var moneyPerSecond = ((shops / 2) + (shops * shopups) /2);
moneyPS = moneyPerSecond;
document.getElementById('moneyPS').innerHTML = moneyPS
//Convert();
};
// going to be auto save featcher when i get there
window.setInterval(function(){
Save
}, 1000);
//amount per click mult
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
// saveing var

function Save(){
	var save = {
	moneys: moneys,
	shops: shops,
	shopups: shopups,
	clickupgrade: clickupgrade,
	damage: damage,
	Health: Health,
	damageUpgrades: damageUpgrades,
	hmult: hmult,
	
};
localStorage.setItem("save",JSON.stringify(save));

};
// well you should know what it is but its a cheat that makes you have way to much 
function Cheat(){
	moneys = moneys + 1000000000000000;
	document.getElementById('moneys').innerHTML = moneys;
	shops = shops + 1000000000000;
	document.getElementById('shops').innerHTML = shops;
	shopups = shopups + 1000000000000000;
	document.getElementById('shopups').innerHTML = shopups;
};
function plat(){
plat = plat + 100;
};
function Gold(){
	gold = gold + 150;
	document.getElementById('gold').innerHTML = gold;
};
// calculats hp loss and gain
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
// upgrade for damage
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
//converts curency
/*function Convert(){
	if (moneys >= 100){
		moneys = moneys - 100;
		gold = gold + 1;
		document.getElementById('gold').innerHTML = gold;
		document.getElementById('moneys').innerHTML = moneys;
		
	};
	if (gold >= 100){
	gold = gold - 100
	plat = plat + 1
	document.getElementById('plat').innerHTML = plat;
	document.getElementById('gold').innerHTML = gold;
	};
		*/
		
//};






// loads game
function Load(){
	var savegame = JSON.parse(localStorage.getItem("save")); 
	if (typeof savegame.hmult !== "undefined") hmult = savegame.hmult;
	if (typeof savegame.damageUpgrades !== "undefined") damageUpgrades = savegame.damageUpgrades; document.getElementById('damageUpGrades').innerHTML = damageUpGrades;var damageUpgradeCost = Math.floor(10 * Math.pow(2.1,damageUpgrades));document.getElementById('damageUpgradeCost').innerHTML = damageUpgradeCost;
	if (typeof savegame.Health !=="undefined") Health = savegame.Health; document.getElementById("Health").innerHTML = Health;
	if (typeof savegame.damage !== "undefined") damage = savegame.damage; document.getElementById("damage").innerHTML = damage;
	if (typeof savegame.moneys !== "undefined") moneys = savegame.moneys;
	if (typeof savegame.shops !== "undefined") shops = savegame.shops; document.getElementById('shops').innerHTML = shops;var nextCost = Math.floor(10 * Math.pow(1.1,shops));; document.getElementById("shopCost").innerHTML = nextCost;
	if (typeof savegame.shopups !== "undefined") shopups = savegame.shopups; document.getElementById('shopups').innerHTML = shopups;var shopUpCost = Math.floor(100 * Math.pow(1.1, shopups));document.getElementById('shopUpCost').innerHTML = shopUpCost;
	if (typeof savegame.clickupgrade !== "undefined") clickupgrade = savegame.clickupgrade; document.getElementById('clickupgrade').innerHTML = clickupgrade;var clickUpgradeCost = Math.floor(10 * Math.pow(2.1,clickupgrade));document.getElementById('clickUpgradeCost').innerHTML = clickUpgradeCost;
};
// delets the save of the game for good unless you save a gin
function delSave(){
	localStorage.removeItem("save");
	location.reload();
};