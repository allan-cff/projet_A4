-- Générer avec Chat GPT

-- Création des tables de référence

CREATE TABLE Espece (
    idEspece INT PRIMARY KEY,
    libelleEspece VARCHAR(100) NOT NULL
);

CREATE TABLE StadeDev (
    idStadeDev INT PRIMARY KEY,
    libelleStadeDev VARCHAR(100) NOT NULL
);

CREATE TABLE TypePort (
    idPort INT PRIMARY KEY,
    libellePort VARCHAR(100) NOT NULL
);

CREATE TABLE Etat (
    idEtat INT PRIMARY KEY,
    libelleEtat VARCHAR(100) NOT NULL
);

CREATE TABLE TypePied (
    idPied INT PRIMARY KEY,
    libellePied VARCHAR(100) NOT NULL
);

CREATE TABLE Cluster (
    idCluster INT PRIMARY KEY,
    libelleCluster VARCHAR(100) NOT NULL
);

-- Table principale : Arbre

CREATE TABLE Arbre (
    idArbre INT PRIMARY KEY,
    hauteurTotale DECIMAL(5,2),
    hauteurTronc DECIMAL(5,2),
    diametreTronc DECIMAL(5,2),
    estRemarquable BOOLEAN,
    estVivant BOOLEAN,
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    age INT,

    idEspece INT,
    idStadeDev INT,
    idPort INT,
    idEtat INT,
    idPied INT,
    idCluster INT,

    CONSTRAINT fk_arbre_espece FOREIGN KEY (idEspece) REFERENCES Espece(idEspece),
    CONSTRAINT fk_arbre_stade FOREIGN KEY (idStadeDev) REFERENCES StadeDev(idStadeDev),
    CONSTRAINT fk_arbre_port FOREIGN KEY (idPort) REFERENCES TypePort(idPort),
    CONSTRAINT fk_arbre_etat FOREIGN KEY (idEtat) REFERENCES Etat(idEtat),
    CONSTRAINT fk_arbre_pied FOREIGN KEY (idPied) REFERENCES TypePied(idPied),
    CONSTRAINT fk_arbre_cluster FOREIGN KEY (idCluster) REFERENCES Cluster(idCluster)
);
