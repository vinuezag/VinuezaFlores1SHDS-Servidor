// Protocolo de intercambio
var http = require('http'); 

// Creando el servidor usando el protocolo HTTP
var server = http.createServer();

// Servicio Web
function vinueza(req, resp) {
    // Estado satisfactorio, con un mensaje de texto plano con formato de json
    resp.writeHead(200, { 'Content-Type': 'text/plain' });

    // Mensaje de texto plano
    resp.write('Hola mi nombre es Greta Vinueza, Soy estudiante de la carrera de Desarrollo de Software. Vivo en Otavalo y viajo todos los dias para estudiar en Urcuqui');

    // Finalizar la comunicación
    resp.end();
}

server.on('request', vinueza);

// El servidor escucha en el puerto 3000
server.listen(3000, function() {
    console.log('La solicitud fue realizada por el puerto 3000');
});