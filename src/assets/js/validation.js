export const handleInvalidInput = ($inputElement, message) => {
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
};

export const removeInvalidClass = (inputElement) => {
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
};

export const isValidCoordinate = (lat, lon) => lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;

export const isValidCoordinates = (coordinate) => {
  // Verificar que la entrada sea una cadena no vacía
  if (typeof coordinate !== 'string' || coordinate.trim() === '') {
    return false;
  }

  const regex = /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/;
  if (!regex.test(coordinate)) {
    return false; // Formato incorrecto
  }

  const coords = coordinate.split(',').map((coord) => parseFloat(coord.trim()));
  const [lat, lon] = coords;

  // Verificar que lat y lon sean números válidos
  if (isNaN(lat) || isNaN(lon)) {
    return false; // No son números válidos
  }

  return isValidCoordinate(lat, lon);
};
