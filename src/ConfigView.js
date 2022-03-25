export class ConfigView {
    constructor() {
        this.nozzlePins = $('#NozzlePins');
        this.heatingDuration = $('#HeatingDuration');
        this.triggerDelay = $('#TriggerDelay');
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
