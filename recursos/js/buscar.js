jQuery(document).ready(function () {
    $('#btnBuscarDocumento').click(function () {
        var IdDoc = $('#txtIdDoc').val();
        if (IdDoc != '') {
            BuscarDoc(IdDoc);
        }
        else
            alert('No se ha especificado ningún Id de documento. VERIFIQUE!!!');
    });
});

function BuscarDoc(Id) {
    var objMedia =
        {
            //"Elemento":
            //{
                "Identificador": Id
            //}
        };
    var stringJson = JSON.stringify(objMedia);

    $.ajax(
        {
            url: "http://localhost:81/MTom/Uploader.svc/BuscarDocumento", 
            data: stringJson, 
            type: "POST", 
            contentType: "application/json; charset=utf-8",
            success: function (msg) {
                alert(msg.d.URL);
                window.location.href = msg.d.URL;

                //

            },
            error: function (result) {
                alert("ERROR " + result.status + ' ' + result.statusText);
            }
        });
}