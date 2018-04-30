function btnIniciarSesion() {
    ajax('OmniService.asmx','iniciarSesion');
}
function iniciarSesion(){

}
function btnRegistrar() {
    var btnEnviar = $('#btnEnviarRegistro');
    var nombre = $("#txtNombreRegistro").val();
    var correo = $("#txtCorreoRegistro").val();
    var contrasenia = $('#txtContraseniaRegistro').val();
    var ccontrasenia = $('#txtCContraseniaRegistro').val();
    var nick = $('#txtNickRegistro').val();
    var mensaje = 'Gracias por Registrarte en Omnibook';
    var asunto = 'Omnibook';
    btnEnviar.attr('disabled', 'disabled');
    if (validacionCamposEnviarEmail(nombre, correo, mensaje, contrasenia, ccontrasenia, nick) === true) {
        $.ajax({
            url: "recursos/email/php/sendmail.php",
            method: "post",
            data: {
                nombre: nombre,
                correo: correo,
                mensaje: mensaje,
                asunto: asunto,
                nick: nick
            },
            dataType: "json"
        })
            .done(function (response) {
                if (response.message == "Tu mensaje ha sido enviado con éxito. Pronto nos pondremos en contacto contigo.") {
                    alert(response.message);
                }
                if (response.message == "No se pudo enviar el mensaje. Si el problema persiste, comuníquese con el desarrollador.") {
                    alert("Error al enviar el mensaje")
                }
            })
            .fail(function (response) {
                alert(response.message);
                console.warn(response);
            })
    }
    btnEnviar.removeAttr('disabled');
}
function validacionCamposEnviarEmail(nombre, correo, mensaje,contrasenia,ccontrasenia,nick) {
    var emailVerficacion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var pase = false;
    if (nombre.trim() !== "" && correo.trim() !== "" && mensaje.trim() !== "" && contrasenia !== "" && ccontrasenia !== "" && nick !=="") {
        if (nick.length <= 20) {
            if (emailVerficacion.test(correo) === true) {
                if (contrasenia === ccontrasenia) {
                    pase = true;
                }
                else alert('Las contraseñas no coinciden.');
            }
            else alert('Verifique que su correo este bien escrito.');
        }
        else alert('El nick tiene que ser menor de 20 caracteres.');
    }
     else alert("Favor de llenar todos los campos.");

    return pase;
}
function btnRestaurarContrasena() {

}