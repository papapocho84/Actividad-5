document.getElementById('formulario').addEventListener('submit', function (event) {

    event.preventDefault();


    const Nombre = document.getElementById('Nombre').value;
    const Correo = document.getElementById('Correo').value;
    const Telefono = document.getElementById('Telefono').value;
    const Mensaje = document.getElementById('Mensaje').value;

    const resultado = `

     <p><strong>Nombre:</strong> ${Nombre}</p>
     <p><strong>Correo:</strong> ${Correo}</p>
     <p><strong>Teléfono:</strong> ${Telefono}</p>
     <p><strong>Mensaje:</strong> ${Mensaje}</p>
     `;


    document.getElementById('resultado').innerHTML = resultado;

});
