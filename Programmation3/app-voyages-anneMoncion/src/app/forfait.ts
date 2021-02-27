import { Hotel } from "./hotel"

export interface Forfait {
    _id: string;
    destination: string;
    villeDepart: string;
    hotel: Hotel;
    dateDepart: string;
    dateRetour: string;
    dateDepartD: string;
    dateRetourD: string;
    prix: number;
    rabais: number;
    vedette: boolean;
    da: string;
}
