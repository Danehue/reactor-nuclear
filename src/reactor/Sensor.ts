import Reactor from "./Reactor";

export default class Sensor {
    private _temperatura: number;
    private suscriptor: Reactor;

    constructor(reactor: Reactor) {
        this._temperatura = 0;
        this.suscriptor = reactor;
    }

    public get temperatura(): number {
        return this._temperatura;
    }
    public set temperatura(value: number) {
        this._temperatura = value;
        this.notificar();
    }

    public notificar() {
        this.suscriptor.cambiarEstado(this.temperatura)
    }


}