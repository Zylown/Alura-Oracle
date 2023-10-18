use jugos;
alter table tbclientes add primary key(dni);

alter table tbclientes add column(fecha_nacimiento date);

insert into tbclientes (
DNI,
NOMBRE,
DIRECCION1,
DIRECCION2,
BARRIO,
CIUDAD,
ESTADO,
CP,
EDAD,
SEXO,
LIMITE_CREDITO,
VOLUMEN_COMPRA,
PRIMERA_COMPRA,
fecha_nacimiento) values (
'456879548','Pedro el Escamoso', 'Calle del Sol, 25','','Los Laureles','CDMX','México',  '65784', 55 , 'M',
1000000,2000,0, '1971-05-25');

select * from tbclientes