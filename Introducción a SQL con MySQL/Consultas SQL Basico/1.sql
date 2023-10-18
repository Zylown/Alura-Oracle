use jugos;
create table TBCLIENTES1(
DNI VARCHAR(20),
NOMBRE VARCHAR(150),
DIRECCION1 VARCHAR(150),
DIRECCION2 VARCHAR(150),
BARRIO VARCHAR(50),
CIUDAD VARCHAR(50),
ESTADO VARCHAR(50),
CP VARCHAR(10),
EDAD SMALLINT,
SEXO VARCHAR(1),
LIMITE_CREDITO FLOAT, 
VOLUMEN_COMPRA FLOAT,
PRIMERA_COMPRA BIT(1)
);

insert into tbproductos(
producto,nombre,envase,volumen,sabor,precio) values ('773912','clean','botella','1 litro','naranja','8.01');

select * from tbproductos
