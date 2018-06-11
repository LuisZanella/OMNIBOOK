
function btnIniciarSesion() {
    var userObj = {
        "Contrasenia": $("#txtPswI").val(),
        "Nick": $("#txtUsuarioI").val()
    };

    var user = JSON.stringify(userObj);

    user = "{'user':" + user + "}";
    ajax('OmniService.asmx', 'iniciarSesion', user);
}
function iniciarSesion(response){
    if (response.d.Id_Usuario > 0) {
        window.location.href = "Principal.aspx?" + response.d.Id_Usuario;
    }
}
function btnRegistrar() {
    btnRegistrarUsuario(); //Dar de alta al usuario en la BD

    //var btnEnviar = $('#btnEnviarRegistro');
    //var nombre = $("#txtNombreRegistro").val();
    //var correo = $("#txtCorreoRegistro").val();
    //var contrasenia = $('#txtContraseniaRegistro').val();
    //var ccontrasenia = $('#txtCContraseniaRegistro').val();
    //var nick = $('#txtNickRegistro').val();
    //var mensaje = 'Gracias por Registrarte en Omnibook';
    //var asunto = 'Omnibook';
    //btnEnviar.attr('disabled', 'disabled');
    //if (validacionCamposEnviarEmail(nombre, correo, mensaje, contrasenia, ccontrasenia, nick) === true) {
    //    $.ajax({
    //        url: "recursos/email/php/sendmail.php",
    //        method: "post",
    //        data: {
    //            nombre: nombre,
    //            correo: correo,
    //            mensaje: mensaje,
    //            asunto: asunto,
    //            nick: nick
    //        },
    //        dataType: "json"
    //    })
    //        .done(function (response) {
    //            if (response.message == "Tu mensaje ha sido enviado con éxito. Pronto nos pondremos en contacto contigo.") {
    //                alert(response.message);
    //            }
    //            if (response.message == "No se pudo enviar el mensaje. Si el problema persiste, comuníquese con el desarrollador.") {
    //                alert("Error al enviar el mensaje")
    //            }
    //        })
    //        .fail(function (response) {
    //            alert(response.message);
    //            console.warn(response);
    //        })
    //}
    //btnEnviar.removeAttr('disabled');

}
function validacionCamposEnviarEmail(nombre, correo, mensaje, contrasenia, ccontrasenia, nick) {
    var emailVerficacion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var pase = false;
    if (nombre.trim() !== "" && correo.trim() !== "" && mensaje.trim() !== "" && contrasenia !== "" && ccontrasenia !== "" && nick !== "") {
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

function btnRegistrarUsuario() {
    var date = new Date($('#dtFechaNacimiento').val());
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    var userObj = {
        "Nombre": $("#txtNombreRegistro").val(),
        "Contrasenia": $("#txtContraseniaRegistro").val(),
        "Fecha_Nacimiento": $('#dtFechaNacimiento').val(),
        "Nick": $("#txtNickRegistro").val(),
        "Correo": $("#txtCorreoRegistro").val(),
        "Estatus": true
        //"Imagen_Perfil": "",
        //"Imagen_Portada": "",
        //"Telefono": "",
        //"Telefono_Casa": "",
        //"Biografia": "",
        //"Id_Usuario": 0
    };
    //userObj = "{'user':" + userObj + "}";

    var user = JSON.stringify(userObj);

    user = "{'user':" + user + "}";

    ajax('OmniService.asmx', 'registrarUsuario', user);

}
function registrarUsuario(response) {
    if (response.d > 0) {
        //se registro bien
        alert("Has sido registrado en Omnitrix!!");
        window.location.href = "Principal.aspx";
    } else {
        //no se registro bien
        alert("Error al registrarte, trata mas tarde...");
    }
}