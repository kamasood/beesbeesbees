// call Bee superclass
// Properties:
// age set to 10
// job set to 'make honey'
// honeyPot set to 0
//
// color (inherited from bee) set to yellow (automatically because lookup returns from Bee.color)
// food (inherted from grub)
// eat (inhertied from grub)

// Methods:
// makeHoney, adds 1 to honeyPot
// giveHoney, subtracts 1 from honeyPot (edge case where honeyPot is empty)

// set prototype and constructor
var HoneyMakerBee = function() {

  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  if (this.honeyPot > 0) {
    this.honeyPot--;
  } else {
    alert('This Bee has no honey to give!');
  }
};

