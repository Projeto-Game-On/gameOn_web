CREATE DATABASE GameON_Individual;

USE GameON_Individual;

CREATE TABLE Usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
loginUsuario VARCHAR(60),
nicknameUsuario VARCHAR(80),
imagemUsuario TEXT,
senhaUsuario VARCHAR (60)
);

CREATE TABLE Jogos (
idJogo INT PRIMARY KEY AUTO_INCREMENT,   
nomeJogo VARCHAR(80),
empresaJogo VARCHAR(60)
);

CREATE TABLE Avaliacao (
idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
notaUsuario DECIMAL(4,2),
fkUsuario INT,
fkJogo INT,
FOREIGN KEY (fkJogo) REFERENCES Jogos (idJogo),
FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario)
);

INSERT INTO Usuario VALUES (NULL, 'lucas@gmail', 'luquinhass', NULL, 'lucas123');

INSERT INTO Jogos VALUES (NULL, 'Sekiro', 'FromSoftaware');

INSERT INTO Avaliacao VALUES (NULL, 10.00, 1, 1);

SELECT * FROM Usuario;
SELECT * FROM Jogos;
SELECT * FROM Avaliacao;

SELECT nomeJogo 'Nome do Jogo', empresaJogo 'empresa do Jogo', nicknameUsuario 'Nick', notaUsuario 'Nota do Jogo'
FROM Avaliacao JOIN Jogos ON idJogo = fkJogo JOIN Usuario ON idUsuario = fkUsuario; 