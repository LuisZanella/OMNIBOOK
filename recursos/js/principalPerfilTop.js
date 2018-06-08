$(document).ready(function () {
   /*SPLISTO*/ $("#notificaciones").append('<li class="list-group-item black lt box-shadow-z0 b"> <span class="pull-left m-r" ><img src="../recursos/img/logo.png" alt="..." class="w-40 img-circle"></span><span class="clear block"> Increible <a href="" class="text-primary" > texto animado</a > </br> <small class="text-muted">hace 10 minutos</small> </span > </li >'); //imagen, nombre de usuario y titulo
     /*SPLISTO*/$("#notificaciones").append('<li class="list-group-item dark-white text-color box-shadow-z0 b"> <span class="pull-left m-r"><img src="../recursos/img/logo.png" alt="..." class="w-40 img-circle"></span><span class="clear block"> <a href="" class="text-primary">Danie</a> Mandar un mensaje<br><small class="text-muted">Hace 1 día</small></span></li>');
     /*SPLISTO*/$("#imagenNBSD").append('<span class="avatar w-32"><img src="../recursos/img/logo.png" alt="..."><i class="on b-white bottom"></i></span>'); //traer la foto del usuario actual
     /*SPLISTO*/$("#imagenNBSI").append('<img class=" w-40 img-circle" src="../recursos/img/logo.png" alt="."/>'); //omite, es el sp anterior
     /*SPLISTO*/$("#imagenFondoPerfilPrincipal").append('<img src= "../recursos/img/logo.png" class="blur opacity-3"/>'); //traer imagen de portada
     /*SPLISTO*/$("#imagenPrincipalPersona").append('<img src="../recursos/img/logo.png"> <i class="on b-white"></i>'); //omite, es el sp de la imagen del usuario
     /*SPLISTO*/$("#nombreUsuario").append('Pablito 10'); //obtener el nombre del usuario
     /*SPLISTO*/$("#vocacionUsuario").append('ISSC211/Ingeniero en software'); //obtener la vocacion del usuario
     /*SPLISTO*/$("#ubicacionUsuario").append('León, México'); //obtener la ubicacion del usuario
     /*SPLISTO*/$("#estadoUsuario").append('Me siento bien!!'); // obtener el estado del usuario
     /*SPLISTO*/$("#seguidores").append('2k'); //obtener los seguidores del usuario
     /*SPLISTO*/$("#siguiendo").append('250'); //obtener siguiendo del usaurio
    /*El siguiente append es sobre una publicacion*/
    $("#muroPrincipal").append('<div class="sl-item"><div class="sl-left"><img src= "../recursos/img/logo.png" class="img-circle" > </div > <div class="sl-content"> <div class="sl-date text-muted"><p>Hace 2 minutos</p></div> <div class="sl-author"> <a href="">Zanellita :D</a> </div> <div><p>Verifica tu conexion</p></div> <div class="sl-footer"></div> <div class="box collapse m-a-0" id="reply-1"> <form class="ng-pristine ng-valid">');
    $("#muroPrincipal").append('<textarea class="form-control no-border textShare" rows="3" placeholder="Escribe algo..."></textarea> </form> <div class="box-footer clearfix"> <button class="btn btn-info pull-right btn-sm">Enviar</button></div> </div> </div> </div>');
    /*Publicacion con imagen*/
    $("#muroPrincipal").append('<div class="sl-item"> <div class="sl-left"> <img src="../recursos/img/logo.png" class="img-circle"> </div> <div class="sl-content"> <div class="sl-date text-muted"> 8:30 </div> <div class="sl-author"> <a href="">Sofi</a> </div> <div> <p>Llamar al cliente <a href="" class="text-info"> Pablillo</a> y hablar de los detalles.</p> <p><span class="inline w-lg w-auto-xs p-a-xs b dark-white"><img src="../recursos/img/logo.png" class="w-full"></span></p> </div> </div> </div>');
    /*Publicacion con una mejor nota*/
    $("#muroPrincipal").append('<div class="sl-item"> <div class="sl-left"> <img src="../recursos/img/logo.png" class="img-circle"> </div> <div class="sl-content"> <div class="sl-date text-muted"> Sat, 5 Mar </div> <p>Preparar presentacion</p> <blockquote> <p> Los sentimientos son algo que simplemente no se pueden entender, y se cometen muchas errores por ellos. Pero es aquella la mente la que se encarga de aprender de estos errores </p> <small>Alguien famoso <cite title="Source Title">Fuente titulos</cite></small> </blockquote> </div> </div>');
    /*Notificaciones*/
    $("#notificacionesPrincipal").append('<div class="sl-item"> <div class="sl-content"> <div class="sl-date text-muted"> Hace 2 minutos </div> <p>Verifica tu conexión a internet</p> </div> </div>');
    /*Amigos*/
     /*SPLISTO*/$("#friends").append('<div class="col-xs-6 col-lg-4"><div class="list-item box r m-b" ><a herf="" class="list-left"><span class="w-40 avatar"><img src="../recursos/img/logo.png" alt="..."> <i class="on b-white bottom"></i> </span></a><div class="list-body"><div class="text-ellipsis"><a href="">Crystal Guerrero</a></div><small class="text-muted text-ellipsis">Diseñador, Blogger</small> </div></div></div >'); // imagen del amigo, vocacion, nickname
    /*Perfil*/
     /*SPLISTO*/$("#noTelefonico").append('<div class="_500">1243 0303 0333</div>');
     /*SPLISTO*/$("#noCasa").append('<div class="_500">1243 0303 0333</div>')
    $("#vocacion").append('<small class="text-muted" > Reportero</small>')
    $("#vocacion").append('<div class="_500" > Coch Jose</div >');
     /*SPLISTO*/$("#biografia").append('<div>Cómo muchos saben mi destino no esta escrito, pero mi pasado si, no me arrepiento de esto.Porque gracias a esto soy como soy. </div >');
    /*A quien seguir*/
    $("#seguir").append('<li class="list-item"><a herf= "" class="list-left" ><span class="w-40 avatar"><img src="../recursos/img/logo.png" alt="..."><i class="on b-white bottom"></i></span></a><div class="list-body"><div><a href="">Megan Fox</a></div><small class="text-muted text-ellipsis">Diseñador, Blogger</small><a href="" class="btn btn-sm btn-rounded btn-info m-t-xs"><i class="fa fa-twitter m-t-xs" ></i > Follow</a ></div></li>');
    /*Top famoso*/
    $("#famoso").append('<a href="" class="pull-left m-r"><img src= "../recursos/img/logo.png" class="img-circle w-40" ></a ><div class="clear"><a href="">@Mike Mcalidek</a><small class="block text-muted">2,415 followers / 225 tweets</small><a href="" class="btn btn-sm btn-rounded btn-info m-t-xs"><i class="fa fa-twitter m-t-xs" ></i > Follow</a ></div>');
    /*Noticias resientes*/
    $("#noticias").append('<li class="list-item"><div class="list-body" ><p>Bienvenido<a href="" class="text-info">@Drew Wllon </a></p><small class="block text-muted"><i class="fa fa-fw fa-clock-o"></i>Hace 2 minutos</small></div></li >');
    $("").append('descripcionUsuario');
})

