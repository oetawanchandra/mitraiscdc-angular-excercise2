import { CompetencySet } from '../competency-set/competency-set.model';
import { CompetencyLevel } from '../competency-level.model';

export class SelfReview {
    year: number;
    competencySet: CompetencySet;
    level: CompetencyLevel;
    selfClaim: string;
    id: string;
    isSelected: boolean = false;
    isSaved: boolean = false;
    markAsDeleted: boolean;

    constructor (
        year: number,
        compSet: CompetencySet,
        level: CompetencyLevel,
        selfClaim: string) {
        this.year = year;
        this.competencySet = compSet;
        this.level = level;
        this.selfClaim = selfClaim;
        this.id = year.toString() + "_" + compSet.competency.id;
    }
}