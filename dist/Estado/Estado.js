"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estado {
    _m = 12;
    _b = -3261;
    get m() {
        return this._m;
    }
    get b() {
        return this._b;
    }
    producir(temp) {
        return this.m * temp + this.b;
    }
}
exports.default = Estado;
//# sourceMappingURL=Estado.js.map