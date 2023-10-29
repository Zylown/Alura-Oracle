select distinct barrio from tabla_de_vendedores;

select * from tabla_de_clientes
where BARRIO in ('Condesa','Del Valle','Contadero','Oblatos');
#lo mismo ke arriba
select * from tabla_de_clientes
where BARRIO in (select distinct barrio from tabla_de_vendedores);

select envase, max(PRECIO_DE_LISTA) as precio_maximo from tabla_de_productos group by ENVASE;

select x.ENVASE, x.precio_maximo from
(select envase, max(PRECIO_DE_LISTA) 
as precio_maximo from tabla_de_productos group by ENVASE) x
where x.precio_maximo >= 10;

SET @@sql_mode = sys.list_drop(@@sql_mode, 'ONLY_FULL_GROUP_BY');