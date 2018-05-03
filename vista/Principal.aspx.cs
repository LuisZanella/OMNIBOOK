using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Principal : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!Page.IsPostBack)
        {
            try
            {
                if (long.Parse(HttpContext.Current.Session["Identificador"].ToString()) > 0)
                    Response.Write("Bienvenido");
                else
                    Response.Redirect("Login.html");
            }
            catch (Exception)
            {
                Response.Redirect("Login.html");
            }
        }
    }
    protected void lnkCerrar_click(object sender, EventArgs e)
    {
        HttpContext.Current.Session["Identificador"] = 0;
        Response.Redirect("Login.html");
    }
}