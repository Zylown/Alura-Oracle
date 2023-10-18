 use jugos;
 insert into tbproductos(
 producto,nombre,envase,volumen,sabor,precio) values (
 '695594','Festival de Sabores','Botella PET','1.5 litros','Asaí','18.51'
 );
 insert into tbproductos(
 producto,nombre,envase,volumen,sabor,precio) values (
 '1041119','Línea Citrus','Botella de Vidrio','700 ml','Lima','4.90'
 );
 
 select * from tbproductos;
 use jugos;
 update tbproductos set producto = '812829', envase = 'lata' 
 where volumen = '350 ml';
 
  update tbproductos set precio = 28.51
 where producto = '695594';
 
 update tbproductos set sabor = 'Lima/Limón', precio = 4.90
 where producto = '1041119';
