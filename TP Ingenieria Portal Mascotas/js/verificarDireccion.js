var verificarButton = document.getElementById("verificar");

verificarButton.addEventListener("click", (e) => {
    e.preventDefault()
    // Obtener los valores de los inputs
    var calle = document.getElementById("calle").value;
    var altura = document.getElementById("altura").value;
    var partido = document.getElementById("partido").value;

    console.log("calle:", calle);
    console.log("altura:", altura);
    console.log("partido:", partido);

    fetch(`https://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${calle} ${altura}, ${partido}&geocodificar=TRUE`)
        .then(function (response) {
            if (response.ok)
                // casteamos los datos de la respuesta a formato JSON y lo retornamos.
                return response.json();

            else
                // sino, mensaje de error.
                throw new Error('Error en la solicitud');
        })
        .then(data => {
            console.log(data)
            if (data.direccionesNormalizadas.length === 0)
                alert("calle inexistente");
            else if (data.direccionesNormalizadas.length === 1)
                alert("direccion verificada");
            else
                alert("verifique direccion e intente nuevamente");
        })

});
MediaStreamAudioDestinationNodeasd
MediaStreamAudioDestinationNodeasdd
addEventListenerasd
addEventListener