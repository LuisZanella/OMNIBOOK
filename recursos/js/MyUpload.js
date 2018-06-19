var media = new Array();
var uploader = new qq.FileUploader({
    element: document.getElementById('divUpload'),
    //element: document.getElementById('btnAdjuntar'),
         action: 'Uploader.ashx',
        multiple: false,
        allowedExtensions: ['pdf'], //click del usuario
    onSubmit: function (id, fileName) { //es una peticion, para ProcessRequest
        //onClick: function (id, fileName) {
            //var txt = '<label id="titulmen" >Aviso</label><br/>Adjuntado y garantizando integridad de documento id ' + id + ' filename ' + fileName +'<br/><br/>';
            //$.prompt(txt);
            //$('#cargando').fadeIn();
            //alert('Subiendo...');
        },
        onComplete: function (id, fileName, responseJSON) {

            $("#ModalExito").modal("show");
            $('#tokenHide').val(responseJSON.token);
            $('#NameHide').val(fileName);
            $('#btnAdjuntar').show();
            
            //$('#aDocumento').text(fileName);
            //$('#cargando').fadeOut();

            //$('#divlista').append('<span><img src="imagenes/eliminar.png" style="cursor:pointer;width:18px;height:18px;padding-right:15px;" onclick="javascript:eliminarad(\'' + $('#tokenHide').val + '\')" /><label >' + fileName + '</label></span><br/>');
            //var objMedia = { "TipoDocumento": { "Identificador": 1 }, "Media": { "NombreOriginal": fileName, "Token": $('#tokenHide').val }, "Identificador": 0, "Estado": 1 };
            //media.push(objMedia);
            
            //alert(fileName);
            //alert($('#tokenHide').val());

        },
        onError: function () {
        
            //var txt = '<label id="titulmen" >Error</label><br/>Error al subir<br/><br/>';
            //$.prompt(txt);
            alert('Ocurrió un error');
        }
    //params: { 'SesionToken': 'Prueba-token', 'Centro': '102100401', 'Plataforma': '9', 'Tipo': '1' }
        //,params: { 'Plataforma': '9' }
    });