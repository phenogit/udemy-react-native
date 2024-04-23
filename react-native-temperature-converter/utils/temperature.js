const UNITS = {
  celcius: "°C",
  fahrenheit: "°F",
};

function convertTemperatureTo(temperature, unitTo) {
  if (unitTo === UNITS.celcius) {
    return (temperature - 32) * (5 / 9);
  } else if (unitTo === UNITS.fahrenheit) {
    return temperature * (9 / 5) + 32;
  } else {
    throw new Error("Invalid unit");
  }
}

function getOppositeUnit(unit) {
  if (unit === UNITS.celcius) {
    return UNITS.fahrenheit;
  } else if (unit === UNITS.fahrenheit) {
    return UNITS.celcius;
  } else {
    throw new Error("Invalid unit");
  }
}

function isIceTemperature(temperature, unit) {
  if (unit === UNITS.celcius) {
    return temperature <= 0;
  } else if (unit === UNITS.fahrenheit) {
    return temperature <= 32;
  } else {
    throw new Error("Invalid unit");
  }
}

export { UNITS, convertTemperatureTo, getOppositeUnit, isIceTemperature };
