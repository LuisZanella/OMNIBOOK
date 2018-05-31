using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for PublicacionModelo
/// </summary>
public class PublicacionModelo
{
    public int Id_Publicacion { set; get; } 
    public UsuarioModelo Usuario { set; get; } 
    public string Descripcion { set; get; }
    public string Tags { set; get; }
    public string Imagen { set; get; }
    public DateTime Fecha_Publicacion { set; get; }
    public PublicacionModelo()
    {
        //
        // TODO: Add constructor logic here
        //
    }
}