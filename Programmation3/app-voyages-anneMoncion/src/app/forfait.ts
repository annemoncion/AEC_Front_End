import { Hotel } from "./hotel"

export interface Forfait {
    id: string;
    destination: string;
    villeDepart: string;
    hotel: Hotel;
    dateDepart: Date;
    dateRetour: Date;
    prix: number;
    rabais: number;
    forfaitVedette: boolean;
}
