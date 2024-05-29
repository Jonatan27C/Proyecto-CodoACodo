
document.querySelector('form').addEventListener('submit', function(event) {
event.preventDefault(); 

// para obtener los datos de cada item
const nombre = document.getElementById('Nombre').value;
const apellido = document.getElementById('apellido').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const nacimiento = document.getElementById('nacimiento').value;
const pais = document.querySelector('.seleccionPais').value;

if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || password.trim() === '' || nacimiento.trim() === '' || pais.trim() === '') {
         alert('Por favor completa todos los campos.');
         return; 
        }

     const aceptaTerminos = document.getElementById('termino').checked;

     //términos y condiciones
     if (!aceptaTerminos) {
         alert('Por favor acepta los términos y condiciones.');
         return;
     }
     alert('Registro exitoso!');
     document.querySelector('form').reset();
});






document.querySelector('.formularioI').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Por favor completa todos los campos.');
        return; 
    }

    alert('Inicio de sesión exitoso!');
    document.querySelector('.formularioI').reset();
});




