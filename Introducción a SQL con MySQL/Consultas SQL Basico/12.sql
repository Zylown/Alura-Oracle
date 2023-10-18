select * from tbcliente;

select * from tbcliente where edad > 27;

select * from tbcliente where edad <= 27;

select * from tbcliente where edad <> 26;

select * from tbcliente where nombre > 'Erica Carvajo';

select * from tbproducto;

select * from tbproducto where PRECIO_LISTA > 28.51;

select * from tbproducto where PRECIO_LISTA between 28.51 and 28.52;

select * from tbcliente where FECHA_NACIMIENTO = '1995-01-13';

select * from tbcliente where FECHA_NACIMIENTO < '1995-01-13';

select * from tbcliente where year(FECHA_NACIMIENTO ) = 1995;

select * from tbcliente where day(FECHA_NACIMIENTO ) = '20';

select * from tabla_de_vendedores where year(fecha_admision) >= 2016;