jQuery(document).ready(function () {
    $('#btnActualizarUsuario').click(function () {
        debugger;
        var Nombre = $("#lblUpNombre").val();
        var Nick = $("#lblUpNick").val();
        var Correo = $("#lblUpCorreo").val();
        var Vocacion = $("#lblUpVocacion").val();
        var Ciudad = $("#lblUpCiudad").val();
        var Pais = $("#lblUpPais").val();
        var Estado = $("#lblUpEstado").val();
        var NombreArtistico = $("#lblUpNombreArtistico").val();
        var Imagen_Perfil = $("#lblUpImagenPerfil").val();
        var Imagen_Portada = $("#lblUpImagenPortada").val();
        var Telefono = $("#lblUpTelefono").val();
        var Telefono_Casa = $("#lblUpTelefonoCasa").val();
        var Biografia = $("#lblUpBiografia").val();
        if (Nombre !== "") constructorActualizar("sp_UpNombre", Nombre);
        if (Nick !== "") constructorActualizar("sp_UpNick", Nick);
        if (Correo !== "") constructorActualizar("sp_UpCorreo", Correo);
        if (Vocacion !== "") constructorActualizar("sp_UpVocacion", Vocacion);
        if (Ciudad !== "") constructorActualizar("sp_UpCiudad", Ciudad);
        if (Pais !== "") constructorActualizar("sp_UpPais", Pais);
        if (Estado !== "") constructorActualizar("sp_UpEstado", Estado);
        if (NombreArtistico !== "") constructorActualizar("sp_UpNombreArtistico", NombreArtistico);
        if (Imagen_Perfil !== "") constructorActualizar("sp_UpImagen_Perfil", Imagen_Perfil);
        if (Imagen_Portada !== "") constructorActualizar("sp_UpImagen_Portada", Imagen_Portada);
        if (Telefono !== "") constructorActualizar("sp_UpTelefono", Telefono);
        if (Telefono_Casa !== "") constructorActualizar("sp_UpTelefono_Casa", Telefono_Casa);
        if (Biografia !== "") constructorActualizar("sp_UpBiografia", Biografia);
    });
});
function cargarPagina(Response) {
    if (Response.d == "actualizado") { CargarComponentes() };
}
function constructorActualizar(spName, newData) {
    Obj = {
        "spNombre": spName, "desNueva": newData, "id": IdUser
    };
    data = JSON.stringify(Obj);
    ajax('OmniService.asmx', 'Actualizar', data, 'cargarPagina');
}