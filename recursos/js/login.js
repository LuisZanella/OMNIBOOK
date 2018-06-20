$("#txtPswI").keyup(function (event) {
    if (event.keyCode === 13) {
        btnIniciarSesion();
    }
});

function btnIniciarSesion() {
    var con = $("#txtPswI").val();
    var userObj = {
        "Contrasenia": sha256(con),
        "Nick": $("#txtUsuarioI").val()
    };

    var user = JSON.stringify(userObj);

	user = "{'user':" + user + "}";
    ajax('OmniService.asmx', 'iniciarSesion', user);
}
function iniciarSesion(response){
    if (response.d.Id_Usuario > 0) window.location.href = "Principal.aspx?" + response.d.Id_Usuario;
    if (response.d.Id_Usuario === 0) alert("Usuario o Contrase\u00f1a incorrectos");
}
function btnRegistrar() {
    if (validacionCamposEnviarEmail($('#txtNombreRegistro').val(), $('#txtCorreoRegistro').val(), $('#txtContraseniaRegistro').val(), $('#txtCContraseniaRegistro').val(),$('#txtNickRegistro').val())) btnRegistrarUsuario();
}
function validacionCamposEnviarEmail(nombre, correo, contrasenia, ccontrasenia, nick) {
    var emailVerficacion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var pase = false;
    if ($.trim(nombre) && $.trim(correo) && $.trim(contrasenia) && $.trim(ccontrasenia) && $.trim(nick)) {
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
    var con = $("#txtContraseniaRegistro").val();
    var userObj = {
        "Nombre": $("#txtNombreRegistro").val(),
        "Contrasenia": sha256(con),
        "Fecha_Nacimiento": $('#dtFechaNacimiento').val(),
        "Nick": $("#txtNickRegistro").val(),
        "Correo": $("#txtCorreoRegistro").val(),
        "Estatus": true
    };
    var user = JSON.stringify(userObj);

	user = "{'user':" + user + "}";
    ajax('OmniService.asmx', 'registrarUsuario', user,'registrarUsuario');

}
function registrarUsuario(response) {
    if (response.d > 0) {
        //se registro bien
        alert("Has sido registrado en Omnitrix!!");
        window.location.href = "Principal.aspx?" + response.d;
    } else {
        if (response.d = -300) {
            VerificarRegistroError();
        }
        else {
        //no se registro bien
            alert("Error al registrarte, trata mas tarde");
            }
    }
}
function VerificarRegistroError() {
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
    };
    var user = JSON.stringify(userObj);

    user = "{'user':" + user + "}";
    ajax('OmniService.asmx', 'checarUsuario', user, 'NickCorreoYaUsados');

}
function NickCorreoYaUsados(Response) {
    alert(Response.d)
}