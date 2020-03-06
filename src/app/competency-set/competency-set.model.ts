import { Competency } from '../competency';

export class CompetencySet {
    year: number;
    competency: Competency;
    claimable: boolean;
    id: string;

    constructor(year: number, comp: Competency, claim: boolean) {
        this.year = year;
        this.competency = comp;
        this.claimable = claim;
        this.id = year.toString()+"_"+comp.id;
    }
}