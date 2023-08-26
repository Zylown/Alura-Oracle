import { productService } from "../service/product-service.js";

const crearNuevaLinea = (imagen, producto, precio, id) => {
  const linea = document.createElement("li");
  const contenido = `
  <div class="container__cards--img">
  <img
    src="${imagen}"
    alt="Producto"
    class="image--producto"
  />
  <img src="../assets/img/icon_trash.svg" class="icon__trash" id="${id}"/>
  <img src="../assets/img/icon_edit.svg" class="icon__edit" data-id="${id}"/>
</div>
<h3>${producto}</h3>
<h4>${precio}</h4>
<p>${id}</p>
    `;
  // se utiliza para insertar contenido HTML dentro del elemento linea. innerHTML
  //innerHTML es una propiedad en JavaScript que te permite acceder al contenido HTML de un elemento y también modificarlo.
  linea.innerHTML = contenido;
  const btn_trash = linea.querySelector(".icon__trash");
  //console.log(btn_icon);
  btn_trash.addEventListener("click", () => {
    const id = btn_trash.id;
    productService
      .eliminarProducto(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => {
        console.log("Error es: " + err);
      });
  });

  //icon va a pagina editar
  const btn_edit = linea.querySelector(".icon__edit");
  btn_edit.addEventListener("click", () => {
    //getAttribute() devuelve el valor del atributo especificado en el elemento
    const id = btn_edit.getAttribute("data-id");
    window.location.href = `../screens/editarProducto.html?id=${id}`;
  });
  return linea;
};

const ul = document.querySelector("[data-ul]");

productService
  .listaProductos()
  .then((data) => {
    const validData = data.filter((item) => item !== null); // Filtrar elementos null
    validData.forEach(({ url, nombre, precio, id }) => {
      const nuevaLinea = crearNuevaLinea(url, nombre, precio, id); //trae los datos del db.json
      ul.appendChild(nuevaLinea);
    });
    //console.log(data);
  })
  .catch((e) => {
    console.log("Error: " + e);
  });

/*
//Buenas practicas de la funcion crearNuevaLinea, es más segura ya que con innerHTML pueden agregar codigo malicioso
const crearNuevaLinea = (imagen, producto, precio, id) => {
  const linea = document.createElement("li");

  const containerImg = document.createElement("div");
  containerImg.className = "container__cards--img";

  const imgProducto = document.createElement("img");
  imgProducto.src = imagen;
  imgProducto.alt = "Producto";
  imgProducto.className = "image--producto";
  containerImg.appendChild(imgProducto);

  const iconTrash = document.createElement("img");
  iconTrash.src = "../assets/img/icon_trash.svg";
  iconTrash.className = "icon__trash";
  containerImg.appendChild(iconTrash);

  const iconEdit = document.createElement("img");
  iconEdit.src = "../assets/img/icon_edit.svg";
  iconEdit.className = "icon__edit";
  containerImg.appendChild(iconEdit);

  const h3 = document.createElement("h3");
  h3.textContent = producto;

  const h4 = document.createElement("h4");
  h4.textContent = precio;

  const p = document.createElement("p");
  p.textContent = id;

  linea.appendChild(containerImg);
  linea.appendChild(h3);
  linea.appendChild(h4);
  linea.appendChild(p);

  console.log(linea.querySelector(".icon__trash"));

  return linea;
};
*/
