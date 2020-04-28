const { io } = require('../server');




io.on('connection', (client) => {

    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'catomas',
        mensaje: 'szs'

    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    // Escuchar el cliente 
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /* if (mensaje.usuario) {
            callback({
                resp: 'Todo salio bien!'
            });
        } else {
            callback({
                resp: 'Salio mal!!!!!!!!'
            })

        } */
    });

});