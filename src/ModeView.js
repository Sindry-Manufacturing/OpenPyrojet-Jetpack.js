export class ModeView {
    constructor() {
        this.disconnectedRoot = $('#DisconnectedRoot');
        this.connectingRoot = $('#ConnectingRoot');
        this.connectedRoot = $('#ConnectedRoot');
    }

    showConnected() {
        this.disconnectedRoot.addClass('visually-hidden');
        this.connectingRoot.addClass('visually-hidden');
        this.connectedRoot.removeClass('visually-hidden');
    }

    showConnecting() {
        this.disconnectedRoot.addClass('visually-hidden');
        this.connectingRoot.removeClass('visually-hidden');
        this.connectedRoot.addClass('visually-hidden');
    }

    showDisconnected() {
        this.disconnectedRoot.removeClass('visually-hidden');
        this.connectingRoot.addClass('visually-hidden');
        this.connectedRoot.addClass('visually-hidden');
    }
}
