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
                    Id_Usuario = long.Parse(_dtr["Id_Usuario"].ToString())
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
    [WebMethod(EnableSession = true)]
    public List<ModulosBaseModelo> Leer(string spNombre, string [] campos, int id)
    {
        List<ModulosBaseModelo> _Datos = new List<ModulosBaseModelo>();
        ModulosBaseModelo _Dato = new ModulosBaseModelo();
        SqlConexion _conexion = new SqlConexion();
        DataTableReader _dtr = null;
        UsuarioModelo _usuario;
        DatosModelo _datosUsuario;
        PublicacionModelo _publicacion;
        NotificacionModelo _notificacion;
        List<SqlParameter> _Parametros = new List<SqlParameter>();
        try
        {
            //Abrir conexion
            _conexion.Conectar(System.Configuration.ConfigurationManager.ConnectionStrings["MiBD"].ToString());
            // Se agregan parámetros a la lista List <SqlParameter>, con los valores para cada parametro que se obtienen de los atributos
            // del objeto Pej.Objeto . Atributo_x
            _Parametros.Add(new SqlParameter("@Id", id));
            _conexion.PrepararProcedimiento(spNombre, _Parametros);
            _dtr = _conexion.EjecutarTableReader();
            if (_dtr.HasRows)
            {
                while (_dtr.Read()) {
                    _Dato = new ModulosBaseModelo();
                    _usuario = new UsuarioModelo();
                    _datosUsuario = new DatosModelo();
                    _notificacion = new NotificacionModelo();
                    _publicacion = new PublicacionModelo();
                    for (int i = 0; i<campos.Length; i++) {
                        switch (campos[i]) {
                            /*Usuario*/
                            case "Nombre":
                                _usuario.Nombre = _dtr["Nombre"].ToString();
                                break;
                            case "Nick":
                                _usuario.Nick = _dtr["Nick"].ToString();
                                break;
                            case "Correo":
                                _usuario.Correo = _dtr["Correo"].ToString();
                                break;
                            case "Contrasenia":
                                _usuario.Contrasenia = _dtr["Contrasenia"].ToString();
                                break;
                            case "Fecha_Nacimiento":
                                break;
                                /*Datos*/
                            case "Vocacion":
                                _datosUsuario.Vocacion = _dtr["Vocacion"].ToString();
                                break;
                            case "Ciudad":
                                _datosUsuario.Ciudad = _dtr["Ciudad"].ToString();
                                break;
                            case "Pais":
                                _datosUsuario.Pais = _dtr["Pais"].ToString();
                                break;
                            case "Estado":
                                _datosUsuario.Estado = _dtr["Estado"].ToString();
                                break;
                            case "Seguidores":
                                _datosUsuario.Seguidores = Int32.Parse(_dtr["Seguidores"].ToString());
                                break;
                            case "Siguiendo":
                                _datosUsuario.Siguiendo = Int32.Parse(_dtr["Vocacion"].ToString());
                                break;
                            case "NombreArtistico":
                                _datosUsuario.NombreArtistico = _dtr["NombreArtistico"].ToString();
                                break;
                            case "Imagen_Perfil":
                                _datosUsuario.Imagen_Perfil = _dtr["Imagen_Perfil"].ToString();
                                break;
                            case "Imagen_Portada":
                                _datosUsuario.Imagen_Portada = _dtr["Imagen_Portada"].ToString();
                                break;
                            case "Telefono":
                                _datosUsuario.Telefono = _dtr["Telefono"].ToString();
                                break;
                            case "Telefono_Casa":
                                _datosUsuario.Telefono_Casa = _dtr["Telefono_Casa"].ToString();
                                break;
                            case "Biografia":
                                _datosUsuario.Biografia = _dtr["Biografia"].ToString();
                                break;
                                /*Publicacion*/
                            case "Titulo":
                                _publicacion.Titulo = _dtr["Titulo"].ToString();
                                break;
                            case "Imagen":
                                _publicacion.Imagen = _dtr["Imagen"].ToString();
                                break;
                            case "Tipo":
                                _publicacion.Tipo = Int16.Parse(_dtr["Tipo"].ToString());
                                break;
                            case "Descripcion":
                                _publicacion.Descripcion = _dtr["Descripcion"].ToString();
                                break;
                            case "Fuente":
                                _publicacion.Fuente = _dtr["Fuente"].ToString();
                                break;
                            case "Fecha_Publicacion":
                                _publicacion.Fecha_Publicacion = string.Format("{0:MM/dd/yyyy}", _dtr["Fuente"]);
                                break;
                        }
                    }
                    _datosUsuario.Usuario = _usuario;
                    _Dato.Usuario = _usuario;
                    _Dato.Datos = _datosUsuario;
                    _Dato.Notificacion = _notificacion;
                    _Datos.Add(_Dato);
                }
                return _Datos;
            }
            else
                throw new Exception("Sin infromacion");
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
