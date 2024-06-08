"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CambioEstado_1 = require("./CambioEstado");
const Estado_1 = __importDefault(require("./Estado"));
const Normal_1 = __importDefault(require("./Normal"));
class Apagado extends Estado_1.default {
    cambiarEstado(temp, e) {
        if (this.cambiarANormal(temp)) {
            let nuevoEstado = new Normal_1.default();
            e.setEstado(nuevoEstado);
            return CambioEstado_1.CambioEstado.NORMAL;
        }
        return CambioEstado_1.CambioEstado.No_CAMBIO;
    }
    producir(temp) {
        return 0;
    }
    cambiarANormal(temp) {
        return temp < 330;
    }
}
exports.default = Apagado;
//# sourceMappingURL=Apagado.js.map