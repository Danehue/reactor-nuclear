import { Reactor } from './Reactor';

export interface Suscriptor {
    actualizar(r:Reactor): void;
}