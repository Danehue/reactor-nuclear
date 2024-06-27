"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MecanismoBarraDeControl {
    _barras;
    _cantUtilizada;
    constructor(cantUtilizada, barras) {
        this._barras = barras;
        this._cantUtilizada = cantUtilizada;
    }
    get barras() {
        return this._barras;
    }
    get cantUtilizada() {
        return this._cantUtilizada;
    }
    agregarBarra(barra) {
        this.barras.push(barra);
    }
    enfriar(reactor) {
        let reduccionTotal = 0;
        let tempReactor = reactor.obtenerTemperatura();
        for (const barra of this.barras) {
            const porcentajeReduccion = barra.getPorcentajeReduccion();
            reduccionTotal += porcentajeReduccion;
            this._cantUtilizada++;
            barra.reducirVidaUtil();
            const tempFinal = tempReactor * (1 - porcentajeReduccion);
            reactor.setTemperatura(tempFinal);
            tempReactor = reactor.getTemperatura();
            if (tempReactor < 330) {
                break;
            }
        }
        console.log(`Se han utilizado ${this.cantUtilizada} barras para reducir la energía térmica.`);
    }
}
exports.default = MecanismoBarraDeControl;
//# sourceMappingURL=mecanismo-barra-control.js.map