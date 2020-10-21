import { Hotel } from "./hotel"

export interface Forfait {
    id: string;
    destination: string;
    villeDepart: string;
    hotel: Hotel;
    dateDepart: string;
    dateRetour: string;
    prix: number;
}