import Apagado from "./Apagado";
import { CambioEstado } from "./CambioEstado";
import Estado from "./Estado";
import EstadoSetter from "./EstadoSetter";
import Normal from "./Normal";

export default class Critico extends Estado {

    private prcReduccion: number = 0.2;
    
    public cambiarEstado(temp: number, e: EstadoSetter): CambioEstado {
        if (this.cambiarANormal(temp)) {
            let nuevoEstado: Estado = new Normal();
            e.setEstado(nuevoEstado);
            return CambioEstado.NORMAL;
        }
        if (this.cambiarAApagado(temp)) {
            let nuevoEstado: Estado = new Apagado();
            e.setEstado(nuevoEstado);
            return CambioEstado.APAGADO;
        }
        return CambioEstado.No_CAMBIO;
    }

    public producir(temp: number): number {
        return super.producir(temp) * this.prcReduccion;
    }

    private cambiarANormal(temp: number): boolean {
        return temp < 330;
    }
    private cambiarAApagado(temp: number): boolean {
        return temp > 400;
    }

}