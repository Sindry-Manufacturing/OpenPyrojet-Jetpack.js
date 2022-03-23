import 'bootstrap';
import './scss/app.scss';
import  { NavView } from './NavView.js';
import  { Client } from './Client.js';

window.client = new Client();
window.navView = null;

function addToLog(text) {
    let serverLog = $('#ServerLog');
    let currentLog = serverLog.val();
    let newLog = text + '\n' + currentLog;
    serverLog.text(newLog);
}

function toggleConnection() {
    if (!window.client.isConnected()) {
        let url = navView.getUrl();
        if (!url.startsWith('ws://')) {
            url = 'ws://' + url;
        }
        window.client.connect(url);
        window.navView.showConnected();
    } else {
        window.client.disconnect();
        window.connection = null;
        window.navView.showDisconnected();
    }
}

$(document).ready(function() {
    $('#ConnectButton').click(function () {
        window.navView = new NavView($('#ServerUrl'),$('#ConnectButton'))
        toggleConnection();
    });
});
