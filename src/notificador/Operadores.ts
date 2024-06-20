import { Suscriptor } from './Suscriptor';
import { MecanismoDeControl } from './MecanismoDeControl';
import { Reactor } from './Reactor';

export class Operador implements Suscriptor {
    private mecanismo: MecanismoDeControl;

    constructor(m: MecanismoDeControl) {
        this.mecanismo = m;
    }

    actualizar(r: Reactor): void {
        this.mecanismo.enfriar(r);
        }
}