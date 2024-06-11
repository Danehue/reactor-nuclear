import { Suscriptor } from './Suscriptor';
import { MecanismoDeControl } from './MecanismoDeControl';

export class Operador implements Suscriptor {
    private mecanismo: MecanismoDeControl;

    constructor(m: MecanismoDeControl) {
        this.mecanismo = m;
    }

    actualizar(): void {
        this.mecanismo.enfriar();
        }
}