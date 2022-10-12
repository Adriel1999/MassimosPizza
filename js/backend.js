const button2 = document.getElementById('btn2');


// Ejemplo implementando el metodo POST:
async function postData() {
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let personas = document.getElementById("personas").value;
    let Mensaje = document.getElementById("Mensaje").value;

    url = 'http://localhost:3001/api/alumnos' 
    data = {
        "Nombre":`${nombre}`,
        "Telefono":`${telefono}`, // Esto es un ejemplo de como se puede mandar un objeto
        "Email":`${email}`,
        "Fecha":`${fecha}`,
        "Hora":`${hora}`,
        "Personas":`${personas}`,
        "Mensaje":`${Mensaje}`
      } 
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
} 



button2.onclick = function click() {
   postData();
   alert(MessageChannel,"Gracias por su reservacion")
};



