using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ComentarioModelo
/// </summary>
public class ComentarioModelo
{
    public int Id_Comentario { get; set; }
    public UsuarioModelo Usuario { get; set; }
    public PublicacionModelo Publicacion { get; set; }
    public string Comentario { get; set; }
    public ComentarioModelo()
    {
        //
        // TODO: Add constructor logic here
        //
    }
}