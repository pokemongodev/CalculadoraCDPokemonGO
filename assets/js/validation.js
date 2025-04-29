export function handleInvalidInput($inputElement, message) {
  const $element = $($inputElement);
  $element.addClass('is-invalid');

  const id = $element.attr('id');
  const $label = $(`label[for='${id}']`);

  if ($element.is('select')) {
    // Forzar deselección para que el mensaje se actualice correctamente
    $element.prop('selectedIndex', -1);
    $element.find('option[value=""]').text(message);
    $element.val('');
  } else {
    $element.val('').attr('placeholder', message).removeClass('active');
  }

  if ($label.length) {
    $label.text(message);
  }
}

export function removeInvalidClass(inputElement) {
  const $element = $(inputElement);

  if ($element.is('select')) {
    if ($element.val() !== '') {
      $element.removeClass('is-invalid');
      $element.find('option[value=""]').text('Selecciona una unidad de medida');
      const id = $element.attr('id');
      $(`label[for='${id}']`).text('Unidad');
    }
  } else {
    if ($element.val().trim() !== '') {
      $element.removeClass('is-invalid');
      const defaultLabel =
        $element.attr('id') === 'origen' ? 'Origen' : 'Destino';
      $(`label[for='${$element.attr('id')}']`).text(defaultLabel);
    }
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
