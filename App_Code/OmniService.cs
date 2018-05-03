using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;

/// <summary>
/// Summary description for OmniService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class OmniService : System.Web.Services.WebService
{

    public OmniService()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string HelloWorld()
    {
        return "Hello World";
    }
    [WebMethod(EnableSession = true)]
    public string Actualizar(string spNombre, string desNueva, int id)
    {
        SqlConexion _conexion = new SqlConexion();
        List<SqlParameter> _Parametros = new List<SqlParameter>();
        try
        {
            //Abrir conexion
            _conexion.Conectar(System.Configuration.ConfigurationManager.ConnectionStrings["MiBD"].ToString());
            // Se agregan parámetros a la lista List <SqlParameter>, con los valores para cada parametro que se obtienen de los atributos
            // del objeto Pej.Objeto . Atributo_x
            _Parametros.Add(new SqlParameter("@Variable", desNueva));
            _Parametros.Add(new SqlParameter("@Id", id));
            _conexion.PrepararProcedimiento(spNombre, _Parametros);
            _conexion.EjecutarProcedimiento();
            return "actualizado";
        }
        catch (Exception ex)
        {

            throw new Exception(ex.Message);
        }
        finally
        {
            _conexion.Desconectar();
            _conexion = null;
        }

    }

}
