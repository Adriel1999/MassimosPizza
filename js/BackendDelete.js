const button3 = document.getElementById('btn3');
function deleteData() {
    url = 'http://localhost:3001/api/alumnos'
    item = document.getElementById("nombreBorrar").value;
    return fetch(url + '/' + item, {
      method: 'delete'
    })
    .then(response => response.json());
}
  
  
button3.onclick = function click() {
    deleteData();
};