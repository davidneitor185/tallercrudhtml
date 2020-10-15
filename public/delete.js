console.log('holaaa2');

var formulario = document.getElementById('contact');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('me diste un click');
  let datos = new FormData(formulario);
  let idpaciente = datos.get('identificacion');
  

  let myHeaders = new Headers();
  const options = {
    method: 'DELETE',
    headers: myHeaders,
    body: new URLSearchParams({
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/borrarpaciente', options)
     
    .then((res) => res.json())    
    .then((data) => {
      console.log(data);
    });
});