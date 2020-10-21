import { Forfait } from "./forfait";
import { HOTELS } from "./mock-hotels";

export const FORFAITS: Forfait[] = [
    { id: "1", destination: "Toronto", villeDepart: "Montréal", hotel: HOTELS[0], dateDepart: "12 mars 2021", dateRetour: "18 mars 2021", prix: 749 }
];