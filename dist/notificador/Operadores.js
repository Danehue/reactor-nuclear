"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operador = void 0;
class Operador {
    mecanismo;
    constructor(m) {
        this.mecanismo = m;
    }
    actualizar(r) {
        this.mecanismo.enfriar(r);
    }
}
exports.Operador = Operador;
//# sourceMappingURL=Operadores.js.map