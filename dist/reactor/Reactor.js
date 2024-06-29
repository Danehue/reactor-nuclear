"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reactor {
    operadores;
    capacidad;
    sensor;
    mecanismoDeControl;
    notificador;
    estado;
    info;
    constructor(capacidad, e) {
        this.estado = e;
    }
    iniciar() {
        throw new Error("Method not implemented.");
    }
    producir() {
        this.estado.producir(this.sensor.temperatura);
    }
    detener() {
        throw new Error("Method not implemented.");
    }
    cambiarEstado(temp) {
        let tipoCambio = this.estado.cambiarEstado(this, temp);
        this.info.sumarContador(tipoCambio);
        this.notificador.notificar(this, tipoCambio);
    }
    obtenerTemperatura() {
        return this.sensor.temperatura;
    }
    setEstado(e) {
        this.estado = e;
    }
    getTemperatura() {
        return this.sensor.temperatura;
    }
    setTemperatura(temp) {
        this.sensor.temperatura = temp;
    }
}
exports.default = Reactor;
//# sourceMappingURL=Reactor.js.map