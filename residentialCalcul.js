const { pricing } = require('./data.js');

const residentialElevatorCalcul = (numberofApts, numberofFloors) => {
   return Math.ceil(numberofApts / numberofFloors / 6) * Math.ceil(numberofFloors / 20);
}

  module.exports = {residentialElevatorCalcul};