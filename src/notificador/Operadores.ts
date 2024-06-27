import { Suscriptor } from './Suscriptor';
import  MecanismoDeControl  from '../mecanismo/mecanismo-de-control';
import Reactor from '../reactor/Reactor';
// import { Reactor } from '../reactor/Reactor';

export class Operador implements Suscriptor {
    private mecanismo: MecanismoDeControl;

    constructor(m: MecanismoDeControl) {
        this.mecanismo = m;
    }

    actualizar(r: Reactor): void {
        this.mecanismo.enfriar(r);
        }
}