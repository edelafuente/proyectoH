<?php
$data = $_REQUEST['datos'];
$file = "BDL/maquinaslocales.json"; 
$res = file_put_contents($file,$data);
echo "$res";
?>