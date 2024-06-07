-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE tsound;

drop database tsound;

USE tsound;

/*CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14)
);*/

CREATE TABLE tsound.usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
	/*fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)*/
);

create table tsound.quizz (
id int primary key auto_increment,
score int,
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario (id)
);

CREATE TABLE tsound.aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

-- select das tabelas
select * from usuario;
select * from tsound.quizz;
select * from tsound.aviso;

insert into tsound.usuario (nome, email, senha)
values ('lucas', 'lucas.souza@hotmail.com', '123456');

-- media de score agrupados por nome
select u.nome 'Nome' ,
round(avg(q.score))
from tsound.quizz as q inner join tsound.usuario as u on q.fkUsuario = u.id
group by u.nome;

-- media geral
select 
round(avg(q.score))
from tsound.quizz as q ;

select count(u.nome) 'Quantidade de pessoas'
from tsound.usuario as u;
select 
    round(avg(q.score)) 'Quantidade'
    from tsound.quizz as q;
    
    truncate table aviso;