$(document).ready(function () {
    $("#notificaciones").append('<li class="list-group-item black lt box-shadow-z0 b"> <span class="pull-left m-r" ><img src="../recursos/img/logo.png" alt="..." class="w-40 img-circle"></span><span class="clear block"> Increible <a href="" class="text-primary" > texto animado</a > </br> <small class="text-muted">hace 10 minutos</small> </span > </li >');
    $("#notificaciones").append('<li class="list-group-item dark-white text-color box-shadow-z0 b"> <span class="pull-left m-r"><img src="../recursos/img/logo.png" alt="..." class="w-40 img-circle"></span><span class="clear block"> <a href="" class="text-primary">Danie</a> Mandar un mensaje<br><small class="text-muted">Hace 1 día</small></span></li>');
    $("#imagenNBSD").append('<span class="avatar w-32"><img src="../recursos/img/logo.png" alt="..."><i class="on b-white bottom"></i></span>');
    $("#imagenNBSI").append('<img class=" w-40 img-circle" src="../recursos/img/logo.png" alt="."/>');
    $("#imagenFondoPerfilPrincipal").append('<img src= "../recursos/img/logo.png" class="blur opacity-3"/>');
    $("#imagenPrincipalPersona").append('<img src="../recursos/img/logo.png"> <i class="on b-white"></i>');
    $("#nombreUsuario").append('Pablito 10');
    $("#vocacionUsuario").append('ISSC211/Ingeniero en software');
    $("#ubicacionUsuario").append('León, México');
    $("#estadoUsuario").append('Me siento bien!!');
    $("#seguidores").append('2k');
    $("#siguiendo").append('250');
    /*El siguiente append es sobre una publicacion*/
    $("#muroPrincipal").append('<div class="sl-item"><div class="sl-left"><img src= "../recursos/img/logo.png" class="img-circle" > </div > <div class="sl-content"> <div class="sl-date text-muted"><p>Hace 2 minutos</p></div> <div class="sl-author"> <a href="">Zanellita :D</a> </div> <div><p>Verifica tu conexion</p></div> <div class="sl-footer"></div> <div class="box collapse m-a-0" id="reply-1"> <form class="ng-pristine ng-valid"> <textarea class="form-control no-border" rows="3" placeholder="Escribe algo..."></textarea> </form> <div class="box-footer clearfix"> <button class="btn btn-info pull-right btn-sm">Enviar</button></div> </div> </div> </div>');
    /*Publicacion con imagen*/
    $("#muroPrincipal").append('<div class="sl-item"> <div class="sl-left"> <img src="../recursos/img/logo.png" class="img-circle"> </div> <div class="sl-content"> <div class="sl-date text-muted"> 8:30 </div> <div class="sl-author"> <a href="">Sofi</a> </div> <div> <p>Llamar al cliente <a href="" class="text-info"> Pablillo</a> y hablar de los detalles.</p> <p><span class="inline w-lg w-auto-xs p-a-xs b dark-white"><img src="../recursos/img/logo.png" class="w-full"></span></p> </div> </div> </div>');
    /*Publicacion con una mejor nota*/
    $("#muroPrincipal").append('<div class="sl-item"> <div class="sl-left"> <img src="../recursos/img/logo.png" class="img-circle"> </div> <div class="sl-content"> <div class="sl-date text-muted"> Sat, 5 Mar </div> <p>Preparar presentacion</p> <blockquote> <p> Los sentimientos son algo que simplemente no se pueden entender, y se cometen muchas errores por ellos. Pero es aquella la mente la que se encarga de aprender de estos errores </p> <small>Alguien famoso <cite title="Source Title">Fuente titulos</cite></small> </blockquote> </div> </div>');
    $("#notificacionesPrincipal").append('<div class="sl-item"> <div class="sl-content"> <div class="sl-date text-muted"> Hace 2 minutos </div> <p>Verifica tu conexión a internet</p> </div> </div>');
    $("").append('descripcionUsuario');
})

