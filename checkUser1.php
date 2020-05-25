<?php
  
    $name = $_GET["username"];
    $psas = $_GET["userpass"];

    $link = mysqli_connect("localhost","root","root","dianshang");

    $result = mysqli_query($link,"select * from vip where username='{$name}'");

    mysqli_close($link);

   $arr =  mysqli_fetch_all($result,MYSQLI_ASSOC);

    if(count($arr) == 1){
        echo "1";
    }else{
        echo "0";
    }
?>