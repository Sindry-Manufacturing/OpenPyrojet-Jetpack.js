export class ConfigView {
    constructor(client) {
        this.nozzlePins = $('#NozzlePins');
        this.heatingDuration = $('#HeatingDuration');
        this.triggerDelay = $('#TriggerDelay');
        this.saveButton = $('#ConfigSave');
        this.nozzleId = $('#NozzleId');
        this.fireButton = $('#FireNozzle');

        let self = this;
        this.saveButton.click(function () {
            let pins = self.nozzlePins.val().split(",").map(Number);
            let config = {
                nozzlePins : pins,
                heatingDuration : parseInt(self.heatingDuration.val()),
                triggerDelay : parseInt(self.triggerDelay.val())
            };
            client.sendPutConfig(config);
        });

        this.fireButton.click(function () {
            let nozzleId = parseInt(self.nozzleId.val());
            client.sendFireNozzle(nozzleId);
        });
    }

    update(config) {
        console.log('ConfigView update', config)
        if (config.hasOwnProperty('nozzlePins')) {
            this.nozzlePins.val(config.nozzlePins);
        }
        if (config.hasOwnProperty('heatingDuration')) {
            this.heatingDuration.val(config.heatingDuration);
        }
        if (config.hasOwnProperty('triggerDelay')) {
            this.triggerDelay.val(config.triggerDelay);
        }
    }
}
