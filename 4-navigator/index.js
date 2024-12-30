function getDistance(addLat, addLong, posLat, posLong) {
  return Math.sqrt((addLat - posLat)**2 + (addLong-posLong)**2);
}
console.log(getDistance(10,20,30,40))