select count(*) from tabla_de_clientes;

select distinct A.DNI, A.NOMBRE, B.DNI from tabla_de_clientes A
inner join 
facturas B
on A.DNI = B.DNI;

select distinct A.DNI, A.NOMBRE, B.DNI from tabla_de_clientes A
left join 
facturas B
on A.DNI = B.DNI;

select distinct A.DNI, A.NOMBRE, A.CIUDAD, B.DNI from tabla_de_clientes A
left join 
facturas B
on A.DNI = B.DNI;

select distinct A.DNI, A.NOMBRE, A.CIUDAD, B.DNI from tabla_de_clientes A
left join 
facturas B
on A.DNI = B.DNI
where B.DNI is null;

select distinct B.DNI, B.NOMBRE, B.CIUDAD, A.DNI from facturas A
right join 
tabla_de_clientes B
on A.DNI = B.DNI
where A.DNI is null;