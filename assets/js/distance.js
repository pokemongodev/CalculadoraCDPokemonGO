// File: js/distance.js

export const distance = (lat1, lon1, lat2, lon2) => {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  }

  const radlat1 = (Math.PI * lat1) / 180;
  const radlat2 = (Math.PI * lat2) / 180;
  const theta = lon1 - lon2;
  const radtheta = (Math.PI * theta) / 180;

  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

  dist = Math.acos(Math.min(dist, 1)); // Asegurarse de que no supere 1
  dist = (dist * 180) / Math.PI;
  dist *= 60 * 1.1515 * 1.609344; // Conversión a kilómetros

  return dist;
};

export const convertUnits = (distance, unit) => {
  const unitConversions = {
    km: distance,
    mi: distance * 0.621371,
    m: distance * 1000
  };

  return unitConversions[unit] ?? distance;
};

export const getTimeFromDistance = (distance) => {
  for (const range of distanceTimeMapping) {
    let maxDistance = range[0];
    let time = range[1];

    if (distance <= maxDistance) {
      return time;
    }
  }
  return null;
};

export const distanceTimeMapping = [
  [0, 0],
  [1, 0],
  [2, 1],
  [3, 2],
  [5, 3],
  [8, 4],
  [10, 5],
  [15, 7],
  [20, 12],
  [25, 15],
  [35, 17],
  [40, 18],
  [45, 19],
  [50, 20],
  [60, 21],
  [70, 23],
  [80, 24],
  [90, 25],
  [100, 26],
  [125, 29],
  [150, 32],
  [175, 34],
  [201, 37],
  [250, 41],
  [300, 46],
  [328, 48],
  [350, 50],
  [400, 54],
  [450, 58],
  [500, 62],
  [550, 66],
  [600, 70],
  [650, 74],
  [700, 77],
  [751, 82],
  [802, 84],
  [839, 88],
  [897, 90],
  [900, 91],
  [948, 95],
  [1007, 98],
  [1020, 102],
  [1100, 104],
  [1180, 109],
  [1200, 111],
  [1221, 113],
  [1300, 117],
  [1344, 119],
  [Infinity, 120]
];
