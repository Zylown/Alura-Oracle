select estado, sum(LIMITE_DE_CREDITO) as limite_total from tabla_de_clientes group by estado;

select estado, sum(LIMITE_DE_CREDITO) as limite_total from tabla_de_clientes where limite_total > 300000 group by estado;

select estado, sum(LIMITE_DE_CREDITO) as limite_total from tabla_de_clientes
group by estado 
having limite_total > 300000;

#Con group by puedes obtener el maximo o minimo
select envase, max(precio_de_lista) as precio_maximo,
min(precio_de_lista) as precio_minimo from tabla_de_productos group by envase;

select envase, max(precio_de_lista) as precio_maximo,
min(precio_de_lista) as precio_minimo from tabla_de_productos group by envase
having sum(PRECIO_DE_LISTA) > 80;

select envase, max(precio_de_lista) as precio_maximo,
min(precio_de_lista) as precio_minimo,
sum(PRECIO_DE_LISTA) as suma_precio
from tabla_de_productos group by envase
having sum(PRECIO_DE_LISTA) > 80;

select envase, max(precio_de_lista) as precio_maximo,
min(precio_de_lista) as precio_minimo,
sum(PRECIO_DE_LISTA) as suma_precio
from tabla_de_productos group by envase
having sum(PRECIO_DE_LISTA) >= 80 and max(PRECIO_DE_LISTA) >= 5;

#¿Quiénes fueron los clientes que realizaron más de 2000 compras en 2016?
SELECT DNI, COUNT(*) FROM facturas
WHERE YEAR(FECHA_VENTA) = 2016
GROUP BY DNI
HAVING COUNT(*) > 2000;