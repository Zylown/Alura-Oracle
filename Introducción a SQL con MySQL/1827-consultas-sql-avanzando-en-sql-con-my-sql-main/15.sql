select ltrim("	My sql is easy");

select rtrim("	My sql is easy		");

select trim("	My sql is easy		");

select concat("My sql", " es facil");

select upper("my sql es una base de datos pro");

select lower("MY SQL ES UNA BUENA BASE DE DATOS");

select substring("my sql es una base de datos pro",14,4);

select concat(nombre, " ", dni) from tabla_de_clientes;

select concat(direccion_1, "-",barrio,"-",ciudad,"-",estado) from tabla_de_clientes;
SELECT NOMBRE, CONCAT(DIRECCION_1, ' ', BARRIO, ' ', CIUDAD, ' ', ESTADO) AS COMPLETO FROM tabla_de_clientes;