import { Suscriptor } from './Suscriptor';
import { Operador } from './Operadores';
import { Jefe } from './Jefe';

export class NotificadorEstadoReactor {
    private suscriptores: Operador[];
    private jefes: Jefe[];

    constructor() {
        this.suscriptores = [];
        this.jefes = [];
    }

    suscribir(s: Operador: void {
        this.suscriptores.push(s);
    }

    suscribir(j: Jefe): void {
        this.jefes.push(j);
    }

    desuscribir(s: Operador): void {
        this.suscriptores = this.suscriptores.filter(subscriber => subscriber !== s);
    }

    desuscribir(j: Jefe): void {
        this.jefes = this.jefes.filter(jefe => jefe !== j);
    }

    notificar(x: CambioEstado): void {
        this.suscriptores.forEach(suscriptor => suscriptor.actualizar());
        this.jefes.forEach(jefe => jefe.actualizar());
    }
}
