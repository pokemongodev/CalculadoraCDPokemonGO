// File: js/validation.js
export function handleInvalidInput(inputElement, message) {
  inputElement.classList.add('is-invalid');
  inputElement.setAttribute('value', message);
  inputElement.value = '';
}

export function removeInvalidClass(inputElement) {
  if (inputElement.value.trim() !== '') {
    inputElement.classList.remove('is-invalid');
  }
}

export function isValidCoordinates(coordinate) {
  const regex = /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/;
  const coords = coordinate.split(',').map((coord) => parseFloat(coord.trim()));
  const [lat, lon] = coords;
  return regex.test(coordinate) && isValidCoordinate(lat, lon);
}

export function isValidCoordinate(lat, lon) {
  return lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
}
