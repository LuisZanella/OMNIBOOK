using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ModuloBaseModelo
/// </summary>
public class ModulosBaseModelo
{
    public AmistadModelo Amistad { get; set; }
    public ComentarioModelo Comentario { get; set; }
    public DatosModelo Datos { get; set; }
    public NotificacionModelo Notificacion { get; set; }
    public PublicacionModelo Publicacion { get; set; }
    public UsuarioModelo Usuario { get; set; }
    public ModulosBaseModelo()
    {
        //
        // TODO: Add constructor logic here
        //
    }
}