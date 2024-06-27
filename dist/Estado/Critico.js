"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Apagado_1 = __importDefault(require("./Apagado"));
const CambioEstado_1 = require("./CambioEstado");
const Estado_1 = __importDefault(require("./Estado"));
const Normal_1 = __importDefault(require("./Normal"));
class Critico extends Estado_1.default {
    prcReduccion = 0.2;
    cambiarEstado(reactor, temp) {
        if (this.esCambioNormal(temp)) {
            let nuevoEstado = new Normal_1.default();
            reactor.setEstado(nuevoEstado);
            return CambioEstado_1.CambioEstado.NORMAL;
        }
        if (this.esCambioApagado(temp)) {
            let nuevoEstado = new Apagado_1.default();
            reactor.setEstado(nuevoEstado);
            return CambioEstado_1.CambioEstado.APAGADO;
        }
        return CambioEstado_1.CambioEstado.NO_CAMBIO;
    }
    producir(temp) {
        return super.producir(temp) * this.prcReduccion;
    }
    esCambioNormal(temp) {
        return temp < 330;
    }
    esCambioApagado(temp) {
        return temp >= 400;
    }
}
exports.default = Critico;
//# sourceMappingURL=Critico.js.map