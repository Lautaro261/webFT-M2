const [buttonDelete] = $("#delete");
const [inputDelete] = $("#inputDelete");
const [botoncito] = $("#boton");
const [buttonBusqueda] = $("#search");
const [inputBus] = $("#input");

const funcionHandlerGet = (response) => {
  console.log(response);
  const [lista] = $("#lista");
  response.forEach((user) => {
    console.log(user.name);
    const nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = user.name;
    lista.append(nuevoLi);
  });
};

const funcionGet = () => {
  console.log("me hiciste click");
  $.get(" http://localhost:5000/amigos", funcionHandlerGet);
};

const funcionHandlerBus = (response) => {
  console.log(response);
  let [outputAmigo] = $("#amigo");
  outputAmigo.innerHTML = response.name;
  inputBus.value = "";
};

const funcionBusqueda = (event) => {
  console.log(inputBus.value);
  // tengo el numero ingresado
  // ahora hacer un get a http://localhost:5000/amigos/2 usando el id
  $.get(`http://localhost:5000/amigos/${inputBus.value}`, funcionHandlerBus);
};

const funcionHandlerDelete = () => {
  console.log(`Quiere borrar el amigo ${inputDelete.value}`);
  $.ajax({
    type: "DELETE",
    url: ` http://localhost:5000/amigos/${inputDelete.value}`,
    succes: funcionDelete,
  });
};

const funcionDelete = (response) => {
  console.log(response);
};

botoncito.addEventListener("click", funcionGet);
buttonBusqueda.addEventListener("click", funcionBusqueda);
buttonDelete.addEventListener("click", funcionHandlerDelete);
