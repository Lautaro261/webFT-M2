const funcionHandler = (response) => {
    console.log(response)
    const [lista] = $('#lista')
    response.forEach(user => {
        console.log(user.name)
        const nuevoLi = document.createElement('li')
        nuevoLi.innerHTML = user.name
        lista.append(nuevoLi)

    });
}
const funcionGet = ()=> {
    console.log('me hiciste click')
    $.get(' http://localhost:5000/amigos', funcionHandler)
}

const [botoncito] = $('#boton')
botoncito.addEventListener('click',funcionGet)

const [buttonBusqueda] = $('#search')
const [inputBus]=$('#input')



buttonBusqueda.addEventListener('click' , (evento)=>{
    console.log(inputBus.value)
    // tengo el numero ingresado 
    // ahora hacer un get a http://localhost:5000/amigos/2 usando el id 
    $.get(`http://localhost:5000/amigos/${inputBus.value}` , (response)=>{
        console.log(response)
        let [outputAmigo] = $('#amigo')
        outputAmigo.innerHTML = response.name
    })

})



const [buttonDelete] = $('#delete')
const [inputDelete] = $('#inputDelete')

buttonDelete.addEventListener('click', ()=>{
    console.log(`Quiere borrar el amigo ${inputDelete.value}`)
    $.delete
})





