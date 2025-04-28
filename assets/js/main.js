// File: js/main.js
import { handleInvalidInput, removeInvalidClass, isValidCoordinates } from './validation.js';
import { distance, convertUnits, getTimeFromDistance } from './distance.js';
import { showResults, clearInputs } from './ui.js';

document.addEventListener('DOMContentLoaded', function () {
  clearInputs();

  document.getElementById('origen').addEventListener('input', function () {
    removeInvalidClass(this);
  });

  document.getElementById('destino').addEventListener('input', function () {
    removeInvalidClass(this);
  });

  document.getElementById('unit').addEventListener('change', function () {
    removeInvalidClass(this);
  });

  document.getElementById('calcular').addEventListener('click', function () {
    const origen = document.getElementById('origen');
    const destino = document.getElementById('destino');
    const unit = document.getElementById('unit');

    if (!isValidCoordinates(origen.value.trim())) {
      handleInvalidInput(origen, '¡Coordenada inválida!');
    }
    if (!isValidCoordinates(destino.value.trim())) {
      handleInvalidInput(destino, '¡Coordenada inválida!');
    }
    if (unit.value === '') {
      handleInvalidInput(unit, 'Seleccione una unidad');
    }

    if (origen.classList.contains('is-invalid') || destino.classList.contains('is-invalid') || unit.classList.contains('is-invalid')) {
      return;
    }

    const [lat1, lon1] = origen.value.trim().split(',').map(Number);
    const [lat2, lon2] = destino.value.trim().split(',').map(Number);

    const distanceInKm = distance(lat1, lon1, lat2, lon2);
    const convertedDistance = unit.value === 'km' ? distanceInKm : convertUnits(distanceInKm, unit.value);

    const travelTime = getTimeFromDistance(distanceInKm);
    const hours = Math.floor(travelTime / 60);
    const minutes = travelTime % 60;

    showResults(origen.value.trim(), destino.value.trim(), convertedDistance.toFixed(2), unit.value, hours, minutes);
  });

  document.getElementById('borrar').addEventListener('click', function () {
    clearInputs();
    document.getElementById('zonaresultado').classList.add('d-none');
    $('#outputModal').modal('hide');
  });
});
