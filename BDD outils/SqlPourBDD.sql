﻿CREATE TABLE categorie (
id INT PRIMARY KEY IDENTITY(1,1),
categorie_type VARCHAR(20) NOT NULL
)

CREATE TABLE bd (
id INT PRIMARY KEY IDENTITY(1,1),
titre VARCHAR(50) NOT NULL,
bd_description VARCHAR(800) NOT NULL,
autheur VARCHAR(50) NOT NULL,
date_post DATETIME NOT NULL,
contenu NVARCHAR(max) NOT NULL,
bd_image VARCHAR(50) NOT NULL,
categorieId INT NOT NULL,
FOREIGN KEY (categorieId) REFERENCES categorie (id)
)

INSERT INTO categorie (categorie_type) VALUES ('action'), ('historique'), ('manga'), ('science-fiction'), ('hantai');

