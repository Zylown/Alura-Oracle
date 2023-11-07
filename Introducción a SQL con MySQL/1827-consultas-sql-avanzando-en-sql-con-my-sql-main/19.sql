select * from facturas;

select * from items_facturas;

select F.dni, f.FECHA_VENTA, IFa.CANTIDAD from facturas F
inner join 
items_facturas IFa
ON F.NUMERO = IFa.NUMERO;

select F.dni, date_format(f.FECHA_VENTA,"%m - %Y") as Mes_Año , IFa.CANTIDAD from facturas F
inner join 
items_facturas IFa
ON F.NUMERO = IFa.NUMERO;

#Cantidad de ventas por mes para cada cliente
select F.dni, date_format(f.FECHA_VENTA,"%m - %Y") as Mes_Año ,
sum(IFa.CANTIDAD ) as Cantidad_vendida from facturas F
inner join 
items_facturas IFa
ON F.NUMERO = IFa.NUMERO
group by
 F.dni, date_format(f.FECHA_VENTA,"%m - %Y");
 
 #Limite de ventas por cliente (Volumen en decilitros)
 select * from tabla_de_clientes TC;
 
 #En esta aula construimos un informe que presentó a los clientes que tenían ventas inválidas. 
 #Complementa este informe listando solamente a los que tuvieron ventas inválidas y 
 #calcula la diferencia entre el límite de venta máximo y la cantidad vendida en porcentuales.
 
SELECT A.DNI, A.NOMBRE, A.MES_AÑO, 
A.CANTIDAD_VENDIDA - A.CANTIDAD_MAXIMA AS DIFERENCIA,
CASE
   WHEN  (A.CANTIDAD_VENDIDA - A.CANTIDAD_MAXIMA) <= 0 THEN 'Venta Válida'
   ELSE 'Venta Inválida'
END AS STATUS_VENTA, ROUND((1 - (A.CANTIDAD_MAXIMA/A.CANTIDAD_VENDIDA)) * 100,2) AS PORCENTAJE
 FROM(
SELECT F.DNI, TC.NOMBRE, DATE_FORMAT(F.FECHA_VENTA, "%m - %Y") AS MES_AÑO, 
SUM(IFa.CANTIDAD) AS CANTIDAD_VENDIDA, 
MAX(VOLUMEN_DE_COMPRA)/10 AS CANTIDAD_MAXIMA  
FROM facturas F 
INNER JOIN 
items_facturas IFa
ON F.NUMERO = IFa.NUMERO
INNER JOIN 
tabla_de_clientes TC
ON TC.DNI = F.DNI
GROUP BY
F.DNI, TC.NOMBRE, DATE_FORMAT(F.FECHA_VENTA, "%m - %Y"))A
WHERE (A.CANTIDAD_MAXIMA - A.CANTIDAD_VENDIDA) < 0;

select dni,nombre,volumen_de_compra from tabla_de_clientes TC;

select F.dni, tc.nombre, date_format(f.FECHA_VENTA,"%m - %Y") as Mes_Año ,
sum(IFa.CANTIDAD) as Cantidad_vendida, 
max(volumen_de_compra)/10 as Cantidad_Maxima from facturas F
inner join 
items_facturas IFa
ON F.NUMERO = IFa.NUMERO
inner join
tabla_de_clientes TC
ON TC.DNI = F.DNI
group by
 F.dni, tc.NOMBRE, date_format(f.FECHA_VENTA,"%m - %Y");
 
select A.DNI, A.NOMBRE, A.MES_AÑO, 
A.CANTIDAD_VENDIDA - A.CANTIDAD_MAXIMA as Diferencia,
case 
	when A.CANTIDAD_VENDIDA - A.CANTIDAD_MAXIMA < 0 then "Venta Válida"
    else "Venta Inválida"
end as status_venta
 FROM (
select F.dni, tc.nombre, date_format(f.FECHA_VENTA,"%m - %Y") as Mes_Año ,
sum(IFa.CANTIDAD) as Cantidad_vendida, 
max(volumen_de_compra)/10 as Cantidad_Maxima from facturas F
inner join 
items_facturas IFa
ON F.NUMERO = IFa.NUMERO
inner join
tabla_de_clientes TC
ON TC.DNI = F.DNI
group by
 F.dni, tc.NOMBRE, date_format(f.FECHA_VENTA,"%m - %Y"))A;
 
 #En esta aula construimos un informe que presentó a los clientes que tenían ventas inválidas. 
 #Calcula la diferencia entre el límite de venta máximo y la cantidad vendida, en porcentuales.
 #Ahora lista solamente a los que tuvieron ventas inválidas en el año 2018 excediendo más del 50% de su límite permitido por mes. 
 SELECT A.DNI, A.NOMBRE, A.MES_AÑO, 
A.CANTIDAD_VENDIDA - A.CANTIDAD_MAXIMA AS DIFERENCIA,
CASE
   WHEN  (A.CANTIDAD_VENDIDA - A.CANTIDAD_MAXIMA) <= 0 THEN 'Venta Válida'
   ELSE 'Venta Inválida'
END AS STATUS_VENTA, ROUND((1 - (A.CANTIDAD_MAXIMA/A.CANTIDAD_VENDIDA)) * 100,2) AS PORCENTAJE
 FROM(
SELECT F.DNI, TC.NOMBRE, DATE_FORMAT(F.FECHA_VENTA, "%m - %Y") AS MES_AÑO, 
SUM(IFa.CANTIDAD) AS CANTIDAD_VENDIDA, 
MAX(VOLUMEN_DE_COMPRA)/10 AS CANTIDAD_MAXIMA  
FROM facturas F 
INNER JOIN 
items_facturas IFa
ON F.NUMERO = IFa.NUMERO
INNER JOIN 
tabla_de_clientes TC
ON TC.DNI = F.DNI
GROUP BY
F.DNI, TC.NOMBRE, DATE_FORMAT(F.FECHA_VENTA, "%m - %Y"))A
WHERE (A.CANTIDAD_MAXIMA - A.CANTIDAD_VENDIDA) < 0 AND ROUND((1 - (A.CANTIDAD_MAXIMA/A.CANTIDAD_VENDIDA)) * 100,2) > 50
AND A.MES_AÑO LIKE "%2018";