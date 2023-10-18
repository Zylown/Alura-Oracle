use jugos;

insert into tbproductos(
producto,nombre,envase,volumen,sabor,precio) values ('773912','clean','botella pet','1 litro','naranja','8.01');

select * from tbproductos;

alter table tbproductos add primary key(producto);