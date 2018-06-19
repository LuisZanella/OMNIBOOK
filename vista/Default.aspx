<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <title></title>
    <script src="../recursos/js/jquery-2.1.4.min.js"></script>
    <script src="../boostrap/js/bootstrap.min.js"></script>
    <script src="../recursos/js/guardar.js"></script>
    <script src="../recursos/js/buscar.js"></script>
    <link href="../recursos/css/estiloUploader.css" rel="stylesheet" />
    <link href="../boostrap/css/bootstrap.min.css" rel="stylesheet" />
    
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server">
              <Scripts>
                    <asp:ScriptReference Path="../recursos/js/fileuploader.js" />
              </Scripts>
        </asp:ScriptManager>
        <%--<div id="cargando" style="display:none;"><img src="imagenes/cargando.gif" /></div>--%>
         <table  class="tabcli">                        
                        <tr>
                            <th>
                                DAR CLICK PARA ADJUNTAR
                            </th>
                            <td>
                               <div id="divUpload" title="Abre diálogo para adjuntar el documento..."></div>
                                <input id="tokenHide" />
                                <input id="NameHide"/>

                                <button id="btnAdjuntar" type="button" class="btn btn-danger" data-dismiss="modal">Guardar documento</button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">&nbsp;</td>
                        </tr>
                        <tr>                                                 
                            <td>
                             &nbsp;
                            </td>
                            <td>
                                <div id="divlista" ></div>
                            </td>
                        </tr>
                    </table>

        Ingrese ID de Documento -> <input type="text" id="txtIdDoc" />
        <br />
        <button id="btnBuscarDocumento" type="button" class="btn btn-danger" data-dismiss="modal">Buscar Documento</button>

<!-- Modal -->
<div id="ModalExito" class="modal fade" role="dialog">
  <div class="modal-dialog">
    
      <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">AVISO</h4>
      </div>
      <div class="modal-body">
        <p>Archivo cargado con éxito</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
      </div>
    </div>

  </div>
</div>
        <script src="../recursos/js/MyUpload.js"></script>
    </form>
</body>
</html>

