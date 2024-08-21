var botonConvertir = document.getElementById('convertir');
var campoTemperatura = document.getElementById('temperatura');
var selectConversion = document.getElementById('conversion');
var contenedorResultado = document.getElementById('resultado');

botonConvertir.addEventListener('click', function() {
    var temperatura = parseFloat(campoTemperatura.value);
    var conversion = selectConversion.value;
    var resultado = '';

    if (conversion === 'CtoF') {
        resultado = (temperatura * 9/5) + 32;
        contenedorResultado.textContent = temperatura + '°C es igual a ' + resultado.toFixed(2) + '°F';
    } else if (conversion === 'FtoC') {
        resultado = (temperatura - 32) * 5/9;
        contenedorResultado.textContent = temperatura + '°F es igual a ' + resultado.toFixed(2) + '°C';
    } else {
        contenedorResultado.textContent = 'Por favor, selecciona un tipo de conversión válido.';
    }
});
