using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for NotificacionModelo
/// </summary>
public class NotificacionModelo
{
    int Id_Notificacion { get; set; }
    PublicacionModelo Publicacion { get; set; }
    int Estatus { get; set; }
    public NotificacionModelo()
    {
        //
        // TODO: Add constructor logic here
        //
    }
}