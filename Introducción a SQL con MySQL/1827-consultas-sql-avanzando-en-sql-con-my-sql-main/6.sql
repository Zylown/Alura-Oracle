#Suma del limite_de_credito del estado este caso solo (EM Y JC)
select estado, sum(LIMITE_DE_CREDITO) as Limite_total from tabla_de_clientes group by ESTADO;

select envase, PRECIO_DE_LISTA from tabla_de_productos;
#Muestra el mayor precio de cada envase
select envase, max(PRECIO_DE_LISTA) as Mayor_precio from tabla_de_productos group by ENVASE;
#Contar la cantidad de envase que tenemos
select envase, count(*) from tabla_de_productos group by ENVASE;
#Select suma del limite de credito de los clientes por barrio, osea limite de credito por barrio
select barrio, sum(limite_de_credito) from tabla_de_clientes group by BARRIO;
#Devuelve barrio pero por ciudad en ciudad de mexico
select ciudad, barrio, sum(limite_de_credito) from tabla_de_vendedores where ciudad = 'Ciudad de méxico' group by BARRIO;
#Devuelve barrio pero por ciudad en Guadalaraja
select ciudad, barrio, sum(limite_de_credito) from tabla_de_clientes where ciudad = 'Guadalajara' group by BARRIO;

SELECT CIUDAD, BARRIO, MAX(LIMITE_DE_CREDITO) as limite from tabla_de_clientes group by ESTADO,BARRIO,CIUDAD;

SELECT estado, BARRIO, MAX(LIMITE_DE_CREDITO) as limite from tabla_de_clientes group by ESTADO,BARRIO;

SELECT estado, BARRIO, MAX(LIMITE_DE_CREDITO) as limite,edad from tabla_de_clientes where edad >= 20 group by ESTADO,BARRIO,edad order by edad;

#Aprovechando el ejercicio del video anterior ¿Cuántos ítems vendidos cuentan con la mayor cantidad del producto '1101035'?
select * from items_facturas;
select max(CANTIDAD) AS CANTIDAD_MAXIMA  from items_facturas where CODIGO_DEL_PRODUCTO = '1101035';
SELECT COUNT(*) FROM items_facturas WHERE CODIGO_DEL_PRODUCTO = "1101035" AND CANTIDAD = 99;