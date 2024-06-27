"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificadorEstadoReactor = void 0;
const CambioEstado_1 = require("../estado/CambioEstado");
class NotificadorEstadoReactor {
    suscriptores;
    jefe;
    constructor() {
        this.suscriptores = [];
        this.jefe = null;
    }
    suscribir(s) {
        this.suscriptores.push(s);
    }
    suscribirJefe(j) {
        this.jefe = j;
    }
    desuscribir(s) {
        this.suscriptores = this.suscriptores.filter(subscriber => subscriber !== s);
    }
    desuscribirJefe() {
        this.jefe = null;
    }
    notificar(r, x) {
        if (x === CambioEstado_1.CambioEstado.CRITICO) {
            this.suscriptores.forEach(suscriptor => suscriptor.actualizar(r));
        }
        else if (x === CambioEstado_1.CambioEstado.APAGADO && this.jefe !== null) {
            this.jefe.actualizar();
        }
    }
}
exports.NotificadorEstadoReactor = NotificadorEstadoReactor;
//# sourceMappingURL=NotificadorEstadoReactor.js.map