using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DatosModelo
/// </summary>
public class DatosModelo
{
    UsuarioModelo Usuario { get; set; }
    string Vocacion { get; set; }
    string Ciudad { get; set; }
    string Pais { get; set; }
    string Estado { get; set; }
    int Seguidores { get; set; }
    int Siguiendo { get; set; }
    string NombreArtistico { get; set; }
    string Imagen_Perfil { get; set; }
    string Imagen_Portada { get; set; }
    string Telefono { get; set; }
    string Telefono_Casa { get; set; }
    string Biografia { get; set; }
    public DatosModelo()
    {
        //
        // TODO: Add constructor logic here
        //
    }
}