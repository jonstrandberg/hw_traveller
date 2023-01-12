const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() { 
  const listOfStartLocations = this.journeys.map((journey) => {return journey.startLocation })
  return listOfStartLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  const listOfEndLocations = this.journeys.map((journey) => {return journey.endLocation })
  return listOfEndLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const modeOfTRansport = this.journeys.filter(mode => mode.transport === transport)
  return modeOfTRansport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const longJourneys = this.journeys.filter(trip => trip.distance >= minDistance)
  return longJourneys
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const sumTotalDistance = this.journeys.reduce ((runningTotal, journey) => {return runningTotal + journey.distance}, 0) 
  return sumTotalDistance
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const listOfModes = this.journeys.map((journey) => journey.transport)
  // let uniqueModes = [...new Set(listOfModes)]
  const uniqueModes = listOfModes.filter(function(mode, index, self) {
    return self.indexOf(mode) === index;});
return uniqueModes;
};

module.exports = Traveller;
