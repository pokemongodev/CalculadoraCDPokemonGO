// File: js/validation.js
export function handleInvalidInput($inputElement, message) {
  const $element = $($inputElement);
  $element.addClass('is-invalid').val('').attr('placeholder', message);
  $(`label[for='${$element.attr('id')}']`).text(message);
}

export function removeInvalidClass(inputElement) {
  if ($(inputElement).val().trim() !== '') {
    $(inputElement).removeClass('is-invalid');
    const defaultLabel = $(inputElement).attr('id') === 'origen' ? 'Origen' : 'Destino';
    $(`label[for='${$(inputElement).attr('id')}']`).text(defaultLabel);
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
