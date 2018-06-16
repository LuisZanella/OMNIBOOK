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
    public AmistadModelo  Amistad { get; set; }
    public string Titulo { set; get; }
    public string Imagen { set; get; }
    public int Tipo { get; set; }
    public string Descripcion { set; get; }
    public string Fuente { get; set; }
    public string Fecha_Publicacion { get; set; }
    public PublicacionModelo()
    {
        //
        // TODO: Add constructor logic here
        //
    }
}