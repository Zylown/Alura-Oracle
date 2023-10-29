select * from tabla_de_productos where sabor = 'Mango' and tamano = '470 ml';
select * from tabla_de_productos where sabor = 'Mango' or tamano = '470 ml';
select * from tabla_de_productos where not (sabor = 'Mango') or tamano = '470 ml';
select * from tabla_de_productos where not (sabor = 'Mango' and tamano = '470 ml');
select * from tabla_de_productos where sabor = 'Mango' and not (tamano = '470 ml');

select * from tabla_de_productos where sabor in ('mango','uva');
select * from tabla_de_productos where sabor = 'mango' or sabor = 'uva';

select * from tabla_de_clientes where CIUDAD in ('ciudad de méxico','guadalajara');
select * from tabla_de_clientes where CIUDAD in ('ciudad de méxico','guadalajara') and edad > 21;
select * from tabla_de_clientes where CIUDAD in ('ciudad de méxico','guadalajara') and (edad between 20 and 25);