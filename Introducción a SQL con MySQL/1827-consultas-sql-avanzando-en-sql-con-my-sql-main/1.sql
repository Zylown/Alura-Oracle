USE jugos_ventas;

select * from tabla_de_clientes;
select dni as Identificador, nombre as Cliente from tabla_de_clientes;
select * from tabla_de_productos;
select * from tabla_de_productos where sabor = 'Uva';
select * from tabla_de_productos where sabor = 'Mango';
select * from tabla_de_productos where envase = 'Botella Pet';
select * from tabla_de_productos where precio_de_lista <= 17;
select * from tabla_de_productos where precio_de_lista between 16 and 16.02;
