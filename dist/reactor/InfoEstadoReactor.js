"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CambioEstado_1 = require("../estado/CambioEstado");
class InfoEstadoReactor {
    mapaInfo;
    constructor() {
        this.mapaInfo = new Map();
        this.mapaInfo.set(CambioEstado_1.CambioEstado.NORMAL, 0);
        this.mapaInfo.set(CambioEstado_1.CambioEstado.CRITICO, 0);
        this.mapaInfo.set(CambioEstado_1.CambioEstado.APAGADO, 0);
    }
    obtenerInfo() {
        return this.mapaInfo;
    }
    sumarContador(clave) {
        let valor = this.mapaInfo.get(clave);
        if (valor != undefined) {
            let nuevoValor = valor + 1;
            this.mapaInfo.set(clave, nuevoValor);
        }
    }
}
exports.default = InfoEstadoReactor;
//# sourceMappingURL=InfoEstadoReactor.js.map