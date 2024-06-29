"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Barra {
    _vidaUtil;
    constructor(vidaUtil) {
        this._vidaUtil = vidaUtil;
    }
    get vidaUtil() {
        return this._vidaUtil;
    }
    set vidaUtil(value) {
        this._vidaUtil = value;
    }
    getPorcentajeReduccion() {
        return parseFloat(((this._vidaUtil / 3600) * 100).toFixed(2));
    }
    reducirVidaUtil() {
        this.vidaUtil = 0;
    }
}
exports.default = Barra;
//# sourceMappingURL=barra.js.map