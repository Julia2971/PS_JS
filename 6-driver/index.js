const hasLisence = true;
const age = 20;
const isDrunk = true;

const canDrive = (age >= 18) && (hasLisence) && (!isDrunk) ? 'You can drive a car' : 'You can not drive a car';
console.log(canDrive)