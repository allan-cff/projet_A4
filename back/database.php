<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

class database {
    static $db = null;
    static function connexionBD() {
        if (self::$db != null) {
            return self::$db;
        }
        require_once("constants.php");
        try {
            self::$db = new PDO('mysql:host='.DB_SERVER.';port='.DB_PORT.';dbname='.DB_NAME, DB_USER, DB_PWD);
        }
        catch (PDOException $exception) {
            error_log('Connection error: '.$exception->getMessage());
            return false;
        }
        return self::$db;
    }
}

$db = database::connexionBD();


?>