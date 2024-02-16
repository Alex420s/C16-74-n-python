document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("registroProfesional");
    var mensajeError = document.getElementById("mensajeError");
    var mensajeExito = document.getElementById("mensajeExito");

    const expresion = /^[A-Za-z]{4,16}$/;
    const expresion2 = /^[ A-Za-z]{5,25}$/;
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})$/;
    const phone = /^[0-9]{10}$/;
    const user = /^[ A-Za-z0-9_-]{5,16}$/;
    const passwd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    const texto = /^[ A-Za-z.]{15,500}$/;

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 

    var nombre = event.target.querySelector("#name_p").value;
    var apellido = event.target.querySelector("#lastname_p").value;
    var telefono = event.target.querySelector("#number_p").value;
    var correo = event.target.querySelector("#mail_p").value;
    var usuario = event.target.querySelector("#user_p").value;
    var password = event.target.querySelector("#password_p").value;
    var password2 = event.target.querySelector("#password2_p").value;
    var descripcion = event.target.querySelector("#description").value;
    var barrio = event.target.querySelector("#barrio").value;
    var dias = event.target.querySelectorAll('input[name="days"]:checked');
    
    switch (true) {
        case (nombre === "" || apellido === "" || telefono === "" || correo === "" || usuario === "" || password === "" || password2 === "" || descripcion === "" || barrio === "" || dias.length === 0):
            mostrarError("Debe rellenar todos los campos");
            return;
        case (!expresion.test(nombre)):
            mostrarError("El nombre dado es incorrecto");
            return;
        case (!expresion.test(apellido)):
            mostrarError("El apellido dado es incorrecto");
            return;
        case (!phone.test(telefono)):
            mostrarError("El número ingresado es incorrecta");
            return;
        case (!mailRegex.test(correo)):
            mostrarError("El correo es inválido");
            return;
        case (!user.test(usuario)):
            mostrarError("El usuario dado es incorrecto");
            return;
        case (!passwd.test(password)):
            mostrarError("La contraseña debe tener al menos 7 caracteres, 1 número y 1 caracter especial");
            return;
        case (password2 !== password):
            mostrarError("Las contraseñas ingresadas no coinciden");
            return;
        case (!document.querySelector('input[name="discipline"]:checked')):
            mostrarError("Debe seleccionar una disciplina");
            return;
        case (!texto.test(descripcion)):
            mostrarError("La descripción debe tener entre 15 y 500 caracteres");
            return;
        case (descripcion.length < 15 || descripcion.length > 500):
            mostrarError("La descripción debe tener entre 15 y 500 caracteres");
            return;
        case (!expresion2.test(barrio)):
            mostrarError("El barrio dado es incorrecto");
            return;
        case (dias.length === 0):
            mostrarError("Debe seleccionar al menos un día");
            return;
        default:
            formulario.reset();
                mostrarExito("Gracias! Su formulario fue enviado con éxito");
                mensajeError.style.display = "none";
                mensajeExito.style.display = "block";
                setTimeout(() => {
                    mensajeError.remove();
                    mensajeExito.remove();
                }, 10000);
                break;
    }
});

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    mensajeError.classList.add("error");
    document.body.appendChild(mensajeError);
}
});


