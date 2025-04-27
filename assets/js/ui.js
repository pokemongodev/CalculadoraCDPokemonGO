// File: js/ui.js
export function showResults(origen, destino, distance, unit, hours, minutes) {
  const unitNames = {
    km: 'Kilómetros',
    mi: 'Millas',
    m: 'Metros'
  };

  const unitName = unitNames[unit] || 'Kilómetros';

  document.getElementById('resultado').innerHTML = `
    La distancia entre: <span class="info">${origen}</span> y 
    <span class="info">${destino}</span> es de 
    <span class="info">${distance} ${unitName}</span><br>
    El tiempo estimado es: <span class="info">${('0' + hours).slice(-2)} horas y ${('0' + minutes).slice(-2)} minutos</span>
  `;
  $('#outputModal').modal('show');
}

export function clearInputs() {
  document.getElementById('origen').value = '';
  document.getElementById('destino').value = '';
  document.getElementById('unit').selectedIndex = 0;

  document.getElementById('origen').classList.remove('is-invalid');
  document.getElementById('destino').classList.remove('is-invalid');
  document.getElementById('unit').classList.remove('is-invalid');

  document.getElementById('origen').placeholder = '';
  document.getElementById('destino').placeholder = '';
}
