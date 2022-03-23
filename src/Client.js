export class Client {
    constructor() {
        this.connection = null;
    }

    connect(url) {
        if (this.isConnected()) {
            console.error('Calling connect() while client is still connected to ' + url);
            return;
        }
        console.log('Starting connection to WebSocket Server');
        this.connection = new WebSocket(url)

        this.connection.onmessage = function(event) {
            // console.log(JSON.parse(event));
            console.log(JSON.parse(event.data));
        }

        this.connection.onopen = function(event) {
            console.log('Connected to ' + event.target.url);
            this.send(JSON.stringify({ type: 'GET_CONFIG' }));
        }

        this.connection.onclose = function(event) {
            console.log('Disconnected from ' + event.target.url);
            window.connection = null;
            window.navView.showDisconnected();
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
}
