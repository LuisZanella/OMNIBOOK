<?php
/**
 * Created by PhpStorm.
 * User: Jorge Hernández García
 * Date: 7/15/16
 * Time: 10:37 AM
 */

include_once "classes/Sucursales.php";

$sucursales = new Sucursales();

switch ($_GET["action"]) {
    case "byId":
        echo json_encode($sucursales->getSucursalesById($_GET["id"]));
        break;
    case "byDivision":
        echo json_encode($sucursales->getSucursalesByDivision($_GET["division"]));
        break;
    default:
        echo json_encode($sucursales->getSucursales());
        break;
}