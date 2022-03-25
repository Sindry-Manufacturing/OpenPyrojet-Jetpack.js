import  { Client } from './Client.js';
import {NavView} from "./NavView";

export class Application {
    constructor() {
        let self = this;
        this.client = new Client();
        this.navView = new NavView(
            $('#ServerUrl'),
            $('#ConnectButton'),
            () => {
                self.toggleConnection();
            });
    }

    toggleConnection() {
        let self = this;
        if (!this.client.isConnected()) {
            let url = this.navView.getUrl();
            if (!url.startsWith('ws://')) {
                url = 'ws://' + url;
            }
            this.client.connect(url, function () {
                self.navView.showDisconnected();
            });
            this.navView.showConnected();
        } else {
            this.client.disconnect();
            this.navView.showDisconnected();
        }
    }
}