console.log('holaaa2');

var formulario = document.getElementById('contact');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('me diste un click');



    let myHeaders = new Headers();
    const options = {
        method: 'GET',
        headers: myHeaders
    }

    fetch('/basedatos/consultatotalpacientes', options)

        .then((res) => res.json())
        .then((data) => {
            llenaTablas(data);
        });
});
function llenaTablas(x){
    var row=document.getElementById("tabla");
    var filas = "";
    for(var i=0;i<x.length;i++){
        filas += "<tr>";
        filas += "<td>" + x[i].id + "</td>";
        filas += "<td>" + x[i].nombre + "</td>";
        filas += "<td>" + x[i].apellido + "</td>";
        filas += "<td>" + x[i].numid + "</td>";
        filas += "</tr>";
    }
    row.innerHTML=filas;
}

