<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Principal.aspx.cs" Inherits="Principal" %>

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
    <link href="../recursos/css/muro.css" rel="stylesheet" />
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
    <script src="../recursos/js/principalImportante.js"></script>
    <script src="../recursos/js/principalMuro.js"></script>
    <script src="../recursos/js/modalPerfil.js"></script>
    <script src="../recursos/js/principalPerfilTop.js"></script>

</head>
<body>
    <div class="switcher box-color black lt ng-scope" id="sw-demo"><a onclick="RecargarComponentes()" ui-toggle-class="active" class="box-color dark-gray text-color sw-btn"><i class="material-icons dark-gray" >autorenew</i></a><div class="box-header"></div></div>
    <p style="visibility:hidden" id="IdUser"></p>
    <div class="app-header colorDegrade box-shadow navbar-md">
        <div class="navbar ng-scope">
            <div class="container">
               <div class="col-md-8 col-lg-7 col-sm-5 col-xl-7 col-xs-8">
                <div class="collapse navbar-toggleable-sm" id="collapse">
                        <div class="form-group l-h m-a-0">
                            <div class="input-group">
                                <input type="text" style="border-radius:  10px;" class="form-control form-control-sm p-x b-a rounded col-md-8 margin-top-14" value="" placeholder="Buscar un Amigo" id="txtBuscarAmigo"/>
                               </div>
                        </div>
                </div>
               </div>
               <div class="col-md-4 col-lg-3 col-sm-2 col-xl-2 col-xs-3">
                   <a data-target="#tab_5" class="btn btn-black pull-right margin-top-14" onclick="BuscarAmigo()"><i class="fa fa-search" id="btnBuscarAmigo"></i></a>
               </div>
                <div class="col-md-12 col-lg-2 col-sm-5 col-xl-3 col-xs-12">
                    <a data-toggle="modal" data-target="#aside" class="navbar-item pull-left hidden-lg-up">
                        <i class="material-icons"></i>
                    </a>
                    <ul class="nav navbar-nav pull-right">
                        <li class="nav-item dropdown pos-stc-xs">
                            <a class="nav-link" data-toggle="dropdown">
                                <i class="material-icons">notifications_none</i> <span class="label label-sm up warn" id="numNotificaciones"></span>
                            </a>
                            <div class="dropdown-menu pull-right w-xl animated fadeInUp no-bg no-border no-shadow ng-scope">
                                <div class="scrollable" style="max-height: 220px">
                                    <ul class="list-group list-group-gap m-a-0" id="notificaciones">
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown" style="padding: 14px;">
                            <a class="nav-link clear" data-toggle="dropdown" id="imagenNBSD">
                            </a>
                            <div class="dropdown-menu pull-right dropdown-menu-scale ng-scope">
                                <a class="dropdown-item" data-toggle="modal" data-target="#editarCuentaModal">
                                    <span>Perfil</span>
                                </a>
                            </div>
                        </li>
                        <li class="nav-item hidden-md-up">
                            <a class="nav-link" data-toggle="collapse" data-target="#collapse">
                                <i class="material-icons"></i>
                            </a>
                        </li>
                    </ul>
                </div>
             </div>
        </div>
    </div>
    <div id="aside" class="app-aside modal fade folded md nav-expand ng-scope">
        <div class="left navside indigo-900 dk" layout="column">
            <div class="navbar navbar-md no-radius">
                <a class="navbar-brand ng-scope" data-toggle="modal" data-target="#editarCuentaModal"> <i id="imagenNBSI"></i>
                    <span class="hidden-folded inline ng-binding">Perfil</span></a>
            </div>
            <div flex="" class="hide-scroll">
                <%--<nav class="scroll nav-active-success">
                    <ul class="nav ng-scope" ui-nav="">
                        <li class="nav-header hidden-folded">
                            <small class="text-muted">Menú</small>
                        </li>
                    </ul>
                </nav>--%>
            </div>
            <div flex-no-shrink="">
                <nav ui-nav="" class="ng-scope">
                    <ul class="nav">
                        <li>
                            <div class="b-b b m-v-sm"></div>
                        </li>
                        <li class="no-bg">
                            <form id="form1" runat="server">
                                    <asp:LinkButton ID="LinkButton1" runat="server" OnClick="lnkCerrar_click" CssClass=""> <span class="nav-icon"><i class="material-icons"></i></span><span class="nav-text">Salir</span></asp:LinkButton>
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
            <div id="GuidPrincipal">
            <div class="padding ng-scope">
                <div ui-view="" class="ng-scope" style="">
                    <div class="item ng-scope">
                        <div class="item-bg">
                            <i id="imagenFondoPerfilPrincipal"></i>
                        </div>
                        <div class="p-a-md">
                            <div class="row m-t">
                                <div class="col-sm-7">
                                    <a class="pull-left m-r-md">
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
                                            <a href=""class="btn btn-icon btn-social rounded white btn-sm">
                                                <i class="fa fa-linkedin"></i>
                                                <i class="fa fa-linkedin cyan-600"></i>
                                            </a>
                                        </div>
                                        <a id="btnSeguir" class="btn btn-sm lime btn-rounded m-b">Seguir</a>
                                    </div>
                                </div>
                                <div class="col-sm-5">
                                    <p class="text-md profile-status" id="estadoUsuario"></p>
                                    <button class="btn btn-sm white collapsed" data-toggle="collapse" data-target="#editor" aria-expanded="false" id="btnEditar">Editar</button>
                                    <div class="box m-t-sm collapse" id="editor" aria-expanded="false" style="height: 0px;">
                                        <textarea class="form-control no-border" style="border-radius:5px" rows="2" placeholder="Escribe algo..." id="textAreaEditarEstado"></textarea>
                                        <div class="box-footer clearfix"> <button class="btn btn-info pull-left collapsed" id="btnActualizarEstado" onclick="ActualizarEstadoEnBD() ">Actualizar Estado</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dker p-x ng-scope">
                        <div class="row">
                            <div class="col-sm-6 push-sm-6">
                                <div class="p-y text-center text-sm-right">
                                    <a class="inline p-x text-center">
                                        <span class="h4 block m-a-0" id="seguidores"></span>
                                        <small class="text-xs text-muted">Seguidores</small>
                                    </a>
                                    <a class="inline p-x b-l b-r text-center">
                                        <span class="h4 block m-a-0" id="siguiendo"></span>
                                        <small class="text-xs text-muted">Siguiendo</small>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-6 pull-sm-6">
                                <div class="p-y-md clearfix nav-active-success">
                                    <ul class="nav nav-pills nav-sm">
                                        <li class="nav-item active"><a class="nav-link" data-toggle="tab" data-target="#tab_1">Muro</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" data-target="#tab_2">Notificaciones</a></li>
                                        <li class="nav-item"><a class="nav-link"  data-toggle="tab" data-target="#tab_3">Amigos</a></li>
                                        <li class="nav-item"><a class="nav-link"  data-toggle="tab" data-target="#tab_4">Perfil</a></li>
                                        <li class="nav-item"><a class="nav-link"  data-toggle="tab" data-target="#tab_5">Más Personas</a></li>
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
                                        <div class="row">
                                            <div class="box collapse in m-a-0" id="reply-2">
                                                            <form class="ng-pristine ng-valid">
                                                                <textarea class="form-control no-border" style="border-radius:5px" rows="1" placeholder="Titulo..." id="txtTituloPublicacion"></textarea>
                                                                <div class="box-divider m-a-0"></div>
                                                                <textarea id="txtPublicacion" class="form-control no-border" rows="3" placeholder="Escribe algo..."></textarea>
                                                                <div class="box-divider m-a-0"></div>
                                                                <textarea class="form-control no-border" style="border-radius:5px" rows="1" placeholder="Fuente..." id="txtFuente"></textarea>
                                                            </form>
                                                            <div class="box-footer clearfix">
                                                                <button class="btn btn-info pull-right btn-sm" onclick="Publicar()">Publicar</button>
                                                                <ul class="nav nav-pills nav-sm">
                                                                    <li class="nav-item">
                                                                        <a class="nav-link" >
                                                                            <i class="fa fa-camera text-muted"> </i>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                        <a class="nav-link">
                                                                            <i class="fa fa-video-camera text-muted"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                            </div>
                                        </div>
                                        <div style="padding:10px"></div>
                                        <div class="row">
                                            <div class="streamline b-l m-b m-l">
                                                <p id="muroPrincipal"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane p-v-sm" id="tab_2">
                                        <div class="streamline b-l m-b m-l">
                                            <p id="notificacionesPrincipal"></p>
                                        </div>
                                    </div>
                                    <div class="tab-pane p-v-sm" id="tab_3">
                                        <div class="row row-sm ng-scope" id="friends">
                                            
                                        </div>
                                    </div>
                                    <div class="tab-pane p-v-sm" id="tab_4">
                                        <div class="row m-b">
                                            <div class="col-xs-6">
                                                <small class="text-muted">Numero Telefónico</small>
                                                <div id="noTelefonico"></div>
                                            </div>
                                            <div class="col-xs-6">
                                                <small class="text-muted">Teléfono de casa</small>
                                                <div id="noCasa"></div>
                                            </div>
                                        </div>
                                        <div class="row m-b">
                                          <div class="col-xs-6">
                                            <small class="text-muted">Vocacion</small>
                                            <div id="vocacion">
                                                
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                            <small class="text-muted">Biografia</small>
                                            <div id="biografia"></div>
                                        </div>
                                    </div>
                                    <div class="tab-pane p-v-sm" id="tab_5">
                                        <div class="row row-sm ng-scope" id="lstBuscarAmigo">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-lg-3">
                                <div>
                                    <div class="box">
                                        <div class="box-header"><h3>A quien seguir</h3></div>
                                        <div class="box-divider m-a-0"></div>
                                        <ul class="list no-border p-b" id="seguir">
                                        </ul>
                                    </div>
                                    <div class="box info dk">
                                        <div class="box-header"><h3>Top Famoso</h3></div>
                                        <div class="box-divider m-a-0"></div>
                                        <div class="box-body" id="famoso">
                                        </div>
                                    </div>
                                    <div class="box">
                                        <div class="box-header"><h2>Últimas noticias</h2></div>
                                        <div class="box-divider m-a-0"></div>
                                        <ul class="list" id="noticias">
                                            
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
    </div>
     <div class="modal fade" id="editarCuentaModal" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content modal-body-back ">
                <div class="modal-header back-head">
                    <div class="container">
                        <div class="navbar logo">
                            <div class="pull-centro-registro">
                                <!-- brand -->
                                <div class="navbar-brand">
                                    <img class="logologin w3-circle" src="../recursos/img/logo.png">
                                </div>
                                <!-- / brand -->
                            </div>
                        </div>
                    </div>
                </div>
                <form id="datosRegistro">
                    <div class="modal-body back-registro">
                        <div class="center-block w-xxl w-auto-xs p-y-md ">
                            <div class="md-form-group float-label">
                                <input id="lblUpNick" name="Nick" type="text" class="md-input" required="">
                                <label>Nick</label>
                            </div>
                            <div class="md-form-group float-label">
                                <input id="lblUpCorreo" name="Correo" type="text" class="md-input" required="">
                                <label>Correo</label>
                            </div>
                            <div class="md-form-group float-label">
                                <input id="lblUpTelefono" name="Telefono" type="text" class="md-input"
                                       required="">
                                <label>Telefono</label>
                            </div>
                            <div class="md-form-group float-label">
                                <input id="lblUpTelefonoCasa" name="TelefonoCasa" type="text" class="md-input"
                                       required="">
                                <label>Telefono de casa</label>
                            </div>
                            <div class="md-form-group ">
                                <input id="lblUpVocacion" name="Vocacion" type="text" class="md-input"
                                       required="">
                                <label>vocacion</label>
                            </div>
                            <div class="md-form-group ">
                                <input id="lblUpNombreArtistico" name="NombreArtistico" type="text" class="md-input"
                                       required="">
                                <label>nombre artistico</label>
                            </div>
                            <div class="md-form-group ">
                                <input id="lblUpBiografia" name="Biografia" type="text" class="md-input"
                                       required="">
                                <label>biografia</label>
                            </div>
                               <div class="md-form-group ">
                                <input id="lblUpCiudad" name="Ciudad" type="text" class="md-input"
                                       required="">
                                <label> ciudad</label>
                            </div>
                            <div class="md-form-group ">
                                <input id="lblUpPais" name="Pais" type="text" class="md-input"
                                       required="">
                                <label>Pais</label>
                            </div>
                            <div class="md-form-group ">
                                <input id="lblUpEstado" name="Estado" type="text" class="md-input" required="">
                                <label>Estado</label>
                            </div>
                            <div class="md-form-group ">
                                <input id="lblUpNombre" name="Nombre" type="text" class="md-input"
                                       required="">
                                <label>Nombre</label>
                            </div>
                             <div class="md-form-group ">
                                <input id="lblUpImagenPerfil" name="Imagenes" type="text" class="md-input"
                                       required="">
                                <label>Imagen Perfil</label>
                            </div>
							 <div class="md-form-group ">
                                <input id="lblUpImagenPortada" name="Imagenes" type="text" class="md-input"
                                       required="">
                                <label>Imagen Portada</label>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Salir</button>
                        <button id="btnActualizarUsuario" type="button" class="btn btn-primary green" data-dismiss="modal">
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>