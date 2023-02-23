

const funcionHandler = (response)=>{
    const listita = $('#List')[0]
    response.forEach((user) => {
        const nuevoli = document.createElement('li')
        nuevoli.innerHTML = user.name
        listita.append(nuevoli)
    });
}

const funcionGet = () =>  $.get('http://jsonplaceholder.typicode.com/users', funcionHandler)


const [button] = $('#button')


button.addEventListener('click',funcionGet)