import { CambioEstado } from "../Estado/CambioEstado";
import Estado from "../Estado/Estado";
import EstadoSetter from "../Estado/EstadoSetter";
import MecanismoBarraDeControl from "../mecanismo/MecanismoBarraControl";
import MecanismoDeControl from "../mecanismo/MecanismoDeControl";
import { NotificadorEstadoReactor } from "../notificador/NotificadorEstadoReactor";
import { Operador } from "../notificador/Operadores";
import InfoEstadoReactor from "./InfoEstadoReactor";
import Sensor from "./Sensor";

export default class Reactor implements EstadoSetter{

    private capacidad: number;
    private estado: Estado;

    private operadores: Operador[];
    private sensor: Sensor;
    private mecanismoDeControl: MecanismoDeControl;
    private notificador: NotificadorEstadoReactor;
    private info: InfoEstadoReactor;
    
    constructor(capacidad: number, e: Estado) {
        this.estado = e;
        this.capacidad = capacidad;
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

    cambiarEstado(temp: number) {
        let tipoCambio: CambioEstado = this.estado.cambiarEstado(this, temp);
        this.info.sumarContador(tipoCambio);
        this.notificador.notificar(this, tipoCambio);
    }

    obtenerTemperatura(): number {
        return this.sensor.temperatura;
    }

    setEstado(e: Estado): void {
        this.estado = e;
    }
    
    getTemperatura(): number {
        return this.sensor.temperatura;
    }
    setTemperatura(temp: number) {
        this.sensor.temperatura = temp;
    }
}