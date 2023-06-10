function validarFormulario(event) {
    event.preventDefault(); // Evita el envío del formulario si hay errores de validación
    
    // Obtener los valores de los campos
    var org = document.getElementById('org').value;
    var horarios = document.getElementById('horarios').value;
    var foto = document.getElementById('foto').value;
    var telOrg = document.getElementById('telOrg').value;
    var descripcion = document.getElementById('descrpicion').value;
    
    // Validar los campos requeridos
    if (org.trim() === '') {
      alert('Por favor, ingresa el nombre de la organización.');
      return;
    }
    
    if (horarios.trim() === '') {
      alert('Por favor, ingresa los horarios.');
      return;
    }
    
    if (telOrg.trim() === '') {
      alert('Por favor, ingresa el teléfono de la organización.');
      return;
    }
    
    // Validar al menos una opción seleccionada en los grupos de checkboxes
    var grupo1Options = document.querySelectorAll('input[name="grupo1"]');
    var grupo2Options = document.querySelectorAll('input[name="grupo2"]');
    
    var grupo1Selected = Array.from(grupo1Options).some(function(option) {
      return option.checked;
    });
    
    var grupo2Selected = Array.from(grupo2Options).some(function(option) {
      return option.checked;
    });
    
    
  
    
    
    /*
    
    aca se aplica la siguiente logica:
    var direccion= new direccion("return de la API")  <-- esto se valida previamente en otro scrip

    var organizacion= new organizacion( org, direccion, horarios,
         foto, telOrg, grupo1Options, grupo2Options, descripcion)

    crearMail(organizacion);
    enviarMail(coordinador)

    */ 

    alert("se ha enviado un mail al coordinador. En los proximos dias recibiras noticias.");


  }
  