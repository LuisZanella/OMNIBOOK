<%@ WebHandler Language="C#" Class="Uploader" %>

using System;
using System.Web;

public class Uploader : IHttpHandler
{

    public void ProcessRequest (HttpContext context) {
        ServicioUploader.ElementoUploader elemento = new ServicioUploader.ElementoUploader();
        ServicioUploader.ContratoUploaderClient cliente = new ServicioUploader.ContratoUploaderClient();
        upload.EncripcionMD5 md5 = new upload.EncripcionMD5();
        string Nombre = md5.Md5Hash(DateTime.Now.Millisecond.ToString());
        //string Plata =  context.Request.QueryString["Plataforma"];
        CrearAchivo(context.Request, context.Server.MapPath("~/Upload/" + Nombre)); //decir que se va a guardar en raiz con ese nombre
        string Json = "{success:false}";
        Json = "{success:true,token:'" + Nombre + "'}";
        int Codigo = (int)System.Net.HttpStatusCode.BadRequest;
        Codigo = (int)System.Net.HttpStatusCode.OK;
        context.Response.StatusCode = Codigo;
        context.Response.Write(Json);
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

    private void CrearAchivo(HttpRequest req, string Nombre)
    {
        try
        {
            req.Files[0].SaveAs(Nombre);
        }
        catch
        {
            //Para firefox y chrome
            System.IO.Stream inputStream = HttpContext.Current.Request.InputStream;
            System.IO.FileStream fileStream = new System.IO.FileStream(Nombre, System.IO.FileMode.OpenOrCreate);
            inputStream.CopyTo(fileStream);
            fileStream.Close();


        }
    }

}