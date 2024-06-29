import { Suscriptor } from './Suscriptor';
import  MecanismoDeControl  from '../mecanismo/MecanismoDeControl';
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