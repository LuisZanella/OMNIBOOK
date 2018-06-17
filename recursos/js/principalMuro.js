// busqueda de todas las personas
function Personas() {
    var Campos = ["IdBuscado", "Nick", "Imagen_Perfil", "Seguidores"];
    var spName = "sp_obtenerPersonas";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarPersonas");
}
function CargarPersonas(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        if ($.trim(Response.d[i].Datos)) {
            if (Response.d[i].Datos.Usuario.Id_Usuario !== -1) {
                $("#lstBuscarAmigo").append('<div class="col-md-8 col-lg-7 col-sm-5 col-xl-7 col-xs-12"><div class="list-item box r m-b" ><a herf="" class="list-left"><span class="w-40 avatar"><img src="' + Response.d[i].Datos.Imagen_Perfil + '" alt="..."> <i class="on b-white bottom"></i> </span></a><div class="list-body"><div class="text-ellipsis">' + Response.d[i].Datos.Usuario.Nick + '<a class="pull-right btn btn-info" onclick="Seguir(' + Response.d[i].Datos.Usuario.Id_Usuario + ')" class="btn btn-sm btn-rounded btn-info m-t-xs"> <i class= "fa fa-twitter m-t-xs"></i> Follow </a></div><small class="text-muted text-ellipsis">' + Response.d[i].Datos.Seguidores + '</small> </div></div></div >');
            }
        }
    }
}
//NotificacionesPrincipales
function NotificacionesPrincipales() {
    var Campos = ["Tipo", "Titulo", "Imagen", "Descripcion", "Fuente", "Fecha_Publicacion", "Imagen_Perfil"];
    var spName = "sp_obtenerNotificacionesPrincipal";

    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarNotificacionesPrincipal");
}
function CargarNotificacionesPrincipal(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        if ($.trim(Response.d[i].Datos)) {
            if (Response.d[i].Datos.Usuario.Id_Usuario !== -1) {
                //checar el tipo de la publicacion
                if (Response.d[i].Publicacion.Tipo === 1) {
                    //Sin imagen
                    $("#notificacionesPrincipal").append('<div class="sl-item"> <div class="sl-left"> <img src="' + Response.d[i].Datos.Imagen_Perfil + '" class="img-circle"> </div>  <div class="sl-left"></div> <div class="sl-content"> <div class="sl-date text-muted"> ' + Response.d[i].Publicacion.Fecha_Publicacion + ' </div> <blockquote> <p>' + Response.d[i].Publicacion.Descripcion + '</p> <small>Alguien famoso <cite title="Source Title">' + Response.d[i].Publicacion.Fuente + '</cite></small> </blockquote> </div> </div>');
                } else if (Response.d[i].Publicacion.Tipo === 2) {
                    //Con imagen
                    $("#notificacionesPrincipal").append('<div class="sl-item"> <div class="sl-left"> <img src="" class="img-circle"> </div>  <div class="sl-left"> <img src="' + Response.d[i].Publicacion.Imagen + '" class="img-circle"> </div> <div class="sl-content"> <div class="sl-date text-muted">  </div><blockquote> <p> ' + Response.d[i].Publicacion.Descripcion + '</p> <small>Alguien famoso <cite title="Source Title">' + Response.d[i].Publicacion.Fuente + '</cite></small> </blockquote> </div> </div>');
                } else if (Response.d[i].Publicacion.Tipo === 3) {
                    //Con imagen y titulo
                    $("#notificacionesPrincipal").append('<div class="sl-item"><div class="sl-left"><img src="' + Response.d[i].Datos.Imagen_Perfil + '" class="img-circle"></div><div class="sl-content"><div class="sl-date text-muted">' + Response.d[i].Publicacion.Fecha_Publicacion + '</div><div class="sl-author"><a href="">' + Response.d[i].Publicacion.Titulo + '</a></div><div><p>' + Response.d[i].Publicacion.Descripcion + '</p><p><span class="inline w-lg w-auto-xs p-a-xs b dark-white"><img src="' + Response.d[i].Publicacion.Imagen + '" class="w-full"></span></p></div></div></div>');
                } else if (Response.d[i].Publicacion.Tipo === 4) {
                    //no hay ninguna publicacion de los amigos (no hacer nada)
                }
            }
        }
    }
}
//Poner vocacion del usuario
function Vocacion() {
    var Campos = ["Vocacion"];
    var spName = "sp_obtenerVocacionPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarVocacion");
}
function CargarVocacion(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        $("#vocacionUsuario").append(Response.d[i].Datos.Vocacion);
        $("#vocacion").append('<small class="text-muted" >' + Response.d[i].Datos.Vocacion + '</small>');
    }
}
//Poner ubicacion del usuario
function Ubicacion() {
    var Campos = ["Ciudad", "Pais"];
    var spName = "sp_obtenerUbicacionPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarUbicacion");
}
function CargarUbicacion(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        if (Response.d[i].Datos.Usuario.Id_Usuario !== -1) {
            $("#ubicacionUsuario").append(Response.d[i].Datos.Ciudad + ", " + Response.d[i].Datos.Pais);
        }
    }
}
//Poner estado del usuario
function Estado() {
    var Campos = ["Estado"];
    var spName = "sp_obtenerEstadoPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarEstado");
}
function CargarEstado(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        if (Response.d[i].Datos.Usuario.Id_Usuario !== -1) {
            $("#estadoUsuario").append(Response.d[i].Datos.Estado);
        }
    }
}
//Poner seguidores del usuario
function Seguidores() {
    var Campos = ["Seguidores"];
    var spName = "sp_obtenerSeguidoresPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarSeguidores");
}
function CargarSeguidores(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        if (Response.d[i].Datos.Usuario.Id_Usuario !== -1) {
            $("#seguidores").append(Response.d[i].Datos.Seguidores);
        }
    }
}
//Poner siguiendo del usuario
function Siguiendo() {
    var Campos = ["Siguiendo"];
    var spName = "sp_obtenerSiguiendoPerfil";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarSiguiendo");
}
function CargarSiguiendo(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        if (Response.d[i].Datos.Usuario.Id_Usuario !== -1) {
            $("#siguiendo").append(Response.d[i].Datos.Siguiendo);
        }
    }
}
//Poner numero telefonico del usuario
function NoTelefonico() {
    var Campos = ["Telefono"];
    var spName = "sp_obtenernoTelefonico";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarNoTelefonico");
}
function CargarNoTelefonico(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        if (Response.d[i].Datos.Usuario.Id_Usuario !== -1) {
            $("#noTelefonico").append('<div class="_500">' + Response.d[i].Datos.Telefono + '</div>');
        }
    }
}
//Poner telefono casa del usuario
function TelefonoCasa() {
    var Campos = ["Telefono_Casa"];
    var spName = "sp_obtenernoTelefonicoCasa";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarTelefonoCasa");
}
function CargarTelefonoCasa(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        if (Response.d[i].Datos.Usuario.Id_Usuario !== -1) {
            $("#noCasa").append('<div class="_500">' + Response.d[i].Datos.Telefono_Casa + '</div>');
        }
    }
}
//Poner biografia del usuario
function Biografia() {
    var Campos = ["Biografia"];
    var spName = "sp_obtenerBiografia";
    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarBiografia");
}
function CargarBiografia(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        if (Response.d[i].Datos.Usuario.Id_Usuario !== -1) {
            $("#biografia").append('<div>' + Response.d[i].Datos.Biografia + '</div >');
        }
    }
}
//Poner biografia del usuario
function Publicacion() {
    var Campos = ["Tipo", "Titulo", "Imagen", "Descripcion", "Fuente", "Fecha_Publicacion", "Imagen_Perfil"];
    var spName = "sp_obtenerPublicaciones";

    var Obj = {
        "spNombre": spName, "Campos": Campos, "Id": IdUser
    };
    var data = JSON.stringify(Obj);
    ajax("OmniService.asmx", "Leer", data, "CargarPublicaciones");
}
function CargarPublicaciones(Response) {
    for (var i = 0; i < Response.d.length; i++) {
        if ($.trim(Response.d[i].Datos)) {
            if (Response.d[i].Datos.Usuario.Id_Usuario !== -1) {
                //checar el tipo de la publicacion
                if (Response.d[i].Publicacion.Tipo === 1) {
                    //Sin imagen
                    $("#muroPrincipal").append('<div class="sl-item"> <div class="sl-left"> <img src="' + Response.d[i].Datos.Imagen_Perfil + '" class="img-circle"> </div>  <div class="sl-left"></div> <div class="sl-content"> <div class="sl-date text-muted"> ' + Response.d[i].Publicacion.Fecha_Publicacion + ' </div> <blockquote> <p>' + Response.d[i].Publicacion.Descripcion + '</p> <small>Alguien famoso <cite title="Source Title">' + Response.d[i].Publicacion.Fuente + '</cite></small> </blockquote> </div> </div>');
                } else if (Response.d[i].Publicacion.Tipo === 2) {
                    //Con imagen
                    $("#muroPrincipal").append('<div class="sl-item"> <div class="sl-left"> <img src="" class="img-circle"> </div>  <div class="sl-left"> <img src="' + Response.d[i].Publicacion.Imagen + '" class="img-circle"> </div> <div class="sl-content"> <div class="sl-date text-muted">  </div><blockquote> <p> ' + Response.d[i].Publicacion.Descripcion + '</p> <small>Alguien famoso <cite title="Source Title">' + Response.d[i].Publicacion.Fuente + '</cite></small> </blockquote> </div> </div>');
                } else if (Response.d[i].Publicacion.Tipo === 3) {
                    //Con imagen y titulo
                    $("#muroPrincipal").append('<div class="sl-item"><div class="sl-left"><img src="' + Response.d[i].Datos.Imagen_Perfil + '" class="img-circle"></div><div class="sl-content"><div class="sl-date text-muted">' + Response.d[i].Publicacion.Fecha_Publicacion + '</div><div class="sl-author"><a href="">' + Response.d[i].Publicacion.Titulo + '</a></div><div><p>' + Response.d[i].Publicacion.Descripcion + '</p><p><span class="inline w-lg w-auto-xs p-a-xs b dark-white"><img src="' + Response.d[i].Publicacion.Imagen + '" class="w-full"></span></p></div></div></div>');
                } else if (Response.d[i].Publicacion.Tipo === 4) {
                    //no hay ninguna publicacion de los amigos (no hacer nada)
                }
            }
        }
    }
}