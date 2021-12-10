<?php

class Localisation
{

    public static function _e($word)
    {
        $language = "de";

        if (isset($_GET["language"])) {
            $language = $_GET["language"];
        }


        if ($language == "de") {
            $filename = "de-DE";
        } else if ($language == "fr") {
            $filename = "fr-CH";
        } else {
            $filename = "en-GB";
        }
        $file = file_get_contents("$filename.json");
        $json_decode = json_decode($file, true);
        echo $json_decode["string"][$word];
    }








}

function _e($word){
    Localisation::_e($word);
}
?>