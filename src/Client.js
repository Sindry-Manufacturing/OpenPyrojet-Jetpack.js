export class Client {
    constructor() {
        this.connection = null;
    }

    connect(
        url,
        onDisconnected,
        onConfig
    ) {
        let self = this;
        if (this.isConnected()) {
            console.error('Calling connect() while client is still connected to', url);
            return;
        }
        console.log('Starting connection to WebSocket Server');
        this.connection = new WebSocket(url)

        this.connection.onmessage = function(event) {
            console.log('Received', event.data);
            let message = JSON.parse(event.data);
            if (!message.hasOwnProperty('type')) {
                console.error('Incoming message is missing a "type" attribute');
                return;
            }
            if (!message.hasOwnProperty('data')) {
                console.error('Incoming message is missing a "data" attribute');
                return;
            }
            if (message.type === 'config') {
                onConfig(message.data);
            }
        }

        this.connection.onopen = function(event) {
            console.log('Connected to', event.target.url);
            self.sendGetConfig();
        }

        this.connection.onclose = function(event) {
            console.log('Disconnected from', event.target.url);
            self.connection = null;
            onDisconnected();
        }
    }

    disconnect() {
        this.connection.close();
        this.connection = null;
    }

    isConnected() {
        return this.connection != null && (
            this.connection.readyState === WebSocket.OPEN || this.connection.readyState === WebSocket.CONNECTING
        );
    }

    send(data) {
        this.connection.send(data);
    }

    sendGetConfig() {
        this.send(JSON.stringify({ type: 'get_config' }));
    }

    sendPutConfig(config) {
        this.send(JSON.stringify({ type: 'put_config', data: config }));
    }

    sendFireNozzle(nozzleId) {
        this.send(JSON.stringify({ type: 'fire_nozzle', data: nozzleId }));
    }
}
