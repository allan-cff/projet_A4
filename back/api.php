<?php
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    
    require_once("constants.php");
    
    try {
        $pdo = new PDO('mysql:host='.DB_SERVER.';port='.DB_PORT.';dbname='.DB_NAME, DB_USER, DB_PWD);
    }
    catch (PDOException $exception) {
        echo('Connection error: '.$exception->getMessage());
    }

    $path = explode('/', $_SERVER['PATH_INFO']);

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

        if(count($path) === 3 && $path[1] === 'predict' && $path[2] === 'cluster' && $_SERVER['REQUEST_METHOD'] === 'GET'){
            $res = array("id" => 4);
            echo json_encode($res);
            http_response_code(200);
            exit;
        }

        if(count($path) === 3 && $path[1] === 'predict' && $path[2] === 'age' && $_SERVER['REQUEST_METHOD'] === 'GET'){
            $res = array("id" => 5);
            echo json_encode($res);
            http_response_code(200);
            exit;
        }
    }

    if($path[1] === 'species' && $_SERVER['REQUEST_METHOD'] === 'GET'){
        $sqlRequest = "SELECT * FROM Espece";
        $stmt = $pdo->prepare($sqlRequest);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $response = array();
        foreach ($results as $row) {
            array_push($response, array("id" => $row["idEspece"], "name" => $row["libelleEspece"]));
        }
        echo json_encode($response);
        http_response_code(200);
        exit;
    }

    if($path[1] === 'species' && $_SERVER['REQUEST_METHOD'] === 'POST'){
        $sqlRequest = "SELECT * FROM Espece";
        $stmt = $pdo->prepare($sqlRequest);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $response = array();
        foreach ($results as $row) {
            array_push($response, array("id" => $row["idEspece"], "name" => $row["libelleEspece"]));
        }
        echo json_encode($response);
        http_response_code(200);
        exit;
    } 

    if($path[1] === 'state' && $_SERVER['REQUEST_METHOD'] === 'GET'){
        $sqlRequest = "SELECT * FROM Etat";
        $stmt = $pdo->prepare($sqlRequest);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $response = array();
        foreach ($results as $row) {
            array_push($response, array("id" => $row["idEtat"], "name" => $row["libelleEtat"]));
        }
        echo json_encode($response);
        http_response_code(200);
        exit;
    }

    if($path[1] === 'dev'){
        $sqlRequest = "SELECT * FROM StadeDev";
        $stmt = $pdo->prepare($sqlRequest);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $response = array();
        foreach ($results as $row) {
            array_push($response, array("id" => $row["idStadeDev"], "name" => $row["libelleStadeDev"]));
        }
        echo json_encode($response);
        http_response_code(200);
        exit;
    }

    if($path[1] === 'port'){
        $sqlRequest = "SELECT * FROM TypePort";
        $stmt = $pdo->prepare($sqlRequest);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $response = array();
        foreach ($results as $row) {
            array_push($response, array("id" => $row["idPort"], "name" => $row["libellePort"]));
        }
        echo json_encode($response);
        http_response_code(200);
        exit;
    }

    if($path[1] === 'pied'){
        $sqlRequest = "SELECT * FROM TypePied";
        $stmt = $pdo->prepare($sqlRequest);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $response = array();
        foreach ($results as $row) {
            array_push($response, array("id" => $row["idPied"], "name" => $row["libellePied"]));
        }
        echo json_encode($response);
        http_response_code(200);
        exit;
    }
?>