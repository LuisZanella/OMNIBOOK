using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DatosModelo
/// </summary>
public class DatosModelo
{
    public UsuarioModelo Usuario { get; set; }
    public string Vocacion { get; set; }
    public string Ciudad { get; set; }
    public string Pais { get; set; }
    public string Estado { get; set; }
    public int Seguidores { get; set; }
    public int Siguiendo { get; set; }
    public string NombreArtistico { get; set; }
    public string Imagen_Perfil { get; set; }
    public string Imagen_Portada { get; set; }
    public string Telefono { get; set; }
    public string Telefono_Casa { get; set; }
    public string Biografia { get; set; }
    public DatosModelo()
    {
        //
        // TODO: Add constructor logic here
        //
    }
}