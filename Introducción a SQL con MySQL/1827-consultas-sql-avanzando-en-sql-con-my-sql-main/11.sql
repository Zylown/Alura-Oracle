select count(*) from tabla_de_clientes;

select * from tabla_de_vendedores;

#Que clientes son atendidos ,que vendedores en que barrio
select tabla_de_clientes.NOMBRE, tabla_de_clientes.BARRIO, 
tabla_de_vendedores.NOMBRE
from tabla_de_clientes
inner join
tabla_de_vendedores
on tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;

select tabla_de_clientes.NOMBRE, tabla_de_clientes.BARRIO, 
tabla_de_vendedores.NOMBRE
from tabla_de_clientes
LEFT join
tabla_de_vendedores
on tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;

select tabla_de_clientes.NOMBRE, tabla_de_clientes.CIUDAD ,tabla_de_clientes.BARRIO, 
tabla_de_vendedores.NOMBRE
from tabla_de_clientes
LEFT join
tabla_de_vendedores
on tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;

select tabla_de_clientes.NOMBRE, tabla_de_clientes.CIUDAD ,tabla_de_clientes.BARRIO, 
tabla_de_vendedores.NOMBRE, tabla_de_vendedores.VACACIONES
from tabla_de_clientes
right join
tabla_de_vendedores
on tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;

select tabla_de_clientes.NOMBRE, tabla_de_clientes.CIUDAD ,tabla_de_clientes.BARRIO, 
tabla_de_vendedores.NOMBRE
from tabla_de_clientes
full join
tabla_de_vendedores
on tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;

select tabla_de_clientes.NOMBRE, tabla_de_clientes.CIUDAD ,tabla_de_clientes.BARRIO, 
tabla_de_vendedores.NOMBRE, VACACIONES
from tabla_de_clientes,tabla_de_vendedores
where tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;
