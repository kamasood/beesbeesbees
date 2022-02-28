// call ForagerBee superclass
// Properties:
// age set to 40
// job set to 'gamble'
// canFly set to false;
// color set to 'grey'
// food (inherited from Grub)
// eat (inherited from Grub)
// treasureChest (inherited from ForagerBee)

// Methods:
// forage, return 'I am too old, let me play cards instead'
// gamble, add (treasure) parameter to treasureChest

// set prototype and constructor

var RetiredForagerBee = function() {

  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';

};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};

