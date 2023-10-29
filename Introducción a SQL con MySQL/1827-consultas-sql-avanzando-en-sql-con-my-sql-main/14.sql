select envase, max(PRECIO_DE_LISTA) as precio_maximo from tabla_de_productos group by ENVASE;

select x.envase,x. precio_maximo from vw_envases_grandes x
where precio_maximo >= 10;

select a.nombre_del_producto, a.envase, a.precio_de_lista, b.precio_maximo from tabla_de_productos a
inner join
vw_envases_grandes b
on a.ENVASE = b.envase;

select a.nombre_del_producto, a.envase, a.precio_de_lista, 
((a.precio_de_lista/b.precio_maximo)-1)*100 as porcentaje_variacion from tabla_de_productos a
inner join
vw_envases_grandes b
on a.ENVASE = b.envase;