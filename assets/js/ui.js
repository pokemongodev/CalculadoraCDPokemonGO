// File: js/ui.js
export function showResults(origen, destino, distance, unit, hours, minutes) {
  const unitNames = {
    km: 'Kilómetros',
    mi: 'Millas',
    m: 'Metros'
  };
  const unitName = unitNames[unit] || 'Kilómetros';

  $('#resultado').html(`
    La distancia entre: <span class="info">${origen}</span> y 
    <span class="info">${destino}</span> es de 
    <span class="info">${distance} ${unitName}</span><br>
    El tiempo estimado es: <span class="info">${('0' + hours).slice(-2)} horas y ${('0' + minutes).slice(-2)} minutos</span>
  `);
  $('#outputModal').modal('show');
}

export function clearInputs() {
  $('#origen, #destino').val('').removeClass('is-invalid').attr('placeholder', '').attr('aria-label', '');
  $('#unit').prop('selectedIndex', 0).removeClass('is-invalid');
  $("label[for='origen']").text('Origen');
  $("label[for='destino']").text('Destino');
}
