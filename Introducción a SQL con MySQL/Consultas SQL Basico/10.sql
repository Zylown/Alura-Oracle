select * from tbcliente;

select dni, nombre, direccion1,direccion2,barrio,ciudad,estado,cp,fecha_nacimiento,edad,sexo from tbcliente;

select dni, nombre from tbcliente;

select dni, sexo, edad,direccion1 from tbcliente;

select nombre as Nombre_Completo, sexo as Género from tbcliente;

select nombre,sexo,edad,direccion1 from tbcliente limit 6;
