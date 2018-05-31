<?php

/**
 * Created by PhpStorm.
 * User: Jorge Hernández García
 * Date: 7/15/16
 * Time: 9:14 AM
 */
class Sucursales
{
    private $sucursales;

    public function __construct()
    {
        $this->sucursales = array(
            array(
                "id" => "1",
                "nombre" => "Querétaro Matriz",
                "division" => "Kenworth del Bajío",
                "direccion" => "Carr. Querétaro-México Km. 204 San Isidro Miranda C.P. 76209",
                "ciudad" => "El Marqués",
                "estado" => "QRO",
                "lat" => "20.5744294",
                "lng" => "-100.3347382",
                "telefonos" => array("(442) 277 4086")
            ),
            array(
                "id" => "2",
                "nombre" => "Querétaro II",
                "division" => "Kenworth del Bajío",
                "direccion" => "Carr. Federal Querétaro-San Luis Potosí Km. 29/300 No. 116 Col. Parque Industrial",
                "ciudad" => "Querétaro",
                "estado" => "QRO",
                "lat" => "20.834922",
                "lng" => "-100.440664",
                "telefonos" => array("(442) 240 9674", "(442) 240 9495", "(442) 240 5001", "(442) 240 5002")
            ),
            array(
                "id" => "3",
                "nombre" => "San Juan del Rio",
                "division" => "Kenworth del Bajío",
                "direccion" => "Carr. México-Querétaro Km. 166 Col. Loma Linda",
                "ciudad" => "San Juan del Rio",
                "estado" => "QRO",
                "lat" => "20.4017764",
                "lng" => "-100.0284472",
                "telefonos" => array("(427) 274 8208", "(427) 274 8211", "(427) 264 7294", "(427) 264 7339", "(427) 264 7340")
            ),
            array(
                "id" => "4",
                "nombre" => "Celaya I",
                "division" => "Kenworth del Bajío",
                "direccion" => "Carr. Libre Celaya-Salamanca Km. 7.5",
                "ciudad" => "Celaya",
                "estado" => "GTO",
                "lat" => "20.5126895",
                "lng" => "-100.9272204",
                "telefonos" => array("(461) 192 0200")
            ),
            array(
                "id" => "5",
                "nombre" => "Celaya II",
                "division" => "Kenworth del Bajío",
                "direccion" => "Av. México-Japón No. 127 Col. Ciudad Industrial C.P. 38010",
                "ciudad" => "Celaya",
                "estado" => "GTO",
                "lat" => "20.5500943",
                "lng" => "-100.809783",
                "telefonos" => array("(461) 611 8950", "(461) 611 8951", "(461) 611 8952")
            ),
            array(
                "id" => "6",
                "nombre" => "Celaya III",
                "division" => "Kenworth del Bajío",
                "direccion" => "Km 47+150 col. Rancho Nuevo Apaseo el Grande Gto. C.P. 38192",
                "ciudad" => "Celaya",
                "estado" => "GTO",
                "lat" => "20.518632",
                "lng" => "-100.756992",
                "telefonos" => array("(461) 662 7300")
            ),
            array(
                "id" => "7",
                "nombre" => "San Luis Potosí I - Refacciones",
                "division" => "Kenworth del Bajío",
                "direccion" => "Av. Industrias #3810 Zona Industrial San Luis Potosí C.P. 78090",
                "ciudad" => "San Luis Potosí",
                "estado" => "SLP",
                "lat" => "22.1134067",
                "lng" => "-100.9046416",
                "telefonos" => array("(444) 824 97 08", "(444) 824 66 15")
            ),
            array(
                "id" => "8",
                "nombre" => "San Luis Potosí I - Servicio & Venta de Unidades",
                "division" => "Kenworth del Bajío",
                "direccion" => "Eje 132 Esq CFE S/N Zona Industrial C.P. 78090",
                "ciudad" => "San Luis Potosí",
                "estado" => "SLP",
                "lat" => "22.109250",
                "lng" => "-100.900221",
                "telefonos" => array("(444) 824 81 00", "(444) 824 81 01")
            ),
            array(
                "id" => "9",
                "nombre" => "San Luis Potosí II",
                "division" => "Kenworth del Bajío",
                "direccion" => "Carr. a Matehuala Km. 4.5",
                "ciudad" => "Soledad de Graciano Sánchez",
                "estado" => "SLP",
                "lat" => "22.069797",
                "lng" => "-100.884673",
                "telefonos" => array("(444) 854 4541", "(444) 854 4542", "(444) 854 4543", "(444) 854 4544", "(444) 854 4545")
            ),
            array(
                "id" => "10",
                "nombre" => "Matehuala, SLP",
                "division" => "Kenworth del Bajío",
                "direccion" => "Prolongación Chiapas No. 1705 Col. La Lagunita C.P. 78770",
                "ciudad" => "Matehuala",
                "estado" => "SLP",
                "lat" => "23.640581",
                "lng" => "-100.635418",
                "telefonos" => array("(488) 882 7764", "(488) 882 5872", "(488) 882 0913", "(488) 882 0091")
            ),
            array(
                "id" => "11",
                "nombre" => "León Matriz-Comanjilla",
                "division" => "Kenworth del Centro",
                "direccion" => "Blvd. Aeropuerto 5017 Col. Los Sauces por Carr. Silao-León en desviación a Comanjilla C.P. 37680",
                "ciudad" => "León",
                "estado" => "GTO",
                "lat" => "21.027291",
                "lng" => "-101.541933",
                "telefonos" => array("(477) 719 9500")
            ),
            array(
                "id" => "12",
                "nombre" => "León Corporativo",
                "division" => "Kenworth del Centro",
                "direccion" => "Paseo de los Insurgentes No. 2111 Col. Linda Vista C.P. 37300",
                "ciudad" => "León",
                "estado" => "GTO",
                "lat" => "21.147072",
                "lng" => "-101.706469",
                "telefonos" => array("(477) 773 0090")
            ),
            array(
                "id" => "13",
                "nombre" => "León II Body Shop",
                "division" => "Kenworth del Centro",
                "direccion" => "Av. Autotransporte No. 323 Col. Valle del León C.P. 37140",
                "ciudad" => "León",
                "estado" => "GTO",
                "lat" => "21.167558",
                "lng" => "-101.676052",
                "telefonos" => array("(477) 119 2785")
            ),
            array(
                "id" => "14",
                "nombre" => "Irapuato",
                "division" => "Kenworth del Centro",
                "direccion" => "Carretera Irapuato-La Piedad Km. 3.5 Col. Purísima del Jardín C.P. 36820",
                "ciudad" => "Irapuato",
                "estado" => "GTO",
                "lat" => "20.645654",
                "lng" => "-101.377488",
                "telefonos" => array("(462) 627 3615")
            ),
            array(
                "id" => "15",
                "nombre" => "Aguascalientes Norte",
                "division" => "Kenworth del Centro",
                "direccion" => "Blvd. Aguascalientes Norte No. 901 Esquina Solidaridad Fracc. Constitución",
                "ciudad" => "Aguascalientes",
                "estado" => "AGS",
                "lat" => "21.91477",
                "lng" => "-102.286729",
                "telefonos" => array("(449) 912 5155")
            ),
            array(
                "id" => "16",
                "nombre" => "Aguascalientes Sur TRP",
                "division" => "Kenworth del Centro",
                "direccion" => "Carretera Panamericana Sur Km. 12 Col. Vista Alegre",
                "ciudad" => "Aguascalientes",
                "estado" => "AGS",
                "lat" => "21.78042",
                "lng" => "-102.280365",
                "telefonos" => array("(449) 929 5386", "(449) 929 5387", "(449) 929 5388", "(449) 929 5389")
            ),
            array(
                "id" => "17",
                "nombre" => "TRP \"El Orito\" Zacatecas",
                "division" => "Kenworth del Centro",
                "direccion" => "Calzada Heroes de la Reforma No. 207-B Col. Gonzales Ortega C.P. 98085",
                "ciudad" => "Zacatecas",
                "estado" => "ZAC",
                "lat" => "22.861264",
                "lng" => "-102.626965",
                "telefonos" => array("(492) 768 4800")
            ),
            array(
                "id" => "18",
                "nombre" => "Zacatecas",
                "division" => "Kenworth del Centro",
                "direccion" => "Carr. Panamericana Zacatecas Fresnillo KM. 16.5 C.P. 98100",
                "ciudad" => "Morelos",
                "estado" => "ZAC",
                "lat" => "22.756539",
                "lng" => "-102.595843",
                "telefonos" => array("(492) 931 1060")
            )
        );
    }

    public function getSucursales()
    {
        return $this->sucursales;
    }

    public function getSucursalesById($id)
    {
        foreach ($this->sucursales as $sucursal) {
            if ($sucursal["id"] == $id)
                return $sucursal;
        }
    }

    public function getSucursalesByDivision($division)
    {
        $sucursales = array();
        foreach ($this->sucursales as $sucursal) {
            if ($sucursal["division"] == $division) {
                $sucursales[] = $sucursal;
            }
        }
        return $sucursales;
    }
}