import { CambioEstado } from "./CambioEstado";
import EstadoSetter from "./EstadoSetter";

export default abstract class Estado{
    protected _m: number = 12;
    protected _b: number = -3260;
    
    public get m(): number {
        return this._m;
    }
    public get b(): number {
        return this._b;
    }

    public abstract cambiarEstado(temp: number, reactor: EstadoSetter): CambioEstado;
    
    public producir(temp: number): number {
        // y = 12x - 3261
        return this.m * temp + this.b;
    }
}