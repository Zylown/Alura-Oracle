select * from tabla_de_productos;

select NOMBRE_DEL_PRODUCTO, PRECIO_DE_LISTA,
case
	when PRECIO_DE_LISTA >= 1 then 'Costoso'
    when PRECIO_DE_LISTA >= 5  and PRECIO_DE_LISTA < 12 then 'Asequible'
    else 'Barato'
end as precio
from tabla_de_productos;

select ENVASE,SABOR,
case
	when PRECIO_DE_LISTA >= 12 then 'Costoso'
    when PRECIO_DE_LISTA >= 5  and PRECIO_DE_LISTA < 12 then 'Asequible'
    else 'Barato'
end as precio, min(precio_de_lista) as precio_minimo
from tabla_de_productos
where tamano = '700 ml'
group by envase,
case
	when PRECIO_DE_LISTA >= 12 then 'Costoso'
    when PRECIO_DE_LISTA >= 5  and PRECIO_DE_LISTA < 12 then 'Asequible'
    else 'Barato'
end
order by envase;

SELECT ENVASE, 
CASE 
	WHEN PRECIO_DE_LISTA >= 12 THEN 'COSTOSO' 
	WHEN PRECIO_DE_LISTA >= 5 AND PRECIO_DE_LISTA < 12 THEN 'ASEQUIBLE' 
ELSE 'BARATO' 
END AS PRECIO, MIN(PRECIO_DE_LISTA) AS PRECIO_MINIMO 
FROM tabla_de_productos WHERE TAMANO = '700 ml' 
GROUP BY ENVASE, PRECIO 
ORDER BY ENVASE;

#Registre el año de nacimiento de los clientes y clasifíquelos de la siguiente manera:
#Nacidos antes de 1990= Viejos, nacidos entre 1990 y 1995= Jóvenes y nacidos después de 1995= Niños. 
#Liste el nombre del cliente y esta clasificación.
select nombre,
case
	when year(fecha_de_nacimiento) < 1990 then 'Viejos'
    when year(fecha_de_nacimiento) between 1990 and 1995 then 'Jóvenes'
else 'Niños'
end as 'Clasificacion'
from tabla_de_clientes;
