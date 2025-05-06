export const handleInvalidInput = ($inputElement, message) => {
  const $element = $($inputElement);
  $element.addClass('is-invalid');

  const id = $element.attr('id');
  const $label = $(`label[for='${id}']`);

  if ($element.is('select')) {
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
      const $label = $(`label[for='${id}']`);
      $label.text(getDefaultLabel(id));
    }
  } else {
    if ($element.val().trim() !== '') {
      $element.removeClass('is-invalid');
      const $label = $(`label[for='${$element.attr('id')}']`);
      $label.text(getDefaultLabel($element.attr('id')));
    }
  }
};

const getDefaultLabel = (id) => {
  switch (id) {
  case 'origen':
    return 'Origen';
  case 'destino':
    return 'Destino';
  case 'unit':
    return 'Unidad';
  default:
    return '';
  }
};

export const isValidCoordinates = (coordinate) => {
  if (typeof coordinate !== 'string' || coordinate.trim() === '') {
    return false;
  }

  const regex = /^-?\d{1,3}(\.\d+)?\s*,\s*-?\d{1,3}(\.\d+)?$/;
  if (!regex.test(coordinate)) {
    return false;
  }

  const [lat, lon] = coordinate
    .split(',')
    .map((coord) => parseFloat(coord.trim()));

  return lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
};
