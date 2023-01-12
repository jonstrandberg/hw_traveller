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
  const modeOfTransport = this.journeys.filter(mode => mode.transport === transport)
  return modeOfTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const longJourneys = this.journeys.filter(journey => journey.distance >= minDistance)
  return longJourneys
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const sumTotalDistance = this.journeys.reduce ((runningTotal, journey) => {return runningTotal + journey.distance}, 0) 
  return sumTotalDistance
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const listOfModes = this.journeys.map((journey) => journey.transport)
  // const uniqueModes = [...new Set(listOfModes)]
  const uniqueModes = listOfModes.filter(function(mode, index, self) {
    return self.indexOf(mode) === index;});
return uniqueModes;
};



  //Alternative solution
  // const modesOfTransportTally = {}
  // this.jorneys.forEach(journey => {
  //   modesOfTransportTally[journey.transport] = "found"
  // })
  
  // return Object.keys(modesOfTransportTally)


module.exports = Traveller;
