jQuery(document).ready(function () {
	$('#btnEnviarRegistro').click(function () {
		var Nombre= $("#lblUpNombre").val();
		var Nick= $("#lblUpNick").val();
		var Correo= $("#lblUpCorreo").val();
		var Vocacion= $("#lblUpVocacion").val();
		var Ciudad = $("#lblUpCiudad").val();
		var Pais = $("#lblUpPais").val();
		var Estado = $("#lblUpEstado").val();
		var NombreArtistico = $("#lblUpNombreArtistico").val();
		var Imagen_Perfil = $("#lblUpImagenPerfil").val();
		var Imagen_Portada = $("#lblUpImagenPortada").val();
		var Telefono = $("#lblUpTelefono").val();
		var Telefono_Casa = $("#lblUpTelefonoCasa").val();
		var Biografia = $("#lblUpBiografia").val();
		if (Nombre !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpNombre" + "," + "desNueva:" + Nombre + "}", 'cargarPagina');
		if (Nick !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpNick" + "," + "desNueva:" + Nick + "}", 'cargarPagina');
		if (Correo !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpCorreo" + "," + "desNueva:" + Correo + "}", 'cargarPagina');
		if (Vocacion !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpVocacion" + "," + "desNueva:" + Vocacion + "}", 'cargarPagina');
		if (Ciudad !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpCiudad" + "," + "desNueva:" + Ciudad + "}", 'cargarPagina');
		if (Pais !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpPais" + "," + "desNueva:" + Pais + "}", 'cargarPagina');
		if (Estado !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpEstado" + "," + "desNueva:" + Estado + "}", 'cargarPagina');
		if (NombreArtistico !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpNombreArtistico" + "," + "desNueva:" + NombreArtistico + "}", 'cargarPagina');
		if (Imagen_Perfil !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpImagen_Perfil" + "," + "desNueva:" + Imagen_Perfil + "}", 'cargarPagina');
		if (Imagen_Portada !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpImagen_Portada" + "," + "desNueva:" + Imagen_Portada + "}", 'cargarPagina');
		if (Telefono !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpTelefono" + "," + "desNueva:" + Telefono + "}", 'cargarPagina');
		if (Telefono_Casa !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpTelefono_Casa" + "," + "desNueva:" + Telefono_Casa + "}", 'cargarPagina');
		if (Biografia !== "") ajax('OmniService.asmx', 'Actualizar', "{" + "spNombre:" + "sp_UpBiografia" + "," + "desNueva:" + Biografia + "}", 'cargarPagina');
	});
});
function cargarPagina(Response) {
	if (Response.d == "actualizado") { };
}