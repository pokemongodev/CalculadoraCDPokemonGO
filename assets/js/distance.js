// File: js/distance.js
export function distance(lat1, lon1, lat2, lon2) {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  } else {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) dist = 1;
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return dist;
  }
}

export function convertUnits(distance, unit) {
  switch (unit) {
    case 'km':
      return distance;
    case 'mi':
      return distance * 0.621371;
    case 'm':
      return distance * 1000;
    default:
      return distance;
  }
}

export function getTimeFromDistance(distance) {
  for (const range of distanceTimeMapping) {
    if (distance <= range.maxDistance) {
      return range.time;
    }
  }
  return null;
}

export const distanceTimeMapping = [
  { maxDistance: 0, time: 0 },
  { maxDistance: 1, time: 0 },
  { maxDistance: 2, time: 1 },
  { maxDistance: 3, time: 2 },
  { maxDistance: 5, time: 3 },
  { maxDistance: 8, time: 4 },
  { maxDistance: 10, time: 5 },
  { maxDistance: 15, time: 7 },
  { maxDistance: 20, time: 12 },
  { maxDistance: 25, time: 15 },
  { maxDistance: 35, time: 17 },
  { maxDistance: 40, time: 18 },
  { maxDistance: 45, time: 19 },
  { maxDistance: 50, time: 20 },
  { maxDistance: 60, time: 21 },
  { maxDistance: 70, time: 23 },
  { maxDistance: 80, time: 24 },
  { maxDistance: 90, time: 25 },
  { maxDistance: 100, time: 26 },
  { maxDistance: 125, time: 29 },
  { maxDistance: 150, time: 32 },
  { maxDistance: 175, time: 34 },
  { maxDistance: 201, time: 37 },
  { maxDistance: 250, time: 41 },
  { maxDistance: 300, time: 46 },
  { maxDistance: 328, time: 48 },
  { maxDistance: 350, time: 50 },
  { maxDistance: 400, time: 54 },
  { maxDistance: 450, time: 58 },
  { maxDistance: 500, time: 62 },
  { maxDistance: 550, time: 66 },
  { maxDistance: 600, time: 70 },
  { maxDistance: 650, time: 74 },
  { maxDistance: 700, time: 77 },
  { maxDistance: 751, time: 82 },
  { maxDistance: 802, time: 84 },
  { maxDistance: 839, time: 88 },
  { maxDistance: 897, time: 90 },
  { maxDistance: 900, time: 91 },
  { maxDistance: 948, time: 95 },
  { maxDistance: 1007, time: 98 },
  { maxDistance: 1020, time: 102 },
  { maxDistance: 1100, time: 104 },
  { maxDistance: 1180, time: 109 },
  { maxDistance: 1200, time: 111 },
  { maxDistance: 1221, time: 113 },
  { maxDistance: 1300, time: 117 },
  { maxDistance: 1344, time: 119 },
  { maxDistance: Infinity, time: 120 }
];
