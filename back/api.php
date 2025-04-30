<?php
    require_once 'utils/database.php';
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $path = explode('/', $_SERVER['PATH_INFO']);

    session_start();

    # POST /tree
    # GET /tree
    # GET /tree/:id
    # GET /tree/predict/cluster
    # GET /tree/predict/age
    # POST /species
    # GET /species
    # GET /state
    # GET /port
    # GET /pied


    if($path[1] === 'tree'){
        if(count($path) === 1 && $_SERVER['REQUEST_METHOD'] === 'POST'){
            $res = array("id" => 1);
            echo json_encode($res);
            http_response_code(200);
            exit;
        }

        if(count($path) === 1 && $_SERVER['REQUEST_METHOD'] === 'GET'){
            $res = array("id" => 2);
            echo json_encode($res);
            http_response_code(200);
            exit;
        }

        if(count($path) === 2 && $_SERVER['REQUEST_METHOD'] === 'GET'){
            $res = array("id" => 3);
            echo json_encode($res);
            http_response_code(200);
            exit;
        }

        if(count($path) === 3 && $path[1] === 'predict' && $path[1] === 'cluster' && $_SERVER['REQUEST_METHOD'] === 'GET'){
            $res = array("id" => 4);
            echo json_encode($res);
            http_response_code(200);
            exit;
        }

        if(count($path) === 3 && $path[1] === 'predict' && $path[1] === 'age' && $_SERVER['REQUEST_METHOD'] === 'GET'){
            $res = array("id" => 5);
            echo json_encode($res);
            http_response_code(200);
            exit;
        }
    }
?>