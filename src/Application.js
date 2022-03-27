import  { Client } from './Client';
import { NavView } from "./NavView";
import { ModeView } from "./ModeView";
import { ConfigView } from "./ConfigView";

export class Application {
    constructor() {
        let self = this;
        this.client = new Client();
        this.modeView = new ModeView();
        this.configView = new ConfigView(this.client);
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
            this.client.connect(
                url,
                function () {
                    self.navView.showConnected();
                    self.modeView.showConnected();
                },
                function () {
                    self.navView.showDisconnected();
                    self.modeView.showDisconnected();
                },
                function (config) {
                    self.configView.update(config);
                }
            );
            this.navView.showConnected();
            this.modeView.showConnecting();
        } else {
            this.client.disconnect();
        }
    }
}