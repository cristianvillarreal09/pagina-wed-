const formulario = document.getElementById('formulario-registro');
const password = document.getElementById('contraseña');
const seguridad = document.getElementById('nivelseguridad');
const usuario = document.getElementById('nombreusuario');
const correoElectronico = document.getElementById('correo');

password.addEventListener('input', () => {
    const valor = password.value;
    let fortaleza = 0;

    if (valor.length > 5) fortaleza += 30;
    if (valor.match(/[A-Z]/)) fortaleza += 30;
    if (valor.match(/[0-9]/)) fortaleza += 40;

    seguridad.style.width = fortaleza + '%';

    if (fortaleza < 40) {
        seguridad.style.background = '#ef4444';
    } else if (fortaleza < 70) {
        seguridad.style.background = '#f59e0b';
    } else {
        seguridad.style.background = '#22c55e';
    }
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (formulario.checkValidity()) {
        const datosUsuario = {
            nombreusuario: usuario.value,
            email: correoElectronico.value,
            password: password.value,
            fecha: new Date().toLocaleString()
        };

        localStorage.setItem('usuarioRegistrado', JSON.stringify(datosUsuario));

        alert('¡Datos guardados con éxito en el almacenamiento local!');
        console.log('Datos en LocalStorage:', JSON.parse(localStorage.getItem('usuarioRegistrado')));

        formulario.reset();
        seguridad.style.width = '0%';
    } else {
        alert('Por favor, corrige los errores en el formulario.');
    }
});