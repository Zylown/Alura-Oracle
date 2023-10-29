select distinct barrio from tabla_de_clientes
union
select distinct barrio from tabla_de_vendedores;

select distinct barrio from tabla_de_clientes
union all
select distinct barrio from tabla_de_vendedores;

select distinct barrio,NOMBRE, 'Cliente' as Tipo from tabla_de_clientes
union
select distinct barrio,NOMBRE, 'Vendedor' as Tipo from tabla_de_vendedores;

select distinct barrio,NOMBRE, 'Cliente' as Tipo from tabla_de_clientes
union
select distinct barrio,NOMBRE, 'Vendedor' as Tipo from tabla_de_vendedores;

select distinct barrio,NOMBRE, 'Cliente' as Tipo,DNI from tabla_de_clientes
union
select distinct barrio,NOMBRE, 'Vendedor' as Tipo,MATRICULA from tabla_de_vendedores;

#FULL JOIN
select tabla_de_clientes.NOMBRE, tabla_de_clientes.CIUDAD ,tabla_de_clientes.BARRIO, 
tabla_de_vendedores.NOMBRE, tabla_de_vendedores.VACACIONES
from tabla_de_clientes
LEFT join
tabla_de_vendedores
on tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO
union
select tabla_de_clientes.NOMBRE, tabla_de_clientes.CIUDAD ,tabla_de_clientes.BARRIO, 
tabla_de_vendedores.NOMBRE, tabla_de_vendedores.VACACIONES
from tabla_de_clientes
right join
tabla_de_vendedores
on tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;