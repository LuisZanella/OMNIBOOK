using System;
using System.Collections.Generic;
using System.Data;
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
    public long registrarUsuario(UsuarioModelo user)
    {
        SqlConexion _conexion = new SqlConexion();
        List<SqlParameter> _Parametros = new List<SqlParameter>();
        DataTableReader _dtr = null;

        try
        {
            //Se abre conexion
            _conexion.Conectar(System.Configuration.ConfigurationManager.ConnectionStrings["MiBD"].ToString());

            //Se agregan´parametros a la lista List<SqlParameters>, con los valores para cada parametro
            _Parametros.Add(new SqlParameter("@Nombre", user.Nombre));
            _Parametros.Add(new SqlParameter("@Correo", user.Correo));
            _Parametros.Add(new SqlParameter("@Contrasenia", user.Contrasenia));
            _Parametros.Add(new SqlParameter("@FechaNacimiento", user.Fecha_Nacimiento));
            _Parametros.Add(new SqlParameter("@Nick", user.Nick));
            _conexion.PrepararProcedimiento("sp_InUsuario", _Parametros);

            _dtr = _conexion.EjecutarTableReader();
            if (_dtr.HasRows)
            {
                //Leer la informacion
                _dtr.Read();
                //Se crea un objeto de clase usuario
                UsuarioModelo _user = new UsuarioModelo()
                {
                    Id_Usuario = int.Parse(_dtr["Id_Usuario"].ToString()),
                    Nombre = _dtr["Nombre"].ToString(),
                    Correo = _dtr["Correo"].ToString(),
                    Fecha_Nacimiento = _dtr["Fecha_Nacimiento"].ToString(),
                    Estatus = Boolean.Parse(_dtr["Estatus"].ToString())
                };

                //Se indica que se cierre la tabla
                _dtr.Close();

                //Creamos session con el id del usuario

                HttpContext.Current.Session["Identificador"] = _user.Id_Usuario;
                return _user.Id_Usuario;

            }
            else
            {
                throw new Exception("User not found");
            }

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
        finally
        {
            _conexion.Desconectar();
            _conexion = null;
            _dtr = null;
        }
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
    [WebMethod(EnableSession = true)]
    public UsuarioModelo iniciarSesion(UsuarioModelo user)
    {
        SqlConexion _conexion = new SqlConexion();
        List<SqlParameter> _Parametros = new List<SqlParameter>();
        DataTableReader _dtr = null;
        try
        {
            //Abrir conexion
            _conexion.Conectar(System.Configuration.ConfigurationManager.ConnectionStrings["MiBD"].ToString());
            // Se agregan parámetros a la lista List <SqlParameter>, con los valores para cada parametro que se obtienen de los atributos
            // del objeto Pej.Objeto . Atributo_x
            _Parametros.Add(new SqlParameter("@_Nick", user.Nick));
            _Parametros.Add(new SqlParameter("@_Password", user.Contrasenia));
            _conexion.PrepararProcedimiento("sp_LoginUser", _Parametros);
            _dtr = _conexion.EjecutarTableReader();
            if (_dtr.HasRows)
            {
                _dtr.Read();
                UsuarioModelo _user = new global::UsuarioModelo()
                {
                    Id_Usuario = long.Parse(_dtr["Id_User"].ToString())
                };
                HttpContext.Current.Session["Identificador"] = _user.Id_Usuario;
                return _user;
            }
            else
                throw new Exception("User not found");

        }
        catch (Exception ex)
        {

            throw new Exception(ex.Message);
        }
        finally
        {
            _conexion.Desconectar();
            _conexion = null;
            _dtr = null;
        }
    }
}
