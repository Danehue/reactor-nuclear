"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Apagado_1 = __importDefault(require("../estado/Apagado"));
const MecanismoBarraControl_1 = __importDefault(require("../mecanismo/MecanismoBarraControl"));
const NotificadorEstadoReactor_1 = require("../notificador/NotificadorEstadoReactor");
const InfoEstadoReactor_1 = __importDefault(require("./InfoEstadoReactor"));
const Sensor_1 = __importDefault(require("./Sensor"));
class Reactor {
    capacidad;
    estado;
    _sensor;
    mecanismoDeControl;
    notificador;
    info;
    constructor() {
        this.notificador = new NotificadorEstadoReactor_1.NotificadorEstadoReactor();
        this.estado = new Apagado_1.default();
        this.capacidad = 700;
        this._sensor = new Sensor_1.default(this);
        this.mecanismoDeControl = new MecanismoBarraControl_1.default();
        this.info = new InfoEstadoReactor_1.default();
    }
    iniciar() {
        throw new Error("Method not implemented.");
    }
    producir(horas) {
        return (this.estado.producir(this._sensor.temperatura)) * horas;
    }
    detener() {
        throw new Error("Method not implemented.");
    }
    cambiarEstado(temp) {
        let tipoCambio = this.estado.cambiarEstado(this, temp);
        this.info.sumarContador(tipoCambio);
        this.notificador.notificar(this, tipoCambio);
    }
    setEstado(e) {
        this.estado = e;
    }
    obtenerTemperatura() {
        return this._sensor.temperatura;
    }
    setTemperatura(temp) {
        this._sensor.temperatura = temp;
    }
}
exports.default = Reactor;
//# sourceMappingURL=Reactor.js.map