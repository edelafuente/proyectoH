<?php
$data = $_POST['datos'];
$file = "maquinaslocales.json"; 
file_put_contents($file,$data);
?>