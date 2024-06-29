import Apagado from "../estado/Apagado";
import { CambioEstado } from "../estado/CambioEstado";
import Estado from "../estado/Estado";
import EstadoSetter from "../estado/EstadoSetter";
import Normal from "../estado/Normal";
import MecanismoBarraDeControl from "../mecanismo/MecanismoBarraControl";
import MecanismoDeControl from "../mecanismo/MecanismoDeControl";
import { NotificadorEstadoReactor } from "../notificador/NotificadorEstadoReactor";
import { Operador } from "../notificador/Operadores";
import InfoEstadoReactor from "./InfoEstadoReactor";
import Sensor from "./Sensor";

export default class Reactor implements EstadoSetter{

    private capacidad: number;
    private estado: Estado;

    private _sensor: Sensor;
    private mecanismoDeControl: MecanismoDeControl;
    private notificador: NotificadorEstadoReactor;
    private _info: InfoEstadoReactor;
    
    
    constructor() {
        this.notificador = new NotificadorEstadoReactor();
        this.estado = new Apagado();
        this.capacidad = 700;
        this._sensor = new Sensor(this);
        this.mecanismoDeControl = new MecanismoBarraDeControl();
        this._info = new InfoEstadoReactor();
    }

    iniciar() {
        if (this._sensor.temperatura < 330) {
            this.setEstado(new Normal());
        }
    }

    producir(horas: number): number {
        return (this.estado.producir(this._sensor.temperatura)) * horas;
    }

    detener() {
        this.setEstado(new Apagado());
    }

    cambiarEstado(temp: number) {
        let tipoCambio: CambioEstado = this.estado.cambiarEstado(this, temp);
        this.info.sumarContador(tipoCambio);
        this.notificador.notificar(this, tipoCambio);
    }

    setEstado(e: Estado): void {
        this.estado = e;
    }
    
    obtenerTemperatura(): number {
        return this._sensor.temperatura;
    }

    setTemperatura(temp: number) {
        this._sensor.temperatura = temp;
    }

    public get info(): InfoEstadoReactor {
        return this._info;
    }
}