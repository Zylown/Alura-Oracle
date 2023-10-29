select * from tabla_de_vendedores;

select * from facturas;

select * from tabla_de_vendedores A
inner join
facturas B
on A.MATRICULA = B.MATRICULA;

select A.NOMBRE, B.MATRICULA, COUNT(*) from tabla_de_vendedores A
inner join
facturas B
on A.MATRICULA = B.MATRICULA
group by A.MATRICULA, B.MATRICULA;

select A.NOMBRE, B.MATRICULA, COUNT(*) 
from tabla_de_vendedores A, facturas B
where A.MATRICULA = B.MATRICULA
group by A.MATRICULA, B.MATRICULA;

#Obtén la facturación anual de la empresa. Ten en cuenta que el valor financiero de las ventas 
#consiste en multiplicar la cantidad por el precio
select * from facturas;
select * from items_facturas;

select year(fecha_venta),sum(cantidad * precio) as Facturacion 
from facturas f
inner join
items_facturas IFacturas
on f.NUMERO = IFacturas.NUMERO
group by year(fecha_venta);

