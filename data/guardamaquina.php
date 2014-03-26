<?php
$data = $_POST['datos'];
$file = "BDL/maquinaslocales.json"; 
$res = file_put_contents($file,$data);
echo "$res";
?>