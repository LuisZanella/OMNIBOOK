jQuery(document).ready(function () {
    $('#btnAdjuntar').hide();
    $('#btnAdjuntar').click(function () {
        var Token = $('#tokenHide').val();
        var FileName = $('#NameHide').val();
        if (Token != '' && FileName != '') {
            SaveDoc(Token, FileName);
        }
        else
            alert('No se ha adjuntado ningún documento. VERIFIQUE!!!');
    });
});

function SaveDoc(Token, FileName) {
    var objMedia =
        {
            "Elemento":
            {
                "NombreOriginal": FileName,
                "Token": Token
            }
        };
    var stringJson = JSON.stringify(objMedia);

    $.ajax(
        {
            url: "http://localhost:81/MTom/Uploader.svc/ArchivarDocumento", 
            data: stringJson, 
            type: "POST", 
            contentType: "application/json; charset=utf-8",
            success: function (msg) {
                alert(msg.d);
            },
            error: function (result) {
                alert("ERROR " + result.status + ' ' + result.statusText);
            }
        });
}