export class ModeView {
    constructor() {
        this.disconnectedRoot = $('#DisconnectedRoot');
        this.connectedRoot = $('#ConnectedRoot');
    }

    showConnected() {
        this.disconnectedRoot.addClass('visually-hidden');
        this.connectedRoot.removeClass('visually-hidden');
    }

    showDisconnected() {
        this.connectedRoot.addClass('visually-hidden');
        this.disconnectedRoot.removeClass('visually-hidden');
    }
}
