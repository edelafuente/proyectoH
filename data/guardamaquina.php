<?php
$data = $_POST['datos'];
$file = "maquinaslocales.json"; 
$res = file_put_contents($file,$data);
echo $res;
?>