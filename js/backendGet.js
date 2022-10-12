const button = document.getElementById('btn');
async function GetData() {
    url = 'http://localhost:3001/api/alumnos'
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', 

    })
    .then((respuesta)=>respuesta.json())
    .then((data)=>{
        data.Alumnos.forEach((alumno)=>{
            console.log(alumno)
            var div = document.createElement('div');
            div.innerHTML = `<p>Reservacion Para:${alumno.Nombre}</p>
                             <p>Nombre:${alumno.Nombre}</p>
                             <p>Telefono:${alumno.Telefono}</p>
                             <p>Correo:${alumno.Email}</p>
                             <p>Fecha:${alumno.Fecha}</p>
                             <p>Hora:${alumno.Hora}</p>
                             <p>No.Personas:${alumno.Personas}</p>
                             <p>Tipo Decoracion:${alumno.Mensaje} <br> <br> <br> <br> <br> </p>`
            document.body.appendChild(div)

        })
    })
    .catch((error)=>{
        console.log(error)
    })

}

button.onclick = function click() {
    GetData();

};