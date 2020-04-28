var socket = io();


socket.on('connect', function() {

    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {

    console.log('Perdida de conexion con servidor');
});

// ENviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Juan Camilo',
    mensaje: 'melo'
}, function(resp) {
    console.log('respuesta server:', resp);
});

//Escuchar Informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

})