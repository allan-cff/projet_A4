/*Générer grâce à Chat GPT*/

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

    -- Clés étrangères
    idEspece INT,
    idStadeDev INT,
    idPort INT,
    idEtat INT,
    idPied INT,

    FOREIGN KEY (idEspece) REFERENCES Espece(idEspece),
    FOREIGN KEY (idStadeDev) REFERENCES StadeDev(idStadeDev),
    FOREIGN KEY (idPort) REFERENCES TypePort(idPort),
    FOREIGN KEY (idEtat) REFERENCES Etat(idEtat),
    FOREIGN KEY (idPied) REFERENCES TypePied(idPied)
);


