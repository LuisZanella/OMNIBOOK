<%@ Page Language="C#" AutoEventWireup="true" CodeFile="FormModal.aspx.cs" Inherits="FormModal" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="boostrap/css/bootstrap.min.css" rel="stylesheet" />
    <script src="recursos/js/jquery-2.1.4.min.js"></script>
    <script src="boostrap/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#btnMod').click(function () {
                var valor = $('#txtValor').val();
                if(valor == '1')
                    $("#mostrarmodal").modal("show");
            });
        });
</script>
</head>
<body>
    <form id="form1" runat="server">
        <input type="button" id="btnMod" value="Mostrar Modal" />

        <input id="txtValor" />

    <div class="modal fade" id="mostrarmodal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h3>Cabecera de la ventana</h3>
     </div>
         <div class="modal-body">
            <h4>Texto de la ventana</h4>
            Mas texto en la ventana.    
     </div>
         <div class="modal-footer">
        <a href="#" data-dismiss="modal" class="btn btn-danger">Cerrar</a>
     </div>
      </div>
   </div>
</div>
    </form>
</body>
</html>
