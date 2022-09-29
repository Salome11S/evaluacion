let nombre, correo, contraseña, contraseña1, numero;

let form1 = document.getElementById('formulario');

form1.addEventListener('submit', (e) => {
    e.preventDefult();
    LeerDatos()
})

function LeerDatos(nombre, correo, contraseña, contraseña1, numero){
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    contraseña = document.getElementById('contraseña').value
    contraseña1 = document.getElementById('contraseña1').value
    numero = document.getElementById('numero').value

    ValidarData(nombre, correo, contraseña, contraseña1, numero)
}

function ValidarData(nombre, correo, contraseña, contraseña1, numero){
    if (nombre.length == 0 || correo.length == 0 || contraseña.length == 0 || contraseña1.length == 0 || numero.length == 0) {

        swal({
            title: "opsss!",
            text: "Something went wrong!",
            icon: "error",
        });
    }

    else {
        swal.fire(
            'Good job!',
            'You clicked the button',
            'success',
        );
    }
    guardarLocalStorage(nombre, correo, contraseña, contraseña1, numero)
}

function guardarLocalStorage(nombre, correo, contraseña, contraseña1, numero) {
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('correo', correo);
    localStorage.setItem('contraseña', contraseña);
    localStorage.setItem('contraseña1', contraseña1);
    localStorage.setItem('numero', numero);
}