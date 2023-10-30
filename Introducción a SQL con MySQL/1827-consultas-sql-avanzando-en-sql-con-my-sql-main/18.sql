select current_timestamp() as resultado;

select concat("La fecha y la hora de hoy son: ",current_timestamp()) as Resultado;

select concat("El mes y el año son: ", 
date_format(current_timestamp(),"%m/%Y")) as Resultado;
select concat("La fecha y la hora de hoy son: ", 
date_format(current_timestamp(),"%W, %d/%m/%Y a las %T")) as Resultado;

select convert(23.45,char) as resultado;

select substring(convert(23.45,char),3,1) as Resultado;

#Queremos construir un SQL cuyo resultado sea, para cada cliente:
#“El cliente Pepito Pérez facturó 120000 en el año 2016”.
#Solamente para el año 2016.

SELECT CONCAT('El cliente ', TC.NOMBRE, ' facturó ', CONVERT(SUM(IFa.CANTIDAD * IFa.precio), CHAR(20)), ' en el año 2016') AS FRASE 
FROM facturas F 
INNER JOIN items_facturas IFa ON F.NUMERO = IFa.NUMERO 
INNER JOIN tabla_de_clientes TC ON F.DNI = TC.DNI 
WHERE YEAR(F.FECHA_VENTA) = 2016 
GROUP BY TC.NOMBRE, F.FECHA_VENTA 
LIMIT 0, 1000;