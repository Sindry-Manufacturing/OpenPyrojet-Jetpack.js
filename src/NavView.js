export class NavView {
    constructor(urlText, connectButton) {
        this.urlText = urlText;
        this.connectButton = connectButton;
    }

    showConnected() {
        this.connectButton.text('Disconnect');
        this.urlText.prop('disabled', true);
    }

    showDisconnected() {
        this.connectButton.text('Connect');
        this.urlText.prop('disabled', false);
    }

    getUrl() {
        return this.urlText.val();
    }
}
