select * from tabla_de_productos limit 4;
select * from tabla_de_productos limit 3,2;
#Queremos obtener las 10 primeras ventas del día 01/01/2017. ¿Cuál sería el comando SQL para obtener este resultado?
select * from facturas where FECHA_VENTA = '2017-01-01' limit 10;

select * from tabla_de_productos;
select * from tabla_de_productos order by PRECIO_DE_LISTA;
select * from tabla_de_productos order by PRECIO_DE_LISTA desc;
select * from tabla_de_productos order by NOMBRE_DEL_PRODUCTO;
select * from tabla_de_productos order by ENVASE desc, NOMBRE_DEL_PRODUCTO asc;

#¿Cuál (o cuáles) fue (fueron) la(s) mayor(es) venta(s) del producto “Refrescante, 1 Litro, Frutilla/Limón”, en cantidad? 
#(Obtenga este resultado utilizando 2 comandos SQL).
select * from tabla_de_productos where NOMBRE_DEL_PRODUCTO = 'Refrescante' and tamano = '1 Litro' and sabor = 'Frutilla/Limón';
SELECT CODIGO_DEL_PRODUCTO FROM tabla_de_productos 
WHERE NOMBRE_DEL_PRODUCTO = "Refrescante" AND TAMANO = "1 Litro" 
AND SABOR = "Frutilla/Limón"; 
select * from items_facturas where CODIGO_DEL_PRODUCTO = '1101035' order by cantidad desc;
