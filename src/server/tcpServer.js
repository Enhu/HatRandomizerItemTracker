const net = require('net');

function createTcpServer(port, onConnection) {
    const server = net.createServer((socket) => {
        console.log('Client connected.');

        if (typeof onConnection === 'function') {
            onConnection(socket);
        }

        socket.on('end', () => {
            console.log('Client disconnected.');
        });

        socket.on('error', (err) => {
            console.error(`Socket error: ${err.message}`);
        });
    });

    server.listen(port, () => {
        console.log(`TCP server is listening on port ${port}`);
    });

    return server;
}

module.exports = createTcpServer;