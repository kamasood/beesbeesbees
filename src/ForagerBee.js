// call Bee superclass
// Properties:
// age set to 10
// job set to 'find pollen'
// canFly set to true
// treasureChest set to []
// color (inherited from Bee)
// eat (inherited from Grub)
// food (inherited from Grub)

// Methods:
// forage, add parameter (treasure) to treasureChest array

// set prototype and constructor

var ForagerBee = function() {

  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];

};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

