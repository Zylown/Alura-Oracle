select * from tbproducto;

select * from tbproducto where PRECIO_LISTA >= 28.49 and PRECIO_LISTA <= 28.52;

select * from tbproducto where ENVASE = 'Lata' or ENVASE = 'Botella Pet';

select * from tbproducto where (PRECIO_LISTA >= 15 and PRECIO_LISTA <= 25) and (ENVASE = 'Lata' or ENVASE = 'Botella Pet');

select * from tbproducto where (PRECIO_LISTA >= 15 and TAMANO = '1 Litro') or (ENVASE = 'Lata' or ENVASE = 'Botella Pet');


select * from tabla_de_vendedores;
select * from tabla_de_vendedores where (DE_VACACIONES) = 1 and year(FECHA_ADMISION) < 2016;
select NOMBRE,MATRICULA from tabla_de_vendedores;