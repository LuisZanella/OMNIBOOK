﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Principal.aspx.cs" Inherits="Principal" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8"/>
    <title>OMNIBOOK</title>
    <meta name="description" content="Admin, Dashboard, Bootstrap, Bootstrap 4, Angular, AngularJS"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <!--Icon-->
    <link rel="icon" type="image/x-icon" href="../recursos/img/iconos/logo.ico"/>

    <!-- for Chrome on Android, multi-resolution icon of 196x196 -->
    <meta name="mobile-web-app-capable" content="yes"/>
    <link rel="shortcut icon" sizes="196x196" href="../recursos/img/iconos/logo.ico"/>
    <link rel="stylesheet" type="text/css" href="../recursos/plugin/flatkit/assets/animate.css/animate.min.css"/>
    <link rel="stylesheet" type="text/css" href="../recursos/plugin/flatkit/assets/glyphicons/glyphicons.css"/>
    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" type="text/css" href="../recursos/plugin/flatkit/assets/material-design-icons/material-design-icons.css"/>
    <link rel="stylesheet" type="text/css" href="../recursos/plugin/flatkit/assets/bootstrap/dist/css/bootstrap.css"/>
    <!-- build:css libs/flatkit/assets/styles/app.min.css -->
    <link rel="stylesheet" type="text/css" href="../recursos/plugin/flatkit/assets/styles/app.css"/>
    <!-- endbuild -->
    <link rel="stylesheet" type="text/css" href="../recursos/plugin/flatkit/assets/styles/font.css"/>
    <link rel="stylesheet" type="text/css"
          href="../recursos/plugin/flatkit/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="../recursos/css/olvideContraseniaModal.css" />
    <link href="../recursos/plugin/flatkit/assets/animate.css/animate.min.css" rel="stylesheet" />
    <!-- w3School-->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
    <!-- css personalisados-->
    <link href="../recursos/css/wrapNav.css" rel="stylesheet" />
    <!--Icon-->
    <link rel="icon" type="image/x-icon" href="../recursos/img/iconos/logo.ico"/>
        <!--JAVASCRIPT-->
    <script src="../recursos/plugin/flatkit/libs/jquery/jquery/dist/jquery.js"></script>
    <script src="../recursos/plugin/flatkit/libs/jquery/tether/dist/js/tether.min.js"></script>
    <script src="../recursos/plugin/flatkit/libs/jquery/bootstrap/dist/js/bootstrap.js"></script>
    <script src="../recursos/plugin/flatkit/scripts/ui-device.js"></script>
    <script src="../recursos/plugin/flatkit/scripts/ui-form.js"></script>
    <script src="../recursos/plugin/flatkit/scripts/ajax.js"></script>
    <!--JS PERSONALIZADOS-->
    <script src="../recursos/js/global.js"></script>
    <script src="../recursos/js/login.js"></script>
    <script src="../recursos/js/principalPerfilTop.js"></script>
</head>
<body>
    <div class="app-header colorDegrade box-shadow navbar-md">
        <div class="navbar ng-scope">
            <a data-toggle="modal" data-target="#aside" class="navbar-item pull-left hidden-lg-up">
                <i class="material-icons"></i>
            </a>
            <ul class="nav navbar-nav pull-right">
                <li class="nav-item dropdown pos-stc-xs">
                    <a class="nav-link" href="" data-toggle="dropdown">
                        <i class="material-icons">notifications_none</i> <span class="label label-sm up warn">3</span>
                    </a>
                    <div class="dropdown-menu pull-right w-xl animated fadeInUp no-bg no-border no-shadow ng-scope">
                        <div class="scrollable" style="max-height: 220px">
                            <ul class="list-group list-group-gap m-a-0" id="notificaciones">
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link clear" href="" data-toggle="dropdown" id="imagenNBSD">
                    </a>
                    <div class="dropdown-menu pull-right dropdown-menu-scale ng-scope">
                        <a class="dropdown-item" ui-sref="app.inbox.list" href="#/app/inbox/inbox/">
                            <span>Mensajes</span>
                            <span class="label warn m-l-xs">3</span>
                        </a>
                        <a class="dropdown-item" ui-sref="app.page.profile" href="#/app/page/profile">
                            <span>Perfil</span>
                        </a>
                        <a class="dropdown-item" ui-sref="app.page.setting" href="#/app/page/setting">
                            <span>Configuración</span>
                            <span class="label primary m-l-xs">3/9</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" ui-sref="access.signin" href="#/access/signin">Salir</a>
                    </div>
                </li>
                <li class="nav-item hidden-md-up">
                    <a class="nav-link" data-toggle="collapse" data-target="#collapse">
                        <i class="material-icons"></i>
                    </a>
                </li>
            </ul>
            <div class="collapse navbar-toggleable-sm" id="collapse">
                <form class="navbar-form form-inline pull-right pull-none-sm navbar-item v-m ng-pristine ng-valid ng-scope"
                      role="search">
                    <div class="form-group l-h m-a-0">
                        <div class="input-group">
                            <input type="text" class="form-control form-control-sm p-x b-a rounded" placeholder="Buscar un Amigo"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div id="aside" class="app-aside modal fade folded md nav-expand ng-scope">
        <div class="left navside indigo-900 dk" layout="column">
            <div class="navbar navbar-md no-radius">
                <a class="navbar-brand ng-scope">
                    <i id="imagenNBSI"></i>
                    <span class="hidden-folded inline ng-binding">Perfil</span>
                </a>
            </div>
            <div flex="" class="hide-scroll">
                <nav class="scroll nav-active-success">
                    <ul class="nav ng-scope" ui-nav="">
                        <li class="nav-header hidden-folded">
                            <small class="text-muted">Menú</small>
                        </li>
                    </ul>
                </nav>
            </div>
            <div flex-no-shrink="">
                <nav ui-nav="" class="ng-scope">
                    <ul class="nav">
                        <li class="no-bg">
                            <a>
                                <span class="nav-icon"><i class="material-icons">help</i></span>
                                <span class="nav-text">Ayuda</span>
                            </a>
                        </li>
                        <li>
                            <div class="b-b b m-v-sm"></div>
                        </li>
                        <li class="no-bg">
                            <form id="form1" runat="server">
                                    <span class="nav-icon">
                                    <i class="material-icons"></i>
                                    </span>
                                   <span><asp:LinkButton ID="LinkButton1" runat="server" OnClick="lnkCerrar_click" CssClass="nav-text">Cerrar Sesión</asp:LinkButton></span>
                            </form>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <div ui-view="" class="app-body ng-scope" id="view">
        <!-- uiView:  -->
        <div ui-view="" class="ng-scope">
            <div class="padding ng-scope">
                <div ui-view="" class="ng-scope" style="">
                    <div class="item ng-scope">
                        <div class="item-bg">
                            <i id="imagenFondoPerfilPrincipal"></i>
                        </div>
                        <div class="p-a-md">
                            <div class="row m-t">
                                <div class="col-sm-7">
                                    <a href="" class="pull-left m-r-md">
                                        <span class="avatar w-96" id="imagenPrincipalPersona">

                                        </span>
                                    </a>
                                    <div class="clear m-b">
                                        <h3 class="m-a-0 m-b-xs" id="nombreUsuario"></h3>
                                        <p class="text-muted">
                                            <span class="m-r" id="vocacionUsuario"></span>
                                            <small id="ubicacionUsuario"><i class="fa fa-map-marker m-r-xs"></i></small>
                                        </p>
                                        <div class="block clearfix m-b">
                                            <a href="" class="btn btn-icon btn-social rounded white btn-sm">
                                                <i class="fa fa-facebook"></i>
                                                <i class="fa fa-facebook indigo"></i>
                                            </a>
                                            <a href="" class="btn btn-icon btn-social rounded white btn-sm">
                                                <i class="fa fa-twitter"></i> <i class="fa fa-twitter light-blue"></i>
                                            </a>
                                            <a href="" class="btn btn-icon btn-social rounded white btn-sm">
                                                <i class="fa fa-google-plus"></i>
                                                <i class="fa fa-google-plus red"></i>
                                            </a>
                                            <a href="" class="btn btn-icon btn-social rounded white btn-sm">
                                                <i class="fa fa-linkedin"></i>
                                                <i class="fa fa-linkedin cyan-600"></i>
                                            </a>
                                        </div>
                                        <a href="" class="btn btn-sm lime btn-rounded m-b">Seguir</a>
                                    </div>
                                </div>
                                <div class="col-sm-5">
                                    <p class="text-md profile-status" id="estadoUsuario"></p>
                                    <button class="btn btn-sm white collapsed" data-toggle="collapse" data-target="#editor" aria-expanded="false">Editar</button>
                                    <div class="box m-t-sm collapse" id="editor" aria-expanded="false" style="height: 0px;">
                                        <textarea class="form-control no-border" rows="2" placeholder="Escribe algo..."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dker p-x ng-scope">
                        <div class="row">
                            <div class="col-sm-6 push-sm-6">
                                <div class="p-y text-center text-sm-right">
                                    <a href="" class="inline p-x text-center">
                                        <span class="h4 block m-a-0" id="seguidores"></span>
                                        <small class="text-xs text-muted">Seguidores</small>
                                    </a>
                                    <a href="" class="inline p-x b-l b-r text-center">
                                        <span class="h4 block m-a-0" id="siguiendo"></span>
                                        <small class="text-xs text-muted">Siguiendo</small>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-6 pull-sm-6">
                                <div class="p-y-md clearfix nav-active-success">
                                    <ul class="nav nav-pills nav-sm">
                                        <li class="nav-item active"><a class="nav-link" href="" data-toggle="tab" data-target="#tab_1">Muro</a></li>
                                        <li class="nav-item"><a class="nav-link" href="" data-toggle="tab" data-target="#tab_2">Notificaciones</a></li>
                                        <li class="nav-item"><a class="nav-link" href="" data-toggle="tab" data-target="#tab_3">Amigos</a></li>
                                        <li class="nav-item"><a class="nav-link" href="" data-toggle="tab" data-target="#tab_4">Perfil</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="padding ng-scope">
                        <div class="row">
                            <div class="col-sm-8 col-lg-9">
                                <div class="tab-content">
                                    <div class="tab-pane p-v-sm active" id="tab_1">
                                        <div class="streamline b-l m-b m-l">
                                            <p id="muroPrincipal"></p>
                                        </div>
                                    </div>
                                    <div class="tab-pane p-v-sm" id="tab_2">
                                        <div class="streamline b-l m-b m-l">
                                            <p id="notificacionesPrincipal"></p>
                                        </div>
                                    </div>
                                    <div class="tab-pane p-v-sm" id="tab_3">
                                        <div class="row row-sm ng-scope">
                                            <div class="col-xs-6 col-lg-4">
                                                <div class="list-item box r m-b">
                                                    <a herf="" class="list-left">
                                                        <span class="w-40 avatar">
                                                            <img src="../recursos/img/logo.png" alt="..."> <i class="on b-white bottom"></i>
                                                        </span>
                                                    </a>
                                                    <div class="list-body">
                                                        <div class="text-ellipsis"><a href="">Crystal Guerrero</a></div>
                                                        <small class="text-muted text-ellipsis">Diseñador, Blogger</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-lg-4">
                                                <div class="list-item box r m-b">
                                                    <a herf="" class="list-left">
                                                        <span class="w-40 avatar">
                                                            <img src="../recursos/img/logo.png" alt="..."> <i class="on b-white bottom"></i>
                                                        </span>
                                                    </a>
                                                    <div class="list-body">
                                                        <div class="text-ellipsis"><a href="">Andrei</a></div>
                                                        <small class="text-muted text-ellipsis">Escritor, Mag Editor</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-lg-4">
                                                <div class="list-item box r m-b">
                                                    <a herf="" class="list-left">
                                                        <span class="w-40 avatar">
                                                            <img src="../recursos/img/logo.png" alt="..."> <i class="away b-white bottom"></i>
                                                        </span>
                                                    </a>
                                                    <div class="list-body">
                                                        <div class="text-ellipsis"><a href="">Mark Zuckerberg</a></div>
                                                        <small class="text-muted text-ellipsis">Escritor, Blogger</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-lg-4">
                                                <div class="list-item box r m-b">
                                                    <a herf="" class="list-left">
                                                        <span class="w-40 avatar">
                                                            <img src="../recursos/img/logo.png" alt="...">
                                                            <i class="busy b-white bottom"></i>
                                                        </span>
                                                    </a>
                                                    <div class="list-body">
                                                        <div class="text-ellipsis"><a href="">Carolina Contreras</a></div>
                                                        <small class="text-muted text-ellipsis">Artista, Blogger</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-lg-4">
                                                <div class="list-item box r m-b">
                                                    <a herf="" class="list-left">
                                                        <span class="w-40 avatar"><img src="../recursos/img/logo.png" alt="..."> <i class="on b-white bottom"></i></span>
                                                    </a>
                                                    <div class="list-body">
                                                        <div class="text-ellipsis"><a href="">Juan Pablo</a></div>
                                                        <small class="text-muted text-ellipsis">Entrenador, chochos world :'c</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-lg-4">
                                                <div class="list-item box r m-b">
                                                    <a herf="" class="list-left">
                                                        <span class="w-40 avatar">
                                                            <img src="../recursos/img/logo.png" alt="...">
                                                            <i class="on b-white bottom"></i>
                                                        </span>
                                                    </a>
                                                    <div class="list-body">
                                                        <div class="text-ellipsis"><a href="">Guillermo Ramirez</a></div>
                                                        <small class="text-muted text-ellipsis">Maestro</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-lg-4">
                                                <div class="list-item box r m-b">
                                                    <a herf="" class="list-left">
                                                        <span class="w-40 avatar">
                                                            <img src="../recursos/img/logo.png" alt="...">
                                                            <i class="on b-white bottom"></i>
                                                        </span>
                                                    </a>
                                                    <div class="list-body">
                                                        <div class="text-ellipsis"><a href="">Juan</a></div>
                                                        <small class="text-muted text-ellipsis">Profesor, Entrenador</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-lg-4">
                                                <div class="list-item box r m-b">
                                                    <a herf="" class="list-left">
                                                        <span class="w-40 avatar">
                                                            <img src="../recursos/img/logo.png" alt="...">
                                                            <i class="away b-white bottom"></i>
                                                        </span>
                                                    </a>
                                                    <div class="list-body">
                                                        <div class="text-ellipsis"><a href="">Karol Rock</a></div>
                                                        <small class="text-muted text-ellipsis">Sin empleo</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-lg-4">
                                                <div class="list-item box r m-b">
                                                    <a herf="" class="list-left">
                                                        <span class="w-40 avatar">
                                                            <img src="../recursos/img/logo.png" alt="...">
                                                            <i class="busy b-white bottom"></i>
                                                        </span>
                                                    </a>
                                                    <div class="list-body">
                                                        <div class="text-ellipsis"><a href="">Sara King</a></div>
                                                        <small class="text-muted text-ellipsis">Designer, Blogger</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-lg-4">
                                                <div class="list-item box r m-b">
                                                    <a herf="" class="list-left">
                                                        <span class="w-40 circle amber avatar">
                                                            <i class="busy b-white bottom"></i>
                                                        </span>
                                                    </a>
                                                    <div class="list-body">
                                                        <div class="text-ellipsis"><a href="">Sebastian</a></div>
                                                        <small class="text-muted text-ellipsis">Blogger</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-lg-4">
                                                <div class="list-item box r m-b">
                                                    <a herf="" class="list-left">
                                                        <span class="w-40 circle blue">J</span>
                                                    </a>
                                                    <div class="list-body">
                                                        <div class="text-ellipsis"><a href="">Sofia Denisse</a></div>
                                                        <small class="text-muted text-ellipsis">Artista, Modelo, Escritora</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-lg-4">
                                                <div class="list-item box r m-b">
                                                    <a herf="" class="list-left">
                                                        <span class="w-40 circle green">M</span>
                                                    </a>
                                                    <div class="list-body">
                                                        <div class="text-ellipsis"><a href="">Melissa Garza</a></div>
                                                        <small class="text-muted text-ellipsis">Blogger</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane p-v-sm" id="tab_4">
                                        <div class="row m-b">
                                            <div class="col-xs-6">
                                                <small class="text-muted">Numero Telefónico</small>
                                                <div class="_500">1243 0303 0333</div>
                                            </div>
                                            <div class="col-xs-6">
                                                <small class="text-muted">Teléfono de casa</small>
                                                <div class="_500">+32(0) 3003 234 543</div>
                                            </div>
                                        </div>
                                        <div class="row m-b">
                                            <div class="col-xs-6">
                                                <small class="text-muted">Reportero</small>
                                                <div class="_500">Coch Jose</div>
                                            </div>
                                            <div class="col-xs-6">
                                                <small class="text-muted">Director</small>
                                                <div class="_500">James Richo</div>
                                            </div>
                                        </div>
                                        <div>
                                            <small class="text-muted">Biografia</small>
                                            <div>
                                                Cómo muchos saben mi destino no esta escrito, pero mi pasado si, no me arrepiento de esto.
                                                Porque gracias a esto soy como soy.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-lg-3">
                                <div>
                                    <div class="box">
                                        <div class="box-header"><h3>A quien seguir</h3></div>
                                        <div class="box-divider m-a-0"></div>
                                        <ul class="list no-border p-b">
                                            <li class="list-item">
                                                <a herf="" class="list-left">
                                                    <span class="w-40 avatar">
                                                        <img src="../recursos/img/logo.png" alt="...">
                                                        <i class="on b-white bottom"></i>
                                                    </span>
                                                </a>
                                                <div class="list-body">
                                                    <div><a href="">Megan Fox</a></div>
                                                    <small class="text-muted text-ellipsis">Diseñador, Blogger</small>
                                                </div>
                                            </li>
                                            <li class="list-item">
                                                <a herf="" class="list-left">
                                                    <span class="w-40 avatar">
                                                        <img src="../recursos/img/logo.png" alt="..."> <i class="on b-white bottom"></i>
                                                    </span>
                                                </a>
                                                <div class="list-body">
                                                    <div><a href="">Juan Pablito</a></div>
                                                    <small class="text-muted text-ellipsis">Escritor, Mag Editor</small>
                                                </div>
                                            </li>
                                            <li class="list-item">
                                                <a herf="" class="list-left">
                                                    <span class="w-40 avatar">
                                                        <img src="../recursos/img/logo.png" alt="..."> <i class="busy b-white bottom"></i>
                                                    </span>
                                                </a>
                                                <div class="list-body">
                                                    <div><a href="">Luis Zanella</a></div>
                                                    <small class="text-muted text-ellipsis">Director de Cine, Empresario</small>
                                                </div>
                                            </li>
                                            <li class="list-item">
                                                <a herf="" class="list-left">
                                                    <span class="w-40 avatar">
                                                        <img src="../recursos/img/logo.png" alt="..."> <i class="away b-white bottom"></i>
                                                    </span>
                                                </a>
                                                <div class="list-body">
                                                    <div><a href="">Folisise Chosielie</a></div>
                                                    <small class="text-muted text-ellipsis">Musico, Jugador</small>
                                                </div>
                                            </li>
                                            <li class="list-item">
                                                <a herf="" class="list-left">
                                                    <span class="w-40 circle green avatar">
                                                        P <i class="away b-white bottom"></i>
                                                    </span>
                                                </a>
                                                <div class="list-body">
                                                    <div><a href="">Peter</a></div>
                                                    <small class="text-muted text-ellipsis">Super Heroe</small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="box info dk">
                                        <div class="box-body">
                                            <a href="" class="pull-left m-r">
                                                <img src="../recursos/img/logo.png" class="img-circle w-40">
                                            </a>
                                            <div class="clear">
                                                <a href="">@Mike Mcalidek</a>
                                                <small class="block text-muted">2,415 followers / 225 tweets</small>
                                                <a href="" class="btn btn-sm btn-rounded btn-info m-t-xs">
                                                    <i class="fa fa-twitter m-t-xs"></i> Follow
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box">
                                        <div class="box-header"><h2>Latest Tweets</h2></div>
                                        <div class="box-divider m-a-0"></div>
                                        <ul class="list">
                                            <li class="list-item">
                                                <div class="list-body">
                                                    <p>
                                                        Bienvenido
                                                        <a href="" class="text-info">@Drew Wllon </a>
                                                    </p>
                                                    <small class="block text-muted">
                                                        <i class="fa fa-fw fa-clock-o"></i>
                                                        Hace 2 minutos
                                                    </small>
                                                </div>
                                            </li>
                                            <li class="list-item">
                                                <div class="list-body">
                                                    <p>Morbi nec <a href="" class="text-info">@Jonathan  George</a></p>
                                                    <small class="block text-muted">
                                                        <i class="fa fa-fw fa-clock-o"></i>
                                                        Hace 1 minuto
                                                    </small>
                                                </div>
                                            </li>
                                            <li class="list-item">
                                                <div class="list-body">
                                                    <p>
                                                        <a href="" class="text-info">@Josh Long</a>
                                                        Escucha lo que tengo que decir porque soy unico.
                                                    </p>
                                                    <small class="block text-muted">
                                                        <i class="fa fa-fw fa-clock-o"></i>
                                                        Hace 2 horas
                                                    </small>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>