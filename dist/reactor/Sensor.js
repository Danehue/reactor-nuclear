"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sensor {
    _temperatura;
    suscriptor;
    constructor(reactor) {
        this._temperatura = 0;
        this.suscriptor = reactor;
    }
    get temperatura() {
        return this._temperatura;
    }
    set temperatura(value) {
        this._temperatura = value;
        this.notificar();
    }
    notificar() {
        this.suscriptor.cambiarEstado(this.temperatura);
    }
}
exports.default = Sensor;
//# sourceMappingURL=Sensor.js.map