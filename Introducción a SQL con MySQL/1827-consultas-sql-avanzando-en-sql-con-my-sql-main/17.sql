select (34+346-57)/15 *29 as resultado;

select ceiling(23.1222);

select floor(23.9999);

select rand() as resultado;

select round(254.545,2);

select round(254.545,1);

select numero, cantidad,precio from items_facturas;
select numero, cantidad,precio, round(CANTIDAD * PRECIO,2) as Facturacion from items_facturas;

#En la tabla de facturas tenemos el valor del impuesto. En la tabla de ítems tenemos la cantidad y la facturación. 
#Calcula el valor del impuesto pago en el año de 2016 redondeando al menor entero.

SELECT YEAR(FECHA_VENTA), FLOOR(SUM(IMPUESTO * (CANTIDAD * PRECIO))) 
AS RESULTADO
FROM facturas F
INNER JOIN items_facturas IFa ON F.NUMERO = IFa.NUMERO
WHERE YEAR(FECHA_VENTA) = 2016
GROUP BY YEAR(FECHA_VENTA);