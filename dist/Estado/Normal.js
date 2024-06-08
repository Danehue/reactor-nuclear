"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Apagado_1 = __importDefault(require("./Apagado"));
const CambioEstado_1 = require("./CambioEstado");
const Critico_1 = __importDefault(require("./Critico"));
const Estado_1 = __importDefault(require("./Estado"));
class Normal extends Estado_1.default {
    cambiarEstado(temp, e) {
        if (this.cambiarACritico(temp)) {
            let nuevoEstado = new Critico_1.default();
            e.setEstado(nuevoEstado);
            return CambioEstado_1.CambioEstado.CRITICO;
        }
        if (this.cambiarAApagado(temp)) {
            let nuevoEstado = new Apagado_1.default();
            e.setEstado(nuevoEstado);
            return CambioEstado_1.CambioEstado.APAGADO;
        }
        return CambioEstado_1.CambioEstado.No_CAMBIO;
    }
    cambiarACritico(temp) {
        return temp >= 330 && temp < 400;
    }
    cambiarAApagado(temp) {
        return temp >= 400;
    }
}
exports.default = Normal;
//# sourceMappingURL=Normal.js.map