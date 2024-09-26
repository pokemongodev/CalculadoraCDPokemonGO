// This is where it all goes :)
document.addEventListener("DOMContentLoaded", function () {
  // Clear inputs and select on page load
  // clearInputs();

  // Add event listeners to remove red border on user input
  document.getElementById("origen").addEventListener("input", function () {
    removeInvalidClass(this);
  });

  document.getElementById("destino").addEventListener("input", function () {
    removeInvalidClass(this);
  });

  document.getElementById("unit").addEventListener("change", function () {
    removeInvalidClass(this);
  });
});

// Event listener for the "Calcular" button
document.getElementById("calcular").addEventListener("click", function () {
  var origen = document.getElementById("origen");
  var destino = document.getElementById("destino");
  var unit = document.getElementById("unit");

  // Validate coordinates
  if (!isValidCoordinates(origen.value.trim())) {
    handleInvalidInput(origen, "¡Coordenada inválida!");
  }
  if (!isValidCoordinates(destino.value.trim())) {
    handleInvalidInput(destino, "¡Coordenada inválida!");
  }
  if (unit.value === "") {
    handleInvalidInput(unit, "Seleccione una unidad");
  }

  if (origen.classList.contains("is-invalid") || destino.classList.contains("is-invalid") || unit.classList.contains("is-invalid")) {
    return; // Stop execution if any input is invalid
  }

  var latLon1 = origen.value.trim().split(",");
  var latLon2 = destino.value.trim().split(",");
  var lat1 = parseFloat(latLon1[0]);
  var lon1 = parseFloat(latLon1[1]);
  var lat2 = parseFloat(latLon2[0]);
  var lon2 = parseFloat(latLon2[1]);

  // Calculate distance in kilometers
  var distanceInKm = distance(lat1, lon1, lat2, lon2);

  var convertedDistance;
  var selectedUnit = unit.value; // Get the selected unit from the dropdown

  // Convert distance only if the selected unit is different from kilometers
  if (selectedUnit === "km") {
    convertedDistance = distanceInKm; // Use km directly
  } else {
    convertedDistance = convertUnits(distanceInKm, selectedUnit); // Convert the distance
  }

  // Use distance in kilometers to get travel time
  var travelTime = getTimeFromDistance(distanceInKm); // Use distanceInKm for consistent travel time
  var hours = Math.floor(travelTime / 60);
  var minutes = travelTime % 60;

  showResults(origen.value.trim(), destino.value.trim(), convertedDistance.toFixed(2), selectedUnit, hours, minutes);
});

// Function to handle invalid input
function handleInvalidInput(inputElement, message) {
  inputElement.classList.add("is-invalid"); // Add Bootstrap invalid class
  inputElement.setAttribute("value", message); // Set the placeholder to show the error message
  inputElement.value = ""; // Clear the input value
}

// Function to remove the red border when the user enters a value
function removeInvalidClass(inputElement) {
  if (inputElement.value.trim() !== "") {
    inputElement.classList.remove("is-invalid");
  }
}

// Event listeners to remove red border on input
document.querySelectorAll("input, select").forEach(function (element) {
  element.addEventListener("input", function () {
    removeInvalidClass(element);
  });
});

// Function to clear all input fields
document.getElementById("borrar").addEventListener("click", function () {
  document.querySelectorAll("input, select").forEach(function (element) {
    element.value = ""; // Clear the value
    removeInvalidClass(element); // Remove any red border
    window.location.reload();
  });
  document.getElementById("zonaresultado").classList.add("d-none"); // Hide the result area
});

// Clear inputs and reset validation
function clearInputs() {
  // Clear all inputs
  document.getElementById("origen").value = "";
  document.getElementById("destino").value = "";

  // Reset select
  document.getElementById("unit").selectedIndex = 0;

  // Remove any previous invalid classes
  document.getElementById("origen").classList.remove("is-invalid");
  document.getElementById("destino").classList.remove("is-invalid");
  document.getElementById("unit").classList.remove("is-invalid");

  // Reset placeholders
  document.getElementById("origen").placeholder = "";
  document.getElementById("destino").placeholder = "";
}

// Calculate distance between two points
function distance(lat1, lon1, lat2, lon2) {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515; // distance in miles

    // Convert distance to kilometers
    dist = dist * 1.609344;

    return dist;
  }
}

// Convert distance to selected unit
function convertUnits(distance, unit) {
  switch (unit) {
    case "km":
      return distance; // return distance in km
    case "mi":
      return distance * 0.621371; // convert km to miles
    case "m":
      return distance * 1000; // convert km to meters
    default:
      return distance; // fallback to km if no valid unit is selected
  }
}

// Validate coordinate format and range
function isValidCoordinates(coordinate) {
  const regex = /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/; // Regex to check for valid coordinate format
  const coords = coordinate.split(",").map((coord) => parseFloat(coord.trim()));
  const [lat, lon] = coords;

  // Check for regex match and range
  return regex.test(coordinate) && isValidCoordinate(lat, lon);
}

// Check if latitude and longitude are in valid range
function isValidCoordinate(lat, lon) {
  return lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
}

// Show results in modal
function showResults(origen, destino, distance, unit, hours, minutes) {
  // Map unit value to full names
  const unitNames = {
    km: "Kilómetros",
    mi: "Millas",
    m: "Metros",
  };

  // Get the full name for the selected unit
  const unitName = unitNames[unit] || "Kilómetros"; // Default to "Kilómetros" if unit is not recognized

  document.getElementById("resultado").innerHTML = `
        La distancia entre: <span class="info"'>${origen}</span> y 
        <span class="info"'>${destino}</span> es de 
        <span class="info"'>${distance} ${unitName}</span><br>
        El tiempo estimado es: <span class="info"'>${("0" + hours).slice(-2)} horas y ${("0" + minutes).slice(-2)} minutos</span>
    `;
  $("#outputModal").modal("show");
}

// Function to get estimated time from distance (always in kilometers)
function getTimeFromDistance(distance) {
  for (const range of distanceTimeMapping) {
    if (distance <= range.maxDistance) {
      return range.time;
    }
  }
  return null; // default case (if needed)
}

// Mapping array in kilometers and corresponding times in minutes
const distanceTimeMapping = [
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
  { maxDistance: Infinity, time: 120 },
];
