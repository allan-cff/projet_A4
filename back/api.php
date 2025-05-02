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
        if(count($path) === 2 && $_SERVER['REQUEST_METHOD'] === 'POST'){
            $data = json_decode(file_get_contents("php://input"), true);

            if (!$data) {
                http_response_code(400);
                echo json_encode(["code" => 400, "message" => "Invalid JSON"]);
                exit;
            }
            $requiredFields = ['totalHeight', 'trunkHeight', 'trunkDiameter', 'isRemarkable', 'lat', 'long', 'age', 'speciesId', 'stateId', 'devId', 'portId', 'piedId'];
            foreach ($requiredFields as $field) {
                if (!isset($data[$field])) {
                    http_response_code(400);
                    echo json_encode(["code" => 400, "message" => "Missing field: $field"]);
                    exit;
                }
            }
            $sqlRequest = "
                INSERT INTO Arbre (
                    hauteurTotale,
                    hauteurTronc,
                    diametreTronc,
                    estRemarquable,
                    estVivant,
                    latitude,
                    longitude,
                    age,
                    idEspece,
                    idEtat,
                    idStadeDev,
                    idPort,
                    idPied,
                    idCluster
                ) VALUES (
                    :hauteurTotale,
                    :hauteurTronc,
                    :diametreTronc,
                    :estRemarquable,
                    :estVivant,
                    :latitude,
                    :longitude,
                    :age,
                    :idEspece,
                    :idEtat,
                    :idStadeDev,
                    :idPort,
                    :idPied,
                    :idCluster
                )
            ";

            $stmt = $pdo->prepare($sqlRequest);
            // Lier les valeurs
            $stmt->bindValue(':hauteurTotale', $data['totalHeight']);
            $stmt->bindValue(':hauteurTronc', $data['trunkHeight']);
            $stmt->bindValue(':diametreTronc', $data['trunkDiameter']);
            $stmt->bindValue(':estRemarquable', $data['isRemarkable'], PDO::PARAM_BOOL);
            $stmt->bindValue(':estVivant', true, PDO::PARAM_BOOL); // Valeur par défaut
            $stmt->bindValue(':latitude', $data['lat']);
            $stmt->bindValue(':longitude', $data['long']);
            $stmt->bindValue(':age', $data['age']);
            $stmt->bindValue(':idEspece', $data['speciesId']);
            $stmt->bindValue(':idEtat', $data['stateId']);
            $stmt->bindValue(':idStadeDev', $data['devId']);
            $stmt->bindValue(':idPort', $data['portId']);
            $stmt->bindValue(':idPied', $data['piedId']);
            $stmt->bindValue(':idCluster', $data['clusterId']);
            try {
                $stmt->execute();
                $insertedId = $pdo->lastInsertId();
                http_response_code(201);
                echo json_encode(["id" => $insertedId]);
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(["error" => "Erreur d'insertion : " . $e->getMessage()]);
            }
            exit;
        }

        if (count($path) === 2 && $_SERVER['REQUEST_METHOD'] === 'GET') {
            $sqlRequest = "SELECT * FROM Arbre";
            $stmt = $pdo->prepare($sqlRequest);
            $stmt->execute();
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $response = array();
        
            /* Note : 9 prochaines lignes générées par chatGPT à partir du createdb.sql et du api_spec.yaml */
            foreach ($results as $row) {
                array_push($response, array(
                    "id" => (int) $row["idArbre"],
                    "totalHeight" => (float) $row["hauteurTotale"],
                    "trunkHeight" => (float) $row["hauteurTronc"],
                    "trunkDiameter" => (float) $row["diametreTronc"],
                    "isRemarkable" => (bool) $row["estRemarquable"],
                    "lat" => (float) $row["latitude"],
                    "long" => (float) $row["longitude"],
                    "age" => (int) $row["age"],
                    "speciesId" => (int) $row["idEspece"],
                    "devId" => (int) $row["idStadeDev"],
                    "portId" => (int) $row["idPort"],
                    "stateId" => (int) $row["idEtat"],
                    "piedId" => (int) $row["idPied"],
                    "clusterId" => (int) $row["idCluster"]
                ));
            }
        
            echo json_encode($response);
            http_response_code(200);
            exit;
        }

        if(count($path) === 3 && $_SERVER['REQUEST_METHOD'] === 'GET'){
            $sqlRequest = "SELECT * FROM Arbre a
                            LEFT JOIN Espece e ON a.idEspece = e.idEspece
                            LEFT JOIN StadeDev s ON a.idStadeDev = s.idStadeDev
                            LEFT JOIN TypePort p ON a.idPort = p.idPort
                            LEFT JOIN Etat et ON a.idEtat = et.idEtat
                            LEFT JOIN TypePied pi ON a.idPied = pi.idPied
                            LEFT JOIN Cluster c ON a.idCluster = c.idCluster 
                        WHERE idArbre = :id";
            $stmt = $pdo->prepare($sqlRequest);
            $stmt->bindParam("id", strval($path[2]));
            $stmt->execute();
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $row = $results[0];
            $response = array(
                "id" => (int) $row["idArbre"],
                "totalHeight" => (float) $row["hauteurTotale"],
                "trunkHeight" => (float) $row["hauteurTronc"],
                "trunkDiameter" => (float) $row["diametreTronc"],
                "isRemarkable" => (bool) $row["estRemarquable"],
                "lat" => (float) $row["latitude"],
                "long" => (float) $row["longitude"],
                "age" => (int) $row["age"],
                "species" => array("id" => $row["idEspece"], "name" => $row["libelleEspece"]),
                "dev" => array("id" => $row["idStadeDev"], "name" => $row["libelleStadeDev"]),
                "port" => array("id" => $row["idPort"], "name" => $row["libellePort"]),
                "state" => array("id" => $row["idEtat"], "name" => $row["libelleEtat"]),
                "pied" => array("id" => $row["idPied"], "name" => $row["libellePied"]),
                "cluster" => (int) $row["idCluster"]
            );
            echo json_encode($response);
            http_response_code(200);
            exit;
        }

        if(count($path) === 4 && $path[2] === 'predict' && $path[3] === 'cluster' && $_SERVER['REQUEST_METHOD'] === 'GET'){
            $output=null;
            $retval=null;
            if(!isset($_GET['trunkDiameter']) || !isset($_GET['totalHeight'])){
                http_response_code(400);
                echo json_encode(["code" => 400, "message" => "Missing params"]);
                exit;
            }
            exec('python scripts/predict_cluster.py -n 2 -d ' . $_GET['trunkDiameter'] . ' -t ' . $_GET['totalHeight'], $output, $retval);
            if($retval === 0){
                $response = array("value" =>$output[0]);
                echo json_encode($response);
                http_response_code(200);
                exit;
            } else {
                http_response_code(400);
                echo json_encode(["code" => 400, "message" => "Invalid params"]);
                exit;
            }
        }

        if(count($path) === 4 && $path[2] === 'predict' && $path[3] === 'age' && $_SERVER['REQUEST_METHOD'] === 'GET'){
            $output=null;
            $retval=null;
            if(!isset($_GET['trunkDiameter']) || !isset($_GET['trunkHeight']) || !isset($_GET['totalHeight'])){
                http_response_code(400);
                echo json_encode(["code" => 400, "message" => "Missing params"]);
                exit;
            }
            exec('python scripts/predict_age.py -d ' . $_GET['trunkDiameter'] . ' -t ' . $_GET['totalHeight'] . ' -r ' . $_GET['trunkHeight'], $output, $retval);
            if($retval === 0){
                $response = array("value" =>$output[0]);
                echo json_encode($response);
                http_response_code(200);
                exit;
            } else {
                http_response_code(400);
                echo json_encode(["code" => 400, "message" => "Error code " . strval($retval)]);
                exit;
            }
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
        $data = json_decode(file_get_contents("php://input"), true);

        if (!$data) {
            http_response_code(400);
            echo json_encode(["code" => 400, "message" => "Invalid JSON"]);
            exit;
        }
        if (!isset($data["name"])) {
            http_response_code(400);
            echo json_encode(["code" => 400, "message" => "Missing field: name"]);
            exit;
        }
        $sqlRequest = "INSERT INTO Espece (libelleEspece) VALUES (:name)";

        $stmt = $pdo->prepare($sqlRequest);
        // Lier les valeurs
        $stmt->bindValue(':name', $data['name']);
        try {
            $stmt->execute();
            $insertedId = $pdo->lastInsertId();
            http_response_code(201);
            echo json_encode(["id" => $insertedId]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["error" => "Erreur d'insertion : " . $e->getMessage()]);
        }
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

    if($path[1] === 'dev' && $_SERVER['REQUEST_METHOD'] === 'GET'){
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

    if($path[1] === 'port' && $_SERVER['REQUEST_METHOD'] === 'GET'){
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

    if($path[1] === 'pied' && $_SERVER['REQUEST_METHOD'] === 'GET'){
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
    http_response_code(404);
    exit;
?>