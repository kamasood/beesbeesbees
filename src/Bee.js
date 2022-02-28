// call Grub superclass

// Properties:
// age set to 5
// color set to 'yellow'
// job set to 'keep on growing'

// food (inherited)
// eat (inherited)


var Bee = function() {

  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

