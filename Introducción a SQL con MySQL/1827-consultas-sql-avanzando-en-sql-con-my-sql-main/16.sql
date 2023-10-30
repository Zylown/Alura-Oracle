select curdate();

select current_timestamp();

select year(current_timestamp()); #ke año tamos

select month(current_timestamp()); #ke mes tamos
select monthname(current_timestamp()); #ke mes tamos

select day(current_timestamp()); #ke dia tamos
select dayname(current_timestamp()); #ke dia tamos

select datediff(current_timestamp(),"2023-01-01") as diferencia_de_dias;
select datediff(current_timestamp(),"2002-04-20") as diferencia_de_dias;

select current_timestamp() as dia_hoy, date_sub(current_timestamp(),interval 1 month);

select distinct fecha_venta,
dayname(fecha_venta) as dia, monthname(fecha_venta) as mes, year(fecha_venta) as año from facturas;

select nombre, datediff(year(current_timestamp),FECHA_DE_NACIMIENTO) from tabla_de_clientes;
select nombre, datediff(year(fecha_de_nacimiento),year(current_timestamp)) from tabla_de_clientes;
SELECT NOMBRE, TIMESTAMPDIFF(YEAR, FECHA_DE_NACIMIENTO, CURDATE()) AS EDAD FROM  tabla_de_clientes; #saber edad actual clientes