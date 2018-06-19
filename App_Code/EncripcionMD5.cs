using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

/// <summary>
/// Descripción breve de EncripcionMD5
/// </summary>
namespace upload
{
    public class EncripcionMD5
    {

        public string Md5Hash(string input) //crear el token del archivo con un hash
        {
            // Creamos una nueva instancias
            MD5 md5Hasher = MD5.Create();

            // le sacamos los byte a la cadea
            byte[] data = md5Hasher.ComputeHash(Encoding.Default.GetBytes(input));

            //Creamos un string builder para aterrizar la cadena
            StringBuilder sBuilder = new StringBuilder();

            // recorremos byte por byte hasta que se transforme toda en una cadena hex
            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }

            // la regresamos
            return sBuilder.ToString();
        }
        //Verificamos de Nuestros hash
        public bool VerificarMd5Hash(string input, string hash)
        {
            //Lo que vamos a comparar
            string hashOfInput = Md5Hash(input);

            // Creamos un comparador decadenas
            StringComparer comparer = StringComparer.OrdinalIgnoreCase;

            if (0 == comparer.Compare(hashOfInput, hash))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}