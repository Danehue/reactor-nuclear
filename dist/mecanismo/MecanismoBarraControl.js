"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MecanismoBarraDeControl {
    _barras;
    _cantUtilizada;
    constructor() {
        this._barras = [];
        this._cantUtilizada = 0;
    }
    get barras() {
        return this._barras;
    }
    get cantUtilizada() {
        return this._cantUtilizada;
    }
    agregarBarras(barras) {
        barras.forEach(barra => this.barras.push(barra));
    }
    enfriar(reactor) {
        let reduccionTotal = 0;
        let tempReactor = reactor.obtenerTemperatura();
        if (tempReactor <= 330) {
            return;
        }
        for (const barra of this.barras) {
            const porcentajeReduccion = barra.getPorcentajeReduccion();
            reduccionTotal += porcentajeReduccion;
            this._cantUtilizada++;
            barra.reducirVidaUtil();
            const tempFinal = tempReactor * (1 - porcentajeReduccion / 100);
            reactor.setTemperatura(tempFinal);
            tempReactor = reactor.obtenerTemperatura();
            if (tempReactor <= 330) {
                break;
            }
        }
        return this.cantUtilizada;
    }
}
exports.default = MecanismoBarraDeControl;
//# sourceMappingURL=MecanismoBarraControl.js.map