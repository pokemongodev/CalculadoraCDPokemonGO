import {
  handleInvalidInput,
  removeInvalidClass,
  isValidCoordinates
} from './validation.js';
import { distance, convertUnits, getTimeFromDistance } from './distance.js';
import { showResults, clearInputs } from './ui.js';

$(document).ready(function () {
  // clearInputs();
  $('#origen, #destino').on('input', function () {
    removeInvalidClass(this);
  });

  $('#unit').on('change', function () {
    removeInvalidClass(this);
  });

  $('#calcular').on('click', function () {
    const origen = $('#origen')[0];
    const destino = $('#destino')[0];
    const unit = $('#unit')[0];

    let invalidInputs = [];

    if (!isValidCoordinates(origen.value.trim())) {
      invalidInputs.push(origen);
    }

    if (!isValidCoordinates(destino.value.trim())) {
      invalidInputs.push(destino);
    }

    if (invalidInputs.length > 0) {
      invalidInputs.forEach((input) =>
        handleInvalidInput(input, '¡Coordenada inválida!')
      );
    }

    if (unit.value === '') {
      handleInvalidInput(unit, 'Selecciona una unidad de medida');
      unit.style.color = '#dc3545'; // rojo solo para esa opción
    }

    if (
      $(origen).hasClass('is-invalid') ||
      $(destino).hasClass('is-invalid') ||
      $(unit).hasClass('is-invalid')
    ) {
      return;
    }

    const [lat1, lon1] = origen.value.trim().split(',').map(Number);
    const [lat2, lon2] = destino.value.trim().split(',').map(Number);

    const distanceInKm = distance(lat1, lon1, lat2, lon2);
    const convertedDistance =
      unit.value === 'km'
        ? distanceInKm
        : convertUnits(distanceInKm, unit.value);

    const travelTime = getTimeFromDistance(distanceInKm);
    const hours = Math.floor(travelTime / 60);
    const minutes = travelTime % 60;

    showResults(
      origen.value.trim(),
      destino.value.trim(),
      convertedDistance.toFixed(2),
      unit.value,
      hours,
      minutes
    );
  });

  $('#borrar').on('click', function () {
    clearInputs();
  });
});
