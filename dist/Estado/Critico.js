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
    cambiarEstado(temp, e) {
        if (this.cambiarANormal(temp)) {
            let nuevoEstado = new Normal_1.default();
            e.setEstado(nuevoEstado);
            return CambioEstado_1.CambioEstado.NORMAL;
        }
        if (this.cambiarAApagado(temp)) {
            let nuevoEstado = new Apagado_1.default();
            e.setEstado(nuevoEstado);
            return CambioEstado_1.CambioEstado.APAGADO;
        }
        return CambioEstado_1.CambioEstado.No_CAMBIO;
    }
    producir(temp) {
        return super.producir(temp) * this.prcReduccion;
    }
    cambiarANormal(temp) {
        return temp < 330;
    }
    cambiarAApagado(temp) {
        return temp > 400;
    }
}
exports.default = Critico;
//# sourceMappingURL=Critico.js.map