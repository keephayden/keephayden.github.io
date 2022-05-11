<!DOCTYPE html>
<!-- 
    Name: Jordan Hayden
    Pawprint: Jmhhyf
    Date: Mar 23
    Challenge 8 PHP

    References:
        (1)https://www.w3resource.com/php-exercises/challenges/1/php-challenges-1-exercise-20.php
        (2)https://www.w3schools.com/php/func_string_ord.asp
        (3)https://www.daniweb.com/programming/web-development/threads/468247/php-functions-needs-for-my-cylinder
        (4)https://www.php.net/manual/en/function.round.php
        (5)TA Help
-->
<html lang="en">
    <head>
        <title>PHP Side</title>
    </head>
    <body>
        <?php
        //Name
        //TA Help
        if(isset($_GET["fname"])){
            $firstname = $_GET["fname"];
            $lastname = $_GET["lname"];
        
            echo "<p>Hello" ." " . $firstname . " " . $lastname . " " ."welcome to my PHP playground, designed to simulate the
            value of server-side development and practical use in web development!</p>";
        }
        
        //Hamming Number
        // Start of code from https://www.w3resource.com/php-exercises/challenges/1/php-challenges-1-exercise-20.php
        function is_hamming_numbers($x){
//                $x = $_GET["hamNumber"];

            if ($x == 1){
                return "The provided number is a Hamming Number";
            }
            if ($x % 2 == 0){
                return is_hamming_numbers($x/2);
            }

            if ($x % 3 == 0){
                return is_hamming_numbers($x/3);
            }
            if ($x % 5 == 0){
                return is_hamming_numbers($x/5);
            }	
            return "The provided number is NOT a Hamming Number";

            // End of code from https://www.w3resource.com/php-exercises/challenges/1/php-challenges-1-exercise-20.php
        }
            if(isset($_GET["hamNumber"])){
                $hn=$_GET["hamNumber"];
            echo is_hamming_numbers($hn);
            }
        
        //Password Simulator
        //TA Help
        if(isset($_POST["username"])){
            $un = $_POST["username"];
            $pw = $_POST["password"];
            
            if($un === "test" && $pw === "pass"){
                echo "Credintials validated with POST";
            }
            else
                echo "Username or password is incorrect";
        }
        
        
        
        // List creator (IN PROGRESS)
        //Start of Help from TA
        if(isset($_GET["fVal"])){
            $a = $_GET["fVal"];
            $b = $_GET["sVal"];
            $aA = ord(strval($a));
            $aB = ord(strval($b));
            // ord() from https://www.w3schools.com/php/func_string_ord.asp
            echo "[";
            foreach(range($aA, $aB) as $gen){
                echo chr($gen).", ";
            }
            echo "]";
        }
        //End of Help from TA
        
        //Cylinder Surface Area 
        // Start of code from https://www.daniweb.com/programming/web-development/threads/468247/php-functions-needs-for-my-cylinder
        if(isset($_POST["radius"])){
            $r = (float) $_POST['radius'];
            $h = (float) $_POST['height'];
            function cylArea($r,$h){
                $pi = 3.141592653589;
                $sa = 2 * $pi * $r * $h + 2 * $pi * pow($r,2);
                return round($sa, 2);  // round from https://www.php.net/manual/en/function.round.php

            }
            echo "Surface Area = " .cylArea($r,$h);
        }   
        // End of code from https://www.daniweb.com/programming/web-development/threads/468247/php-functions-needs-for-my-cylinder
//        }
            
        ?>
        
        

    </body>
</html>