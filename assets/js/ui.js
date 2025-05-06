export const showResults = (
  origen,
  destino,
  distance,
  unit,
  hours,
  minutes
) => {
  const unitNames = {
    km: 'km.',
    mi: 'Millas',
    m: 'Metros'
  };
  const unitName = unitNames[unit] || 'Kilómetros';
  $('#resultado').html(
    `<p class="text-justify">La distancia en línea recta entre: 
    <span class="info">${origen}</span> y <span class="info">${destino}</span> es de: 
    <span class="info">${distance}${unitName}</span><br>
    El tiempo estimado es de: 
    <span class="info">${('0' + hours).slice(-2)} horas y ${('0' + minutes).slice(-2)} minutos</span></p>`
  );
  $('#outputModal').modal('show');
};
export function clearInputs() {
  $('#origen, #destino')
    .val('')
    .removeClass('is-invalid active')
    .attr('placeholder', 'Introduce coordenadas')
    .attr('aria-label', function () {
      return $(this).attr('id') === 'origen' ? 'Origen' : 'Destino';
    });
  $('#unit')
    .removeClass('is-invalid')
    .find('option[value=""]')
    .text('Selecciona una unidad de medida');
  $('#unit').prop('selectedIndex', -1).val('');
  $("label[for='origen']").text('Origen');
  $("label[for='destino']").text('Destino');
  $("label[for='unit']").text('Unidad');
}
