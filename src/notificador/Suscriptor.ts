// import { Reactor } from '../reactor/Reactor';
import Reactor from "../reactor/Reactor";

export interface Suscriptor {
    actualizar(r:Reactor): void;
}