import { Suscriptor } from './Suscriptor';
import { Operador } from './Operadores';
import { Jefe } from './Jefe';
import { CambioEstado } from './CambioEstado';
import { Reactor } from './Reactor';

export class NotificadorEstadoReactor {
    private suscriptores: Suscriptor[];
    private jefe: Jefe | null;

    constructor() {
        this.suscriptores = [];
        this.jefe = null;
    }

    suscribir(s: Operador): void {
        this.suscriptores.push(s);
    }

    suscribirJefe(j: Jefe): void {
        this.jefe = j;
    }

    desuscribir(s: Operador): void {
        this.suscriptores = this.suscriptores.filter(subscriber => subscriber !== s);
    }

    desuscribirJefe(): void {
        this.jefe = null;
    }

    notificar(r: Reactor, x: CambioEstado): void {
        if (x === CambioEstado.CRITICO) {
            this.suscriptores.forEach(suscriptor => suscriptor.actualizar(r));
        } else if (x === CambioEstado.APAGADO && this.jefe !== null) {
            this.jefe.actualizar();
        }
    }
}
