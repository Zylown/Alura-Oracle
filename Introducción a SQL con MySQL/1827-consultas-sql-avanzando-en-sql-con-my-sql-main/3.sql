use jugos_ventas;
select * from tabla_de_productos where sabor like '%manzana';

select * from tabla_de_productos where sabor like '%manzana' and envase = 'Botella pet';
select * from tabla_de_clientes where nombre like '%ez';