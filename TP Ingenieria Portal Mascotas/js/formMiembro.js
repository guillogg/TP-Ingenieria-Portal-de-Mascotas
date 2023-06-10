
function validarFormulario(event) {
    event.preventDefault();

    // Obtener los valores ingresados en el formulario
    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('DNI').value;
    const telefono = document.getElementById('tel').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    var grupo1Options = document.querySelectorAll('input[name="tipoRegistro"]');


    /* 
    NuevoMiembro(tipoRegistro, nombre, dni, telefono, email, password);
    guardarEnBBDD(usuario);
    */

    // Limpiar los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('DNI').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';

    alert('Gracias por registrarte a Portal de Mascostas.');

}